module main

import net.http
import os
import sync
import time
import traffic
import veb

const port = 8082
const visit_cookie_name = 'vlang_session_visit'
const contact_email = 'alexander@vlang.io'
const stats_access_header = 'X-Stats-Access'

pub struct App {
	veb.StaticHandler
mut:
	traffic       &traffic.Tracker = unsafe { nil }
	stats_traffic &traffic.Tracker = unsafe { nil }
	traffic_lock  sync.Mutex
}

pub struct Context {
	veb.Context
mut:
	lang Lang
}

enum Lang {
	en
	ru
	es
	fr
	ja
	zh
	tr
	pt_br
	fa
	// cn
	// pt
}

fn (lang Lang) str() string {
	return match lang {
		.en { 'en' }
		.ru { 'ru' }
		.es { 'es' }
		.fr { 'fr' }
		.ja { 'ja' }
		.zh { 'zh' }
		.tr { 'tr' }
		.pt_br { 'pt-br' }
		.fa { 'fa' }
	}
}

fn lang_from_code(code string) ?Lang {
	return match code {
		'en' { .en }
		'ru' { .ru }
		'es' { .es }
		'fr' { .fr }
		'ja' { .ja }
		'zh' { .zh }
		'tr' { .tr }
		'pt-br' { .pt_br }
		'fa' { .fa }
		else { none }
	}
}

// pub fn (app App) before_request() {
// println('[web] before_request: ${app.req.method} ${app.req.url}')
//}

fn main() {
	conninfo := os.getenv('VLANG_DB_CONNINFO')
	mut app := &App{}
	if conninfo != '' {
		app.traffic = traffic.new(traffic.Config{
			conninfo: conninfo
			site_id:  'vlang.io'
		}) or { panic('Could not initialise traffic tracking: ${err}') }
		app.stats_traffic = traffic.new(traffic.Config{
			conninfo: conninfo
			site_id:  'vlang.io'
		}) or { panic('Could not initialise traffic statistics: ${err}') }
	} else {
		eprintln('Traffic tracking is disabled (set VLANG_DB_CONNINFO to enable it).')
	}
	app.static_mime_types['.vtt'] = 'text/vtt; charset=utf-8'
	// app.serve_static('/favicon.ico', 'src/assets/favicon.ico')
	// makes all static files available.
	app.mount_static_folder_at(os.resource_abs_path('static'), '/')!
	/*
	app.mount_static_folder_at(os.resource_abs_path('.'), '/') or {
		println(err)
		return
	}
	*/

	veb.run_at[App, Context](mut app, host: 'localhost', port: port, family: .ip) or {
		panic('Failed to start Veb server: ${err}')
	}
}

pub fn (mut app App) index(mut ctx Context) veb.Result {
	ctx.set_lang() // TODO use middleware
	user_agent := ctx.req.header.get(.user_agent) or { '' }
	if traffic.is_bot_request(user_agent, ctx.req.url) {
		// Crawlers do not reliably retain cookies, so preserve each event while
		// the tracker keeps it out of the human totals.
		app.record_home_visit(ctx)
	} else if ctx.get_cookie(visit_cookie_name) == none {
		// Count at most once per browser session. The cookie is never stored.
		app.record_home_visit(ctx)
		ctx.set_cookie(http.Cookie{
			name:      visit_cookie_name
			value:     '1'
			path:      '/'
			secure:    true
			http_only: true
			same_site: .same_site_lax_mode
		})
	}

	return $veb.html('index.html')
}

@['/compare']
pub fn (mut app App) compare(mut ctx Context) veb.Result {
	ctx.set_lang()
	return $veb.html('templates/compare.html')
}

@['/utc_now']
pub fn (mut app App) utc_now(mut ctx Context) veb.Result {
	return ctx.text(time.now().unix().str())
}

@['/stats228']
pub fn (mut app App) stats228(mut ctx Context) veb.Result {
	access_token := os.getenv('VLANG_STATS_TOKEN')
	provided_token := ctx.req.header.get_custom(stats_access_header) or { '' }
	if access_token == '' || provided_token != access_token {
		ctx.res.set_status(.forbidden)
		return ctx.text('Forbidden')
	}
	if app.stats_traffic == unsafe { nil } {
		ctx.res.set_status(.service_unavailable)
		return ctx.html('<!doctype html><title>Traffic statistics unavailable</title><p>Traffic statistics are disabled for this local server.</p>')
	}
	return ctx.html(app.stats_traffic.stats_html(ctx.req.url, traffic.PageConfig{
		site_name:  'V'
		page_title: 'V traffic statistics'
		home_url:   '/'
		stats_path: '/stats228'
	}))
}

fn (mut app App) record_home_visit(ctx Context) {
	if app.traffic == unsafe { nil } {
		return
	}
	// Veb serves requests concurrently, while each tracker owns one PostgreSQL
	// connection. Traffic collection must never hold up page delivery.
	if !app.traffic_lock.try_lock() {
		return
	}
	defer {
		app.traffic_lock.unlock()
	}
	app.traffic.record(traffic.Request{
		url:        ctx.req.url
		referer:    ctx.get_header(.referer) or { '' }
		user_agent: ctx.req.header.get(.user_agent) or { '' }
		country:    ctx.get_custom_header('CF-IPCountry') or { '' }
	}) or { eprintln('Could not record page visit: ${err}') }
}

pub fn (mut ctx Context) set_lang() {
	code := ctx.get_cookie('lang') or { 'en' }
	ctx.lang = lang_from_code(code) or { Lang.en }
}

fn (ctx Context) html_dir() string {
	return if ctx.lang == .fa { 'rtl' } else { 'ltr' }
}

fn build_tr_menu(cur_lang Lang) string {
	// mut sb := strings.new_builder()
	// sb.write_string('<select>')
	// TODO loop when more languages are added
	s := '<select id=select_lang>' +
		'<option value=en ${if cur_lang == .en { 'selected' } else { '' }}>EN</option>' +
		'<option value=ru ${if cur_lang == .ru { 'selected' } else { '' }}>РУ</option>' +
		'<option value=es ${if cur_lang == .es { 'selected' } else { '' }}>ES</option>' +
		'<option value=fr ${if cur_lang == .fr { 'selected' } else { '' }}>FR</option>' +
		'<option value=ja ${if cur_lang == .ja { 'selected' } else { '' }}>日本語</option>' +
		'<option value=zh ${if cur_lang == .zh { 'selected' } else { '' }}>中文</option>' +
		'<option value=tr ${if cur_lang == .tr { 'selected' } else { '' }}>TR</option>' +
		'<option value=pt-br ${if cur_lang == .pt_br { 'selected' } else { '' }}>PT-BR</option>' +
		'<option value=fa ${if cur_lang == .fa { 'selected' } else { '' }}>فارسی</option></select>'
	/*
	s := match cur_lang {
		.ru { 'English' }
		.en { 'Русский' }
	}
	*/
	return s
}

@['/change_lang/:lang'; post]
pub fn (mut app App) change_lang(mut ctx Context, lang string) veb.Result {
	selected_lang := lang_from_code(lang) or {
		ctx.res.set_status(.bad_request)
		return ctx.json('Unsupported language')
	}
	expire_date := time.now().add_days(400)
	ctx.set_cookie(
		name:      'lang'
		value:     selected_lang.str()
		path:      '/'
		expires:   expire_date
		same_site: .same_site_lax_mode
	)
	// return ctx.redirect('/')
	return ctx.json('ok')
}
