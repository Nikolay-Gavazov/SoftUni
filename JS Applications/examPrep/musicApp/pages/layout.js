import { html } from "../../../../node_modules/lit-html/lit-html.js";

export const layoutTemplate = (userData, content) => html`
<header>
    <nav>
        <img src="./images/headphones.png">
        <a href="/">Home</a>
        <ul>
            <!--All user-->
            <li><a href="/catalog">Catalog</a></li>
            <li><a href="/search">Search</a></li>
            ${!userData ? html`
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
            ` : html`
            <li><a href="/create">Create Album</a></li>
            <li><a href="/logout">Logout</a></li>
            `}
        </ul>
    </nav>
</header>

<main id="main-content">
    ${content}
</main>

<footer>
            <div>
                &copy;SoftUni Team 2021. All rights reserved.
            </div>
        </footer>
`;