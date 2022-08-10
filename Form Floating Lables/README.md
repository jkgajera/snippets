# Form Floating Labels

## Create the varible for Inputs & selectors

```
  var selectSelector = 'select';
  var inputSelector = 'input';
  var selector = inputSelector + ', ' + selectSelector;
```

## Apply float class using script

```javascript
  // Check on fields change & blur event of all form fields
  $(document).on('change blur', selector, function (e) {
      if ($(this).val() == null || $(this).val() == '') {
          $(this).closest('.mktoFieldWrap').removeClass('active');
      } else {
          $(this).closest('.mktoFieldWrap').addClass('active');
      }
      //For special case
      if (e.type == 'focusout') {
          if ($(this).closest('.mktoFieldWrap').find('#Email').length > 0) {
              validateMarketoEmail();
          }
          $(this).closest('.mktoFieldWrap').removeClass('typing');
      }
  });

  //Check for all fileds of forms
  $(selector).each(function () {
      if ($(this).val() == null || $(this).val() == '') {
          $(this).closest('.mktoFieldWrap').removeClass('active');
      } else {
          $(this).closest('.mktoFieldWrap').addClass('active');
      }
  });

  // Check for all form select fields
  $(selectSelector).change(function () {
      if ($(this).val() == null || $(this).val() == '') {
          $(this).closest('.mktoFieldWrap').removeClass('active');
      } else {
          $(this).closest('.mktoFieldWrap').addClass('active');
      }
  });
```

**THANK YOU**

