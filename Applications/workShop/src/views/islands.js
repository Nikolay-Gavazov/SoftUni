import {html} from '../lib/lit-html.js'


const islandsTemplate = () => html `
<h1>Islands Page</h1>
`;

export function islandsView(ctx){
    ctx.render(islandsTemplate());
}
