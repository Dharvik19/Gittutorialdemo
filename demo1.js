var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event 
form.addEventListener('submit',addItem);
//delete event 
itemList.addEventListener('click',removeItem);
//add item 
function addItem(e){
    e.preventDefault();
    //get input value 
    var newItem = document.getElementById('item').value;
    //create new li element 

    var li = document.createElement('li');
    //add class name 
    li.className = 'list-group-item';
    //add text node with input value 
    li.appendChild(document.createTextNode(newItem));

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
    editButton.appendChild(document.createTextNode('E'));
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