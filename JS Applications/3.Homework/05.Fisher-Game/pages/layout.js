import { html } from "../../../../node_modules/lit-html/lit-html.js";


export const layoutTemplate = (userData, content) => html`
<header>
        <h1>Biggest Catch</h1>
        <nav>
            <a id="home" class="active" href="/">Home</a>
            ${userData ? html `
            <div id="user">
                <a id="logout" href="/logout">Logout</a>
            </div>
            <p class="email">Welcome, <span>${userData.email}</span></p>
            ` : html `
            <div id="guest">
                <a id="login" href="/login">Login</a>
                <a id="register" href="/register">Register</a>
            </div>
            <p class="email">Welcome, <span>guest</span></p>
            `}
        </nav>
    </header>

<main>
    ${content}
</main>
`;