function solve() {
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  const inputArr = input.value.split('. ');
  let outputArr = []
  while (inputArr.length > 0) {
    console.log(inputArr);
    let sentence = inputArr.shift();
    sentence.includes('.') ? sentence : sentence + '.';
    outputArr.push(sentence);
    if (outputArr.length == 3) {
      output.innerHTML += `<p>${outputArr.join('.')}</p>`;
      outputArr = [];
    }
  }
  if (outputArr.length < 3) {
    output.innerHTML += `<p>${outputArr.join('.')}</p>`;
  }

}