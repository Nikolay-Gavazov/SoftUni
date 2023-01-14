let input = [
    'anagram',
    '6',
    'gramana',
    'aaagrnm',
    'anagra',
    'margana',
    'yxy'
];
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let theAnagram = gets().split('').sort().join('');
let numberOfWords = Number(gets());

for (let i = 0; i < numberOfWords; i++) {
    let testAnagram = gets().split('').sort().join('');
    let isAnagram = true;



    if (isAnagram) {
        print('Yes');
    } else {
        print('No');
    }
}