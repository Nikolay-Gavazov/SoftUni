function json(input) {
    const result = [];
    result.push('<table>')
    const data = JSON.parse(input);

    const keys = Object.keys(data[0]);

    result.push(`   <tr>${keys.map(e => `<th>${e}</th>`).join('')}</tr>`)

    for (let el of data) {
        result.push(`   <tr>${keys.map(e => `<td>${el[e]}</td>`).join('')}</tr>`)
    }

    result.push('</table>')

    return result.join('\n');
}
json(`[{"Name":"Stamat",

"Score":5.5},

{"Name":"Rumen",

"Score":6}]`)