import { html } from "../../../../node_modules/lit-html/lit-html.js";

export const layoutTemplate = (userData, content) => html`
<header>

            <h1><a href="/catalog">Orphelp</a></h1>

            <nav>
                <a href="/catalog">Dashboard</a>
                ${userData ? html `
                <div id="user">
                    <a href="/myPosts">My Posts</a>
                    <a href="/create">Create Post</a>
                    <a href="/logout">Logout</a>
                </div>
                ` : html `
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
                `}
            </nav>
        </header>
<main id="main-content">
    ${content}
</main>
`;