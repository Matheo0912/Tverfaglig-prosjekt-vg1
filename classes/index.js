// Left and Right navigation
const pages = [
    'om.html',
    'tech.html',
    'yff.html',
    'media.html',
    'program.html',
    'kontakt.html'
];

const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');

let currentPageIndex = pages.indexOf(
    window.location.pathname.split('/').pop()
);


function left() {
    currentPageIndex = (currentPageIndex - 1 + pages.length) % pages.length;
    window.location.href = pages[currentPageIndex];
}

function right() {
    currentPageIndex = (currentPageIndex + 1) % pages.length;
    window.location.href = pages[currentPageIndex];
}

leftButton.addEventListener('click', (left));
rightButton.addEventListener('click', (right));

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') right();
    if (event.key === 'ArrowLeft') left();
});

// nav glow
const currentFile = window.location.pathname.split('/').pop();
const navlinks = document.querySelectorAll('nav a');

navlinks.forEach(link => {
    if (link.getAttribute('href') === currentFile) {
        link.classList.add('active');
    }
});

// Video play/pause
// var video = document.getElementById('kawa', 'blik');
// document.onkeypress = function(e){
//     if((e || window.event).keyCode === 32){
//         video.paused ? video.play() : video.pause();
//     }
// };

// img change(tech)
const imgs = [
    "../img/pc1.jpg", "../img/pc2.jpg", "../img/pc3.jpg", "../img/pc4.jpg", "../img/pc5.jpg",
    "../img/pc6.jpg", "../img/pc7.jpg", "../img/pc8.jpg", "../img/pc9.jpg", "../img/pc10.jpg"
];
let currentIndex = 0;

setInterval(() => {
    currentIndex = (currentIndex + 1) % imgs.length;
    document.querySelector('#slide').src = imgs[currentIndex];
}, 1200);

// img change (media)
const imgs1 = [
"../img/Twine1.png", "../img/Twine2.png", "../img/Twine3.png", "../img/Twine4.png", "../img/Twine5.png",
    "../img/Twine6.png"
];
let currentIndex1 = 0;

setInterval(() => {
    currentIndex1 = (currentIndex1 + 1) % imgs1.length;
    document.querySelector('#slide2').src = imgs1[currentIndex1];
    }, 1200);