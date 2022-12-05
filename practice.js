// console.log(document.domain);
document.title = "Item lister";
console.log(document.head);
console.log(document.body);
console.log(document.forms);
console.log(document.links);
//get element by id

var headTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headTitle);
headTitle.textContent = "hehehe";
headTitle.innerText = "Good bye";
header.style.borderBottom = 'solid 3px #000'

//get element by class 

var items = document.getElementsByClassName('list-group-item');
var Title = document.getElementById('title1');
console.log(items);
items[1].textContent = "Hello 2";
// Title.textContent = "123";
Title.style.color = '#82B27D';