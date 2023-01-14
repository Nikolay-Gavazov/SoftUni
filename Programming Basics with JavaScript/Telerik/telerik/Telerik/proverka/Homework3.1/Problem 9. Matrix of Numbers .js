let input = [3]

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let n = gets();

for (i=0; i<n; i++)
{
    for ( j=1; j<n+1; j++)
    {
        if (j+i>9)
        {
            print( ' ', j + i);
        }
        else
        {
            print( ' ', j +i);
        }
    }
    print();
}