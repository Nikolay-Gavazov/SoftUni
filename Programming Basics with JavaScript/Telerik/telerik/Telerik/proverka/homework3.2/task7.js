for (let cards = 1; cards < 14; cards++)
{
    for (let type = 1; type < 5; type++)

    {
        switch (cards)
        {
            case 1:
                console.log("2");
                break;
            case 2:
                console.log("3");
                break;
            case 3:
                console.log("4");
                break;
            case 4:
                console.log("5");
                break;
            case 5:
                console.log("6");
                break;
            case 6:
                console.log("7");
                break;
            case 7:
                console.log("8");
                break;
            case 8:
                console.log("9");
                break;
            case 9:
                console.log("10");
                break;
            case 10:
                console.log("J");
                break;
            case 11:
                console.log("Q");
                break;
            case 12:
                console.log("K");
                break;
            case 13:
                console.log("A");
                break;
        }
        switch (type)
        {
            case 1:
        //        console.log("of"); 
                console.log(" of "+'\u2663');
                break;
            case 2:
                 // console.log("of"); 
                console.log(" of "+'\u2666');
                break;
            case 3:
              //  console.log("of"); 
                console.log(" of "+'\u2665');
                break;
            case 4:
               // console.log("of");    
                console.log(" of "+'\u2660');
                
                break;
        }
   
    }
}

