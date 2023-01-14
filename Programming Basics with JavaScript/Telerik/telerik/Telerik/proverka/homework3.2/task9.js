let input = [
    '4'

];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = Number(gets());
    for (var i = 1; i <= n; i++) {
      var result = "";
      for (var j = 1; j <= n; j++) {
        result += (i + j - 1);
      }
      console.log(result.split("").join(" "));
    }
