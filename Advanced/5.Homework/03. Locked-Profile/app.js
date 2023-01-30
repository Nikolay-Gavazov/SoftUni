function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('button'))

    buttons.forEach((button, i) => {

        button.addEventListener('click', func = () => {
            const lock = document.getElementsByName(`user${i + 1}Locked`)[0].checked;
            const hiddenInfo = document.getElementById(`user${i + 1}HiddenFields`)
            if (lock) {

            } else {
                if (button.textContent == 'Show more') {
                    button.textContent = 'Hide it'
                    hiddenInfo.style.display = 'block';
                } else {
                    button.textContent = 'Show more';
                    hiddenInfo.style.display = 'none';
                }
            }
        })

    });

}