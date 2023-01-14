let input = ['4 3 3 4 2 2']
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = String(input);
let b = a.replace(/\s+/g, '');
let c = Array.from(b)
let d = c.length;

let even = 1;
let odd = 1; 
  
for (let i = 0; i < d; ++i) 
        { 
            if (i % 2 == 0) 
                odd *= c[i]; 
            else
                even *= c[i]; 
        } 

if ( even == odd) {
    print(`yes`);
}else ( print(`no`));
//print(`odd_product=${odd}`);
//print(`even_product=${even}`);