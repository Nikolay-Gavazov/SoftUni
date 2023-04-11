import {html} from '../lib/lit-html.js'


const settingsTemplate = () => html `
<h1>Settings</h1>
`;

export function settingsView(ctx){
    ctx.render(settingsTemplate());
}
