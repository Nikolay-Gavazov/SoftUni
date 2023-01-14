let input = []
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


for (i=0;i<4; i++)
{
    if(i !=0) print();

    for ( j=0; j<13; j++)
    {
        switch (j)
        {
            case 0: print(`2`);break;    
            case 1: print(`3`);break;    
            case 2: print(`4`);break;   
            case 3: print(`5`);break;   
            case 4: print(`6`);break;   
            case 5: print(`7`);break;   
            case 6: print(`8`);break;   
            case 7: print(`9`);break;   
            case 8: print(`10`);break;   
            case 9: print(`J`);break;   
            case 10: print(`Q`);break;   
            case 11: print(`K`);break;   
            case 12: print(`A`);break;    
        }
        switch(i)
        {
            case 0: print(`of Hearts `);
            print();
            break;
            case 1: print(`of Diamonds `);
            print();
            break;
            case 2: print(`of Spades `);
            print();
            break;
            case 3: print(`of Clubs `);
            print();
            break;   

        }
    }
}

