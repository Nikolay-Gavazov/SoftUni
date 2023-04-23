const template = document.getElementById('popup-template');

class InfoPopup extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode :'open'});
    }

    connectedCallback(){
        this.shadowRoot.appendChild(template.contentEditable.cloneNode(true));
    }

}

customElements('info-popup', InfoPopup);