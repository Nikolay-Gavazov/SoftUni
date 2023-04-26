import { html } from '../../../../../node_modules/lit-html/lit-html.js';
import { buttonTemplate } from './buttonTemplate.js';
import { addFormTemplate, editFormTemplate } from './formTemplates.js';
import { tableTemplate } from './tableTemplate.js';

export const mainTemplate = () => {
    return html `
    ${buttonTemplate()} ${tableTemplate()}
    <form id="add-form">
        ${addFormTemplate()}
    </form>
    <form id="edit-form" style="display: none">
    </form>
    `;
}