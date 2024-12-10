document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.content p');
    const toggleSwitch = document.getElementById('toggleSwitch');

    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            content.classList.add('no-hover');
        } else {
            content.classList.remove('no-hover');
        }
    });

    if (!toggleSwitch.checked) {
        content.classList.remove('no-hover');
    } else {
        content.classList.add('no-hover');
    }
});
