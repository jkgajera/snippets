function countLines(elm) {
    var el = document.querySelector(elm);
    var divHeight = el.offsetHeight
    var lineHeight = parseInt(window.getComputedStyle(el).lineHeight);
    var lines = divHeight / lineHeight;

    const truncateWrap = el.closest('.truncate-wrapper');
    if (lines > 3 && !truncateWrap.classList.contains('truncate')) {
        truncateWrap.classList.add('truncate');
    } else if (truncateWrap.classList.contains('truncate')) {
        truncateWrap.classList.remove('truncate');
    }
}

// For multiple truncate call this function in loop
countLines('.truncate-wrapper p');

window.onresize = () => {
    setTimeout(() => {
        countLines('.truncate-wrapper p');
    }, 20);
};

// Show Hide Buttons Click Events
document.querySelectorAll('.btn-showHide').forEach((elm) => {
    elm.addEventListener('click', (evt) => {
        evt.preventDefault();
        if (evt.target.innerText == 'Show More') {
            evt.target.closest('.truncate-wrapper').classList.add('full');
            evt.target.innerText = 'Show Less';
        } else {
            evt.target.closest('.truncate-wrapper').classList.remove('full');
            evt.target.innerText = 'Show More';
        }
    });
});