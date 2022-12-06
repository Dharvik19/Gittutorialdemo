// // console.log(document.domain);
// // document.title = "Item lister";
// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.forms);
// // console.log(document.links);
// // //get element by id

// // var headTitle = document.getElementById('header-title');
// // // var header = document.getElementById('main-header');
// // console.log(headTitle);
// // headTitle.textContent = "hehehe";
// // headTitle.innerText = "Good bye";
// // // header.style.borderBottom = 'solid 3px #000'

// // //get element by class 

// // var items = document.getElementsByClassName('list-group-item');
// // var Title = document.getElementById('title1');
// // console.log(items);
// // items[1].textContent = "Hello 2";
// // items[1].style.backgroundColor = 'green';
// // items[0].style.fontWeight = 'bold';
// // items[1].style.fontWeight = 'bold';
// // items[2].style.fontWeight = 'bold';
// // items[3].style.fontWeight = 'bold';

// // // Title.textContent = "123";
// // Title.style.color = '#82B27D';

// // var newItem = document.getElementsByClassName('newli');
// // newItem[0].style.fontWeight = 'bold';
// // newItem[0].style.backgroundColor = 'black';
// // newItem[0].style.color = 'white';

// //targeting elements by tag name

// var header = document.querySelector('#main-header');
// header.style.border = "solid 3px #000";


// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';
// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// // thirdItem.style.display = 'none';

// //query selector all 
// var titles = document.querySelectorAll('.title');
// console.log(titles);

// var add = document.querySelectorAll('li:nth-child(odd)');

// for(var i=0;i<add.length;i++){
//     add[i].style.backgroundColor = 'green';
// }

// var li = document.querySelectorAll('.list-group-item');

// li[1].style.color = "green";

//traversing the dom 

var itemList = document.querySelector('#items');
//parent node 
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);
// parent element  
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// child nodes 

console .log(itemList.childNodes);

console .log(itemList.children);
console .log(itemList.children[1]);
itemList.children[1].style.background = 'yellow';

//first child
console.log(itemList.firstChild);

//first element child
console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = ' hello Item 1 ';

//first child
console.log(itemList.firstChild);

//last  element child
console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Item 4 hello';

//next sibling 
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);
//previous sibling 

// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling.previousElementSibling.previousElementSibling);

// create element 
// create div 

var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
console.log(newDiv);
newDiv.setAttribute('title','hello new div');
//create text node 
var newDivtext = document.createTextNode('Hello World');
//add text to dov
newDiv.appendChild(newDivtext);
console.log(newDiv);

var parentNode = document.getElementById('items');
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv,h1);

var newli = document.createElement('li');
newli.className = 'new-li';
var litext = document.createTextNode('hello');
newli.appendChild(litext);
parentNode.innerHTML = ('hello') + parentNode.innerHTML;

console.log(newli);

