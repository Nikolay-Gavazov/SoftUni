const a = 'telerik';
const b = 'teleric';

const arr1 = a.split(' ');
const arr2 = b.split(' ');

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
        console.log('Equal');
    } else if (arr1[i] < arr2[i]) {
        console.log('First');
    } else
        console.log('Second');
}