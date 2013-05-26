Bootstrap-Breadcrumb
====================

This little plugin should generate for ya Twitter Bootstrap Breadcrumb from your Twitter Bootstrap Navs (Navigation).

Assume you have got already
---------------------------

1) Good day

2) Your website with Twitter Bootstrap already integrated 

3) You can browse all pages through your navigation 

```html
<ul id="nav" class="nav nav-tabs">
    <li class="active">
      <a href="#">Home</a>
    </li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Services</a></li>
    ...
</ul>
```

Using Bootstrap-Breadcrumb
--------------------------

1) Make yourself comfortable in the chair

2) Set your breadcrumb element or something where the Bootstrap Breadcrumb will be injected
```html
<div id="breadcrumb"></div>
```

3) Now the glory, let's do it super simple
```javascript
$('#breadcrumb').breadcrumb();
```

Hmmm, Wait a minute
-------------------

1) What if I have got also other pages which are not in the navigation but the navigation elements are parents of those unlucky pages?

Hmm, the answer would be:

```javascript
$('#breadcrumb').breadcrumb({
  initUrl: '/my-little-product-or-page-not-in-the-menu',
  title: 'Unlucky Page'
});
```

2) Any other options?

In the meantime:

```javascript
$.fn.breadcrumb.defaults = {
  initUrl: window.location.pathname,
  navigation: $('#nav'),
  home: '/',
  title: undefined,
  ignoreList: undefined
};
```

ToDo
--------------------------

1. As this is my first ever plugin it needs to be reviewed
2. I will try to use the same concept of Twitter Bootstrap .js and use it 
3. Anything else?
