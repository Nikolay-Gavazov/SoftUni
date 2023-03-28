import { html } from "../../../../node_modules/lit-html/lit-html.js";
import { getAll } from "../src/data/data.js";

//TODO

const catalogTemplate = (elements) => html`
//TODO
`;

export async function catalogPage(ctx) {
    const elements = await getAll();
    ctx.render(catalogTemplate(elements))
}