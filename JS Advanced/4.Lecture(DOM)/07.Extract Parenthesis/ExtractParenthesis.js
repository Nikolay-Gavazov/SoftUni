function extract(content) {
    const text = document.getElementById(content).textContent;
    const pattern = /\(([^)]+)\)/gm;
    let result = [];
    let match = text.matchAll(pattern);
    for(let el of match){
        result.push(el[1]);
    }
    return result.join('; ')
}