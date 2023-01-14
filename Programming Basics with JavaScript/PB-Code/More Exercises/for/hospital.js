function hospital(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let patients = 0;
    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatientsCount = 0;
    let untreatedPatients = 0;
    for (let i = 1; i <= days; i++) {
        patients = Number(input[index]);
        index++;
        if (patients <= doctors) {
            treatedPatients += patients;
        } else {
            treatedPatients += doctors;
            untreatedPatientsCount = patients - doctors;
            untreatedPatients += untreatedPatientsCount;
        }

        if (index % 3 === 0 && untreatedPatients > treatedPatients) {
            doctors++;
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`);
}
hospital('3,7,7,7'
)