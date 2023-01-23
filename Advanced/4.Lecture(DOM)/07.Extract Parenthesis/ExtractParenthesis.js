function extract(content) {
    let text = document.getElementById('content').textContent;
    let pattern = /\((?<match>[^)]+)\)/gm;
    
    let match = text.matchAll(pattern);

    console.log(match.match);
}