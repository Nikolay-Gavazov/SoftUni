import page from "../lib/page.mjs";
import {html, render} from '../lib/lit-html.js'

page('/', () => render (html `<h1>asd</h1>`, document.body ))

page.start();