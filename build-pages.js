const nunjucks = require("nunjucks")
const sass = require('sass')
const NCP = require('ncp')
const CleanCSS = require('clean-css')
const fetch = require('node-fetch')
const mdtoc = require('markdown-toc')
const { promisify } = require('util')
const path = require("path")
const fs = require("fs")
const mkdir = promisify(fs.mkdir)
const rmdir = promisify(fs.rm)
const writeFile = promisify(fs.writeFile)
const renderSass = promisify(sass.render)
const ncp = promisify(NCP.ncp)

const pages = [
    'index',
    'compare'
    //'docs'
    //'play',
    //'modules',
    //'editors',
    // 'faq' 

]

async function compile() { //this is supposed to build docs but it doesnt work at line 79
    /*console.log('Building docs')

    console.log('Setting up MD parser')
    var md = require('markdown-it')({})
        .use(require('markdown-it-toc-and-anchor').default, { slugify: require('uslug') })
    md.renderer.rules.fence = function(tokens, idx) {
        let code = tokens[idx].content
            .replace(/\n/g, '\\n')
            .replace(/"/g, '\\"')
        if (code.endsWith('\\n')) code = code.slice(0, -2)
        return `{% set code = "${code}" %}
    {% set noheader = true  %}
    {% include '../components/codeblock.njk' %}
    {% set noheader = false %}\n`
    }

    console.log('Fetching MD from github')
    let docsMD = await fetch('https://raw.githubusercontent.com/vlang/v/master/doc/docs.md') 

    console.log('Building NJK from MD')
    docsMD = await docsMD.text()
    let docs = md.render(docsMD)
    await writeFile('./pages/docs/content.njk', docs) 

    console.log('Generating TOC')
    let toc = mdtoc(docsMD, { slugify: require('uslug') }).content
    console.log('Building NJK from MD TOC')
    toc = md.render(toc)
    await writeFile('./pages/docs/toc.njk', toc) */

    console.log('Fetching lastest release')
    let release = await fetch('https://api.github.com/repos/vlang/v/releases/latest')
    release = await release.json()
    let win = release.assets.find(r => r.name === 'v_windows.zip')
    let lin = release.assets.find(r => r.name === 'v_linux.zip')
    let mac = release.assets.find(r => r.name === 'v_macos.zip')
    let versions = `{% set lin_size = "${Math.round((lin.size / 1024 / 1024)*10)/10}MB" %}
    {% set mac_size = "${Math.round((mac.size / 1024 / 1024)*10)/10}MB" %}
    {% set win_size = "${Math.round((win.size / 1024 / 1024)*10)/10}MB" %}
    {% set version = "${release.name}" %}`
    await writeFile('./pages/home/download-versions.njk', versions)
    console.log('Building pages')
    let buildDir = "./build"
    await fs.rmSync(buildDir, { recursive: true, force: true });
    console.log('Deleting old build folder if exists')
    await fs.promises.mkdir(buildDir, { recursive: true })
    console.log('Creating new build folder')
    await Promise.all(
        pages.map(page =>
            writeFile(
                path.join(buildDir, page + ".html"),
                nunjucks.render(path.join("./pages", page + ".njk")), // this doesnt work for docs.njk
                err => err && console.error(err)
            )
        )
    )
    console.log('Building sass')
    let app_sass = await renderSass({ file: './app.sass' })
    let clean_css = new CleanCSS({}).minify(app_sass.css.toString())
    await writeFile("./build/app.css", clean_css.styles, 'utf8')
    console.log('Copying res')
    ncp('./res', './build')
    console.log('Building successfully finished!')
    console.log('Serving page on localhost:3000 via serve cause of "&& npx serve -s build" from line 23 of package.json')
}

compile()