function encodeAndDecodeMessages() {
    const textAreas = Array.from(document.querySelectorAll('textarea'));
    const buttons = Array.from(document.querySelectorAll('button'));
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode() {
        let coded = '';
        let text = Array.from(textAreas[0].value);
        text.forEach(el => {
            el = String.fromCharCode(el.charCodeAt() + 1)
            coded += el
            textAreas[1].value = coded;
            textAreas[0].value = '';
        });
    }

    function decode() {
        let decoded = '';
        let text = Array.from(textAreas[1].value);
        text.forEach(el => {
            el = String.fromCharCode(el.charCodeAt() - 1)
            decoded += el;
            textAreas[1].value = decoded;
        });
    }
}
