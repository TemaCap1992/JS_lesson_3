"use strict"

// first task

let userLogin = prompt('Enter your login to register...');
while(userLogin.length < 3) {
    alert('Login is too short');
    userLogin = prompt('Enter your login at least three symbols');
} 

let userPassword = prompt('Enter your password to register...');
while(isNaN(userPassword)) {
    alert('You only need to enter numbers');
    userPassword = prompt('Enter a password consisting of numbers only'); 
} 

let login = prompt('Enter login...', 'minimum three symbol');
if (login === userLogin) {
    alert('Welcome ' + ' ' + userLogin);     
} while (login !== userLogin) {
    alert('no such user exists');
    login = prompt('Enter your login carefully!!!', 'minimum three symbol');
}

let password = prompt('Enter password...', 'only numbers');
if (password === userPassword) {
    alert('Password entered successfully');
} while (password !== userPassword) {
    alert('Wrong password!!!');
    password = prompt('carefully enter the password consisting only of numbers'); 
    
}

alert('Welcome to the site!!!'); 


//third task
let profession;

let persons = [
    {id:10, name:'Vasya', age:28},
    {id:11, name:'Kolya', age:16, parentld:14},
    {id:12, name:'Anna', age:37},
    {id:13, name:'Zoya', age:9, parentld:12},
    {id:14, name:'Arkadiy', age:45},
];

console.log(persons);

let adults = [];
let minors = [];

for (let item of persons) {
    if (item.age <18) {
        minors.push(item);
    } else  {
        adults.push(item);
        profession = prompt('what is your profession' + ' ' + item.name + '?')
        console.log(item.name + ' ' + 'has a profession' + ' ' + profession);
    }
};
console.log(minors);
console.log(adults);

for (let i of minors) {
    let newParentld = i.parentld;
    for (let item of adults) {
        if (newParentld === item.id){
            console.log(item.name + ' has a child ' + i.name);
        }
    }
}
