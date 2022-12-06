var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event 
form.addEventListener('submit',addItem);
//delete event 
itemList.addEventListener('click',removeItem);

filter.addEventListener('keyup',filterItems);
//add item 
function addItem(e){
    e.preventDefault();
    //get input value 
    var newItem = document.getElementById('item').value;
    var newItem2 = document.getElementById('item2').value;
    //create new li element 
    var li = document.createElement('li');
    
    //add class name 
    li.className = 'list-group-item';
    //add text node with input value 
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode("\n"+newItem2));
    itemList .appendChild(li);
    //create delete button
    var deleteButton = document.createElement('button');
    //add classes to delete button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    //text node 
    deleteButton.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(deleteButton);
    //append li to list
    itemList.appendChild(li);
    //create edit button
    var editButton = document.createElement('button');
    //add classes to edit button
    editButton.className = 'btn btn-sm btn-secondary float-right';
    //text node 
    editButton.appendChild(document.createTextNode('Edit'));
    // append button to li 
    li.appendChild(editButton);
    //append li to list
    itemList.appendChild(li);
}
//remove event 
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("are you sure")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter items function

function filterItems(e){
//convert text

var text = e.target.value.toLowerCase();
//get list
var items = itemList.getElementsByTagName('li');  
//convert to array 
Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var itemdesc = item.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text)!=-1 || itemdesc.toLowerCase().indexOf(text)!=-1){
        item.style.display = 'block';
    }else{
        item.style.display = 'none';
    }
    
});
}