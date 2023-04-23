const template = document.getElementById('popup-template');

class InfoPopup extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode :'open'});
    }
}