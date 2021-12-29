let nightOrDark = () => {
    //const sliderButton = document.getElementById('nightOrDarkMode');
    let chosenTheme = document.getElementsByTagName('link')[1];
    let textNightOrDay = document.getElementById('nightOrDay');

    if (chosenTheme.getAttribute('href') == './css/darkstyle.css') {
        chosenTheme.setAttribute('href', './css/lightstyle.css');
        textNightOrDay.innerHTML = 'Choose for the Dark side?';        
    } else {
        chosenTheme.setAttribute('href', './css/darkstyle.css');
        textNightOrDay.innerHTML = 'Choose for the Light side?'; 
    }
}