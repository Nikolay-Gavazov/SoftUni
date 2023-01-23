function solve() {
  const text = document.getElementById('text').value;
  const convention = document.getElementById('naming-convention').value;
  let result = text.toLowerCase().split(' ');
  result.forEach((el, i) => {
    let currentEl = el[0].toUpperCase() + el.slice(1);
    result[i] = currentEl
  });
  result = result.join('')
  if (convention == 'Pascal Case') {

  } else if (convention == 'Camel Case') {
    result = result[0].toLowerCase() + result.slice(1)
    debugger
  } else {
    result = ['Error!']
  }
  document.getElementById('result').innerText = result

}