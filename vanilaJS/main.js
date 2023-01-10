// localStorage.setItem('name','bob');
// localStorage.removeItem('name');
//set item: to set key value pairs 
//localstorage.get(gets the value)
//localStorage.removeitem(pass key) :removes the value 

// sessionStorage.setItem('name','john');
// sessionStorage.removeItem('name');

// document.cookie = 'name = kyle' + new Date(2022,0,1).toUTCString();
var form = document.getElementById('my-form');
var itemList = document.getElementById('users');
var email = 
form.addEventListener('submit',addItem);
form.addEventListener('submit',additem);
itemList.addEventListener('click',removeItem);

//added as objects
function addItem(e){
    e.preventDefault();
    if(localStorage.getItem(e.email)!== null){
        removeUser(email);
    }
    var inputName = document.getElementById('name').value;
    var inputEmail = document.getElementById('email').value;
    
    var formInfo = {
        inputName : inputName,
        inputEmail : inputEmail
    };

    localStorage.setItem(formInfo.inputEmail,JSON.stringify(formInfo));
    
}
//show user on screen 
function additem(e){
    e.preventDefault();
    var inputName = document.getElementById('name').value;
    var inputEmail = document.getElementById('email').value;
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(inputName+" "+inputEmail));
    itemList.appendChild(li);
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
function removeItem(e){
    let key = e.path[1].textContent.slice(0,4).split("")[1];
    if(e.target.classList.contains('delete')){
       console.log(e.path[1]);
       console.log(key);
            var li = e.target.parentElement;
            itemList.removeChild(li);
            localStorage.removeItem(key);
    }
}
