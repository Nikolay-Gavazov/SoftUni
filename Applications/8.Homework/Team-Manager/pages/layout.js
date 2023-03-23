import { html } from "../../../../node_modules/lit-html/lit-html.js";

//TODO Replace with actual layout

export const layoutTemplate = (userData, content) => html`
<header id="titlebar" class="layout">
    <a href="/" class="site-logo">Team Manager</a>
<nav>
    <a href="/teamsPage" class="action">Browse Teams</a>
    ${userData ? html`
    <a href="/myTeamsPage" class="action">My Teams</a>
    <a href="/logout" class="action">Logout</a>` : html`
    <a href="/login" class="action">Login</a>
    <a href="/register" class="action">Register</a>`}
</nav>
</header>
<main>
    ${content}
</main>
`;

