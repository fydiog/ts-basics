//typescript basics

// function addUp(a, b){
//     return a+b;
// }

//This way we wouldn't get any error, but we want to add up two numbers not concat.
// const result = addUp('One', 'Two');


function addUp(a:number, b:number):number{//The : after the parenthesis will specify the output type of the function.
    return a+b;
}

//Same goes for arrowfunctions

const addUpArrowFunc = (a:number, b:number):number=>{
    return a+b;
}

//The order for paramers is the following: required, optional and the one with default values.
const multiply = (num1:number, anotherNum?:number, base:number = 2)=>{
    return num1 * base;
}

const result = multiply(5, 6);


interface Person {
    name:string;
    salary:number;
    showSalary: () => void;
}

function raiseSalary(person:Person, salaryToAdd:number):void{//Void meaning it doesn't return any value
    person.salary += salaryToAdd;
}

const newPerson: Person = {
    name: 'Antonio',
    salary: 1000,
    showSalary(){
        console.log('Salary:',this.salary)
    }
}

raiseSalary(newPerson, 200);
newPerson.showSalary();