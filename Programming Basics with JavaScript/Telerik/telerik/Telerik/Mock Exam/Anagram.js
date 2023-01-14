let input = [
    'anagram',
    '6',
    'gramann',
    'aaagrnm',
    'anagram',
    'margana',
    'yxy',
    'xz'
];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let theAnagram = gets().split('').sort().join('');
let numberOfWords = Number(gets());

for (let i = 0; i < numberOfWords; i++) {
    let testAnagram = gets().split('').sort().join('');
    let isAnagram = true;
    if (theAnagram === testAnagram) {
        isAnagram = true;
    } else {
        isAnagram = false;
    }


    if (isAnagram) {
        print('Yes')
    } else {
        print('No')
    }
}