import { loadConfig } from '../data/confing.js';
import {html} from '../lib/lit-html.js'

let config = null;

export function icon(name, ...classList){
    return until(resolveIcon(name, classList), iconTemplate(15, 13, classList));
}

async function resolveIcon(name, classList){
    if(config == null){
        config = loadConfig('icons');
    }

    let data = (await config)[name];

    if(!data){
        data = (await config).missing
    }
    return iconTemplate(data[0], data[1]);
}

const iconTemplate = (x, y) => html `
<span class="icon" ${classList.join(' ')} style="background-position: -${x * 46}px -${y * 46}px"></span>`