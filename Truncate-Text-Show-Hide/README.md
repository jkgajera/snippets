# Truncate Text Show/Hide

## Html Code

It's Tested in Chrome, Firefox, Safari, EDGE & Internet Explorer. As well as tested in relative tablet and mobile devices


First create or modified the HTML structure as per requirement.
```html
<div class="truncate-wrapper">
    <p>Escape. Without multi function display. With leather. All. With mfd high tft screen. With sync system.Without cruise control. Focus Electric. Without navigation system.</p>
    <a href="" class="btn-showHide">Show More</a>
</div>
```

## Script

Add the following script to your project
```javascript
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
```


## Style/CSS
Add the following CSS to your project
```css
.truncate-wrapper {
    padding: 20px;
    border: 1px solid #f5f5f5;
}

.truncate-wrapper p {
    position: relative;
    font-size: 14px;
    line-height: 18px;
}

.truncate-wrapper:not(.full) .btn-showHide {
    display: none;
}

.truncate-wrapper.truncate:not(.full) p {
    height: calc(18px * 3);
    overflow: hidden;
    word-break: break-all;
}

.truncate-wrapper.truncate:not(.full) p:after {
    content: "...";
    position: absolute;
    right: 0;
    bottom: 0;
    background: white;
    padding: 0 5px;
}

.truncate-wrapper.truncate .btn-showHide {
    display: inline-block;
    background: gray;
    color: #000;
    padding: 4px 8px;
    text-decoration: none;
    font-size: 14px;
}
```

**THANK YOU**

