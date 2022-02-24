const myform = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myform.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();

    if(nameInput.value == '' || emailInput.value ===''){
        msg.classList.add('error');
        msg.innerHTML='please enter all fiels';

        setTimeout(() => msg.remove(), 3000);

    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);
        
        nameInput.value='';
        emailInput.value='';
    }
 }
function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

}
let myObj ={
    name:'domenic',
    age : 56
    };
    let myObj_serialized = JSON.stringify(myObj);
     
    localStorage.setItem("myObj",myObj_serialized);
    
    let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
    
    console.log(myObj_deserialized);
    

let person = {
    name: "John",
    age: 22
    };
    
    localStorage.setItem("profile", person);
    localStorage.setItem("profile", JSON.stringify(person));
    let storageProfileString = localStorage.getItem("profile");
    let savedPerson = JSON.parse(storageProfileString);
    console.log( savedPerson);
