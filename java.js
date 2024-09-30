const toggleSwitch = document.querySelector('#toggle-switch');

toggleSwitch.addEventListener('change', () => {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    currentTheme === 'dark' ? setLightTheme() : setDarkTheme();
});

function setDarkTheme() {
    document.documentElement.setAttribute('data-theme', 'dark');
}

function setLightTheme() {
    document.documentElement.setAttribute('data-theme', 'light');
}