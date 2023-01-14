let input = ['4'] ;

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());

for (let i = 1; i <= n; i++) {
     matrix = '';
     for (let j = i; j < (n + i); j++){
     matrix += j + ' ';

    }
    print(matrix);
  }
