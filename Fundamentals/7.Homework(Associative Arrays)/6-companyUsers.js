function companyUsers(input) {


    let companyS = {};

    input.forEach(el => {
        let [company, id] = el.split(' -> ');
        if (!companyS.hasOwnProperty(company)) {
            companyS[company] = new Set();
        }
        companyS[company].add(id);

    });

    let sorted = Object.entries(companyS).sort((a, b) => a[0].localeCompare(b[0]));

    sorted.forEach(el => {
        let companyName = el[0];
        let idS = el[1];
        console.log(companyName);
        for (let id of idS) {
            console.log(`-- ${id}`);
        }

    });
}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345'])