let input = ['9'] ;
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets()) ; 
let result = ''; 

for (let i = 1; i <= n; i++) {
    if (i % 3 !== 0 && i % 7 !== 0) {
        result += i + ' ';
    }
}

print(result) ; 