// console.log(document.domain);
// document.title = "Item lister";
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.links);
// //get element by id

// var headTitle = document.getElementById('header-title');
// // var header = document.getElementById('main-header');
// console.log(headTitle);
// headTitle.textContent = "hehehe";
// headTitle.innerText = "Good bye";
// // header.style.borderBottom = 'solid 3px #000'

// //get element by class 

// var items = document.getElementsByClassName('list-group-item');
// var Title = document.getElementById('title1');
// console.log(items);
// items[1].textContent = "Hello 2";
// items[1].style.backgroundColor = 'green';
// items[0].style.fontWeight = 'bold';
// items[1].style.fontWeight = 'bold';
// items[2].style.fontWeight = 'bold';
// items[3].style.fontWeight = 'bold';

// // Title.textContent = "123";
// Title.style.color = '#82B27D';

// var newItem = document.getElementsByClassName('newli');
// newItem[0].style.fontWeight = 'bold';
// newItem[0].style.backgroundColor = 'black';
// newItem[0].style.color = 'white';

//targeting elements by tag name

var header = document.querySelector('#main-header');
header.style.border = "solid 3px #000";


var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';

//query selector all 
var titles = document.querySelectorAll('.title');
console.log(titles);

var add = document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<add.length;i++){
    add[i].style.backgroundColor = 'green';
}

var li = document.querySelectorAll('.list-group-item');

li[1].style.color = "green";