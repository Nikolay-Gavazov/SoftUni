function editElement(id, text, replacer) {
    const element = id.textContent;
    const result = element.split(text).join(replacer);
    id.textContent = result;
}