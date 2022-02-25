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
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    const obj = {
        name,
        email,
    }
    localStorage.setItem(obj.email, JSON.stringify(obj));
    
}

