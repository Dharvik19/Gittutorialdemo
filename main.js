// localStorage.setItem('name','bob');
// localStorage.removeItem('name');
//set item: to set key value pairs 
//localstorage.get(gets the value)
//localStorage.removeitem(pass key) :removes the value 

// sessionStorage.setItem('name','john');
// sessionStorage.removeItem('name');

// document.cookie = 'name = kyle' + new Date(2022,0,1).toUTCString();
var form = document.getElementById('my-form');
form.addEventListener('submit',addItem);
// function addItem(e){
//     e.preventDefault();
//     var inputName = document.getElementById('name');
//     localStorage.setItem('name',inputName.value);
//     var inputEmail = document.getElementById('email');
//     localStorage.setItem('email',inputEmail.value);
// }
//added as objects
function addItem(e){
    e.preventDefault();
    var inputName = document.getElementById('name').value;
    var inputEmail = document.getElementById('email').value;
    
    var formInfo = {
        inputName : inputName,
        inputEmail : inputEmail
    };

    localStorage.setItem('form Info',JSON.stringify(formInfo));
}