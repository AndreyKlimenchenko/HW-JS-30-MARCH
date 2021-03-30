class Contacts {
    constructor () {
        this.users = [];
    }
    add (user) {
        this.users.push(user);
        localStorage.setItem('users', JSON.stringify(this.users));
    }
    editUser (id, obj) {
        this.users = this.users.map(item => {
            if( item.id === id) {
                return item = obj;
            }
            return item;
        });
    }
    remove (id) {
        this.users = this.users.filter(item => item.id !== id);
    }
    getContacts () {
        return this.users;
    }
}


class User extends Contacts {
    constructor (data) {
        super();
        this.data = data;
    }
    edit (obj) {
        this.data = {
            id: obj.id,
            name: obj.name, 
            email: obj.email, 
            adress: obj.adress,
            phone: obj.phone
        }
    }
    get () {
        return this.data;
    }
}

class ContactsApp extends Contacts {
    constructor () {
        super();
        this.app = null
    }
    init () {
        let newDiv = document.createElement('div');
        document.body.appendChild(newDiv);
        newDiv.classList.add('contacts');
        this.app = newDiv 
    }
    createInterface () {
        const title = document.createElement('h1');
        title.innerHTML = 'Add Contacts';
        title.classList.add('title');
        this.app.appendChild(title);
        const form = document.createElement('form');
        form.classList.add('form');
        this.app.appendChild(form);
        const inputName = document.createElement('input');
        const inputEmail = document.createElement('input');
        const inputAdress = document.createElement('input');
        const inputPhone = document.createElement('input');
        inputName.classList.add('inputName');
        inputEmail.classList.add('inputEmail');
        inputAdress.classList.add('inputAdress');
        inputPhone.classList.add('inputPhone');
        form.appendChild(inputName);
        form.appendChild(inputEmail);
        form.appendChild(inputAdress);
        form.appendChild(inputPhone);
        inputName.setAttribute('type', 'text');
        inputName.setAttribute('value', '');
        inputEmail.setAttribute('type', 'email');
        inputEmail.setAttribute('value', '');
        inputAdress.setAttribute('type', 'text');
        inputAdress.setAttribute('value', '');
        inputPhone.setAttribute('type', 'tel');
        inputPhone.setAttribute('value', '');
        inputName.setAttribute('placeholder', 'name');
        inputEmail.setAttribute('placeholder', 'email');
        inputAdress.setAttribute('placeholder', 'address');
        inputPhone.setAttribute('placeholder', 'phone');

        const submitBtn = document.createElement('button');
        form.appendChild(submitBtn);
        submitBtn.innerHTML = 'добавить';
        submitBtn.classList.add('save-btn');
        submitBtn.getAttribute('type');
        submitBtn.setAttribute('type', 'submit');
    }
}

const newApp = new ContactsApp();

newApp.init();
newApp.createInterface();

const saveBtn = document.querySelector('.save-btn');
const inputName = document.querySelector('.inputName');
const inputEmail = document.querySelector('.inputEmail');
const inputAdress = document.querySelector('.inputAdress');
const inputPhone = document.querySelector('.inputPhone');
console.log(inputName);

saveBtn.addEventListener('click', () => {
    const form = document.querySelector('.form');
    const newUser = {
        id: 5,
        name: inputName.value,
        email: inputEmail.value,
        adress: inputAdress.value,
        phone: inputPhone.value
    };
    newApp.add(newUser);
    form.reset();
});





