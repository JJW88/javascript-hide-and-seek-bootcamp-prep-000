function getFirstSelector(selector) {
   return document.querySelector(selector);
 }

 function nestedTarget() {
   return document.querySelector('div#nested');
 }

 function increaseRankBy(n) {
   const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
    for (let i = 0, l = lis.length; i < l; i++) {
     lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
   }
 }

 function deepestChild() {
   return document.querySelector('div#grand-node');
 }
