// alert("Hello World")
// console.log("Hello console")
//semi colon i not neccesary like c/cpp but its a convention so try using it for uniform approach

//variables declarartion let,var,const dont use var
// const age = 30;     //const can't be uninitialized and cannot be changed once initialized
let age = 30;     // let can be changes agaim
age = 31;
console.log(age)

//data types
//string numbers,boolean,null,nundefined,symbol

const name = 'john';     //single and double quotes both works
const rating = 4.5;
const isCool = true;
const x = null;
let z;

// console.log(typeof z);

//concatenation
console.log("My name is " + name);

//template literals 

console.log(`my name is ${name}`);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.substring(0, 3));
console.log(name.split(''));

//arrays
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ["orange", "apple", "banan"];
fruits.push("mango");
fruits.unshift("firts");
console.log(fruits);

console.log(Array.isArray(""))
console.log(fruits.indexOf("mango"))


// object literal

const person =
{
    firstName: 'John',
    lastName: 'wick',
    age: 30,
    hobby: ["movies", "music"],
    address: {
        street: "33-c",
        state: "Karachi",
        city: "lahore"
        
    }

};

console.log(person.hobby[1]);
console.log(person.address.city);

const { firstName, lastName , address: {city}} = person;
console.log(firstName, city);

person.email = "@"
console.log(person)

//aarays of object

const todos = [
    {
        id: 1,
        task: "Coding",
        isCompleted:true
        
    },
    {
        id: 2,
        task: "testing",
        isCompleted:true
        
    },
    {
        id: 3,
        task: "deployment",
        isCompleted:false
        
    }
]

console.log(todos[1].task)

console.log(todos[1])

const todosJSON = JSON.stringify(todos);
console.log(todosJSON);


//for loop 
for (let i = 0; i < 10; i++)
{
    console.log(i)
}
 
let i = 0;
while (i < 3)
{
    console.log(i);
    i++;

}
 
console.log("debugging");

for (let todo of todos)
{
    console.log(todo.task)
}
 

todos.forEach(
    function (todo)
    {console.log(todo.task) }
);

tasks = todos.map(function (todo) { return todo.task });
console.log(tasks);

const completed = todos.filter(function (todo) { return todo.isCompleted === true; });
console.log(completed);

const chain = todos.filter(function (todo) { return todo.isCompleted === true; }).map(function (todo) { return todo.task; });

console.log(chain)

const p = 1;
if (p === 10) { console.log("p is 10") }
else if(p>10){console.log("x is geater tha 10")}
else { console.log("p is less than 10") }

const colour = p > 10 ? 'red' : 'green';
console.log(colour)

const char = 'ab';
switch (char)
{
    case 'a':
        console.log('a')
}
 

function addNums(num1=0, num2=0)
{
    return num1 + num2;
}

//arrow fucntion
const sub = (num1, num2) => { return num1 - num2; }
 
console.log(sub(1, 2))

//construction function

function Person(firstName, lastName, dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); 
    

}
Person.prototype.getyear = function () { return this.dob.getFullYear(); };
 
//instance 
const person1 =new  Person("Ahsan", "Hafeez", '4-3-1990');
console.log(person1.getyear())


class Person
{
    constructor(firstName, lastName, dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); 
    

    }
    getyear() { return this.dob.getFullYear(); };

 } 