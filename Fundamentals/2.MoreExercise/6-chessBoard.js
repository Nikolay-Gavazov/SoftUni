function chessBoard(size) {
    let output = `<div class="chessboard">\n`;
    for (let row = 0; row < size; row++) {
        output += `  <div>\n`;
        let color = (row % 2 == 0) ? "black" : "white";
        for (let col = 0; col < size; col++) {
            output += `    <span class="${color}"></span>\n`;
            color = (color == "white") ? "black" : "white";
        }
        output += `  </div>\n`;
    }
    output += `</div>`;


    console.log(output);
}
chessBoard(3)