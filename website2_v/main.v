module main

import veb
// import databases
import os
import time

const port = 8082

pub struct App {
	veb.StaticHandler
}

struct Context {
	veb.Context
mut:
	lang Lang
}

enum Lang {
	en
	ru
	// cn
	// es
	// pt
	// fr
	// jp
}

// pub fn (app App) before_request() {
// println('[web] before_request: ${app.req.method} ${app.req.url}')
//}

fn main() {
	/*
	mut db := databases.create_db_connection() or { panic(err) }

	sql db {
		create table User
		create table Product
	} or { panic('error on create table: ${err}') }

	db.close() or { panic(err) }

	*/
	mut app := &App{}
	// app.serve_static('/favicon.ico', 'src/assets/favicon.ico')
	// makes all static files available.
	app.mount_static_folder_at(os.resource_abs_path('static'), '/')!
	/*
	app.mount_static_folder_at(os.resource_abs_path('.'), '/') or {
		println(err)
		return
	}
	*/

	veb.run[App, Context](mut app, port)
}

pub fn (mut app App) index() veb.Result {
	ctx.set_lang() // TODO use middleware
	title := 'vweb app'

	return $veb.html()
}

pub fn (mut ctx Context) set_lang() {
	ctx.lang = Lang.from_string(ctx.get_cookie('lang') or { 'en' }) or { Lang.en }
}

fn build_tr_menu(cur_lang Lang) string {
	println('BUILD TR ${cur_lang}')
	// mut sb := strings.new_builder()
	// sb.write_string('<select>')
	// TODO loop when >2 langs
	s := '<select id=select_lang>' +
		'<option value=en ${if cur_lang == .en { 'selected' } else { '' }}>English</option>' +
		'<option value=ru ${if cur_lang == .ru { 'selected' } else { '' }}>Русский</option></select>'
	/*
	s := match cur_lang {
		.ru { 'English' }
		.en { 'Русский' }
	}
	*/
	return s
}

@['/change_lang/:lang'; post]
pub fn (mut app App) change_lang(lang string) veb.Result {
	println('CHANGING LANG ${lang}')
	expire_date := time.now().add_days(400)
	ctx.set_cookie(name: 'lang', value: lang, path: '/', expires: expire_date)
	// return ctx.redirect('/')
	return ctx.json('ok')
}
