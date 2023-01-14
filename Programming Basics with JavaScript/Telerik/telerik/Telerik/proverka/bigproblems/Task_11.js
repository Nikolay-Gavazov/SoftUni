let A = [1, 2, 3, 4, 3, 6, 5, 8, 3, 9];
let sum = 6;
// consider each element except last element
for (let i = 0; i < A.length - 1; i++)
{
    // start from i'th element till last element
    for (let j = i + 1; j < A.length; j++)
    {
        // if desired sum is found, print it and return
        if (A[i] + A[j] == sum)
        {
            console.log(A[i] + ', ' + A[j]);

        }
    }
}
