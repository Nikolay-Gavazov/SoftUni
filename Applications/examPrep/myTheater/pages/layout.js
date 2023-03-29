import { html } from "../../../../node_modules/lit-html/lit-html.js";

export const layoutTemplate = (userData, content) => html`
<header>
    <nav>
        <a href="/home">Theater</a>
        <ul>
            ${userData ? html`
            <li><a href="/profile">Profile</a></li>
            <li><a href="/create">Create Event</a></li>
            <li><a href="/logout">Logout</a></li>
            ` : html`
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            `}
        </ul>
    </nav>
</header>

<main id="content">
    ${content}
</main>
`;