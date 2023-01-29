function attachGradientEvents() {
    const result = document.getElementById('result');
    const element = document.getElementById('gradient');
    element.addEventListener('mousemove', func = (event) => {
        const res = Math.floor(event.offsetX / 3);
        result.textContent = `${res}%`
    });
    element.addEventListener('mouseout', out = () => { result.textContent = '' });

}