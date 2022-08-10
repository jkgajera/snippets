# How To Use Picture Tag For All Browsers

## Html Code

It's Tested in Chrome, Firefox, Safari, EDGE & Internet Explorer. As well as tested in relative tablet and mobile devices

```html
<div class="picWrap">
    <picture>
      <source media="(min-width:1200px)"
        srcset="https://dummyimage.com/1400x800/EE6363/fff&text=Desktop"
        data-class="imgXL" >
      <source media="(min-width:1024px)"
        srcset="https://dummyimage.com/1024x700/330000/fff&text=Big-Tablet"
        data-class="imgLG">
      <source media="(min-width:768px)"
        srcset="https://dummyimage.com/768x600/8B0000/fff&text=Small-Tablet"
        data-class="imgMD">
      <source media="(min-width:320px)"
        srcset="https://dummyimage.com/375x300/FF0000/fff&text=Mobile"
        data-class="imgSM">
      <img
        src="https://dummyimage.com/375x300/FF0000/fff&text=Mobile"
        alt="Testing" loading="lazy">
    </picture>
</div>
```
I have used loading lazy tag which will help to decrease page initial load. It did not support all browsers but mostly browser are covered, So it's a plus point for improve page speed
```html
<img src="https://dummyimage.com/375x300/FF0000/fff&text=Mobile" alt="Testing" loading="lazy">
```

## Script

```javascript
$(document).ready(function () {
    //Funtion to check if browser is IE
    function msieversion() {
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");
      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
      {
        return true
        //alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
      }
      else  // If another browser, return 0
      {
        return false
      }
    }
    var k = msieversion();
    //Fallback if IE then we change markup for responsive images
    if (k) {
      $('.picWrap').each(function () {
        returnImgArray($(this));
      });

      function returnImgArray(selector){
        var getImgAlt = selector.find('picture img').attr('alt');
        selector.find('picture img').remove();
        selector.find('picture source').each(function (index) {
          var getImgUrl = $(this).attr('srcset');
          var getImgClass = $(this).attr('data-class');
          var getImgArray = '<img src="' + getImgUrl + '" alt="' + getImgAlt + '" class="wrapImg ' + getImgClass + '">';
          selector.append(getImgArray);
        });
        selector.find('picture source').remove();
      };
    }
});
```



## Style/CSS

```css
.picWrap {
  display: block;
  width: 100%;
  height: auto;
}
.picWrap > .wrapImg{
  display: none;
  width: 100%;
  height: auto;
}
@media only screen and (min-width:1200px){
  .picWrap > .imgXL { 
    display: block; 
  } 
}
@media (min-width:1024px) and (max-width:1199px){
  .picWrap > .imgLG { 
    display: block; 
  } 
}
@media (min-width:768px) and (max-width:1023px){
  .picWrap > .imgMD { 
    display: block; 
  } 
}
@media (min-width:320px) and (max-width:768px){
  .picWrap > .imgSM { 
    display: block; 
  } 
}
```

**You can check here how many browsers are supported: https://caniuse.com/#search=picture**

**THANK YOU**

