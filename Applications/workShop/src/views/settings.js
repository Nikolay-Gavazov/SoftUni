import {html} from '../lib/lit-html.js'


const settingsTemplate = (user) => html `
<h1>Settings Page</h1>
<section class = 'main'>
    ${!user ? html `
    <div>
        <a class = 'link' href = '/login'>Sign in</a> to enable cloud sync
    </div>
    ` : null}
    
</section>
`;

export function settingsView(ctx){
    ctx.render(settingsTemplate(ctx.user));
}
