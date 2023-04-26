function attachEventsListeners() {
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minsInput = document.getElementById('minutes');
    const secsInput = document.getElementById('seconds');

    const dayBtn = document.getElementById('daysBtn').addEventListener('click', day);
    const hourBtn = document.getElementById('hoursBtn').addEventListener('click', hour);
    const minBtn = document.getElementById('minutesBtn').addEventListener('click', min);
    const secBtn = document.getElementById('secondsBtn').addEventListener('click', sec);

    function day() {
        hoursInput.value = daysInput.value * 24;
        minsInput.value = hoursInput.value * 60;
        secsInput.value = minsInput.value * 60;

    }
    function hour() {
        daysInput.value = hoursInput.value / 24;
        minsInput.value = hoursInput.value * 60;
        secsInput.value = minsInput.value * 60;
    }
    function min() {
        secsInput.value = minsInput.value * 60;
        hoursInput.value = minsInput.value / 60;
        daysInput.value = hoursInput.value / 24;


    }
    function sec() {
        minsInput.value = secsInput.value / 60;
        hoursInput.value = minsInput.value / 60;
        daysInput.value = hoursInput.value / 24;
    }
}