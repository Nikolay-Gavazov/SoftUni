function townsToJSON(arr) {

    let result = [];
    for (let i = 1; i < arr.length; i++) {
        let [a, town, lat, long] = arr[i].split(/[\s]?[\|][\s]*/gm);
        let obj = {};
        lat = Number(lat).toFixed(2);
        long = Number(long).toFixed(2);
        obj.Town = town;
        obj.Latitude = Number(lat)
        obj.Longitude = Number(long);
        result.push(obj);
    }
    console.log(JSON.stringify(result));
}
townsToJSON(['| Town | Latitude | Longitude |',

'| Veliko Turnovo | 43.0757 | 25.6172 |',

'| Monatevideo | 34.50 | 56.11 |'])
