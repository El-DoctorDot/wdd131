const lastModifiedDate = new Date(document.lastModified).toLocaleDateString('en-US');
const lastModifiedTime = new Date(document.lastModified).toLocaleTimeString('en-US');
const lastModifiedParagraph = document.getElementById('lastmodified');
lastModifiedParagraph.innerHTML = `Last modified on: ${lastModifiedDate} at ${lastModifiedTime}`;

const year = new Date().getFullYear();
const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = year;
}

const menuBtn = document.querySelector('#menu')
const nav = document.querySelector('.navigation')
const main = document.querySelector('main');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    main.classList.toggle('main-shifted');
    menuBtn.textContent = nav.classList.contains('open') ? 'X' : '≡';
});