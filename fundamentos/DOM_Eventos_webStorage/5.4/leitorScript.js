const darkTheme = document.querySelector('.button');

function darkThemeActivation() {
    const bodyColor = document.querySelector('body').style.backgroundColor;
    const newColor = document.querySelector('body');
    const text = document.querySelector('#text');
    const footerText = document.querySelector('#footer-text');
    const headerText = document.querySelector('#header-text');
    let footerTextColor = footerText.style.color;
    let headerTextColor = headerText.style.color;
    let textColor = text.style.color;
    if (bodyColor === 'white') {
        newColor.style.backgroundColor = 'rgb(13,13,13)';
        textColor = 'white';
        footerTextColor = 'white';
        headerTextColor = 'white';
    } else {
        newColor.style.backgroundColor = 'white';
        textColor = 'black';
        headerTextColor = 'black';
        footerTextColor = 'black';
    }
    localStorage.setItem('textColor');
    localStorage.setItem('headerTextColor');
    localStorage.setItem('footerTextColor');
    localStorage.setItem('bodyColor');

}


darkTheme.addEventListener('click', darkThemeActivation);

function fontSize() {
    const text = document.querySelector('#text');
    const fontButton = document.querySelectorAll('button')[1];
    const fontSize = document.querySelector('text').style.fontSize;
    
}