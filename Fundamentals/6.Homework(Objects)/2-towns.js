function towns(arr){

    let towns = {};

    for(let element of arr){
        let [town, latitude, longitude] = element.split(' | ');
        towns['town'] = town;
        towns['latitude'] = Number(latitude).toFixed(2);
        towns['longitude'] = Number(longitude).toFixed(2);
        console.log(towns);
    }

}
towns(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])