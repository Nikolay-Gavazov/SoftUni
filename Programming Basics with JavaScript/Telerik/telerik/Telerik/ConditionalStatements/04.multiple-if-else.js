let input = [
  'U',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let letter = gets().toLowerCase();

if (letter === 'a') {
  console.log('Vowel [ei]');
} else if (letter === 'e') {
  console.log('Vowel [i:]');
} else if (letter === 'i') {
  console.log('Vowel [ai]');
} else if (letter === 'o') {
  console.log('Vowel [ou]');
} else if (letter === 'u') {
  console.log('Vowel [ju:]');
} else {
  console.log('Consonant');
}