//Functions

const { diff } = require("node:util");

//default Function
function add(a,b)
{
    return a+b;
}
let sum = (2,3)
console.log(sum)

//ananomyous function- it can be declared with variable without giving the function name
let sumOfAdd = function(c,d)
{
    return c+d
}

//fatpie short hand operator

let addInteger = (c,d) => c+d
console.log(addInteger(2,3));

//string methods

//length
let day = 'tuesday'
console.log(day.length)//8
//substring
let subDay = day.slice(0,4)//tues
console.log(subDay)
//index 
console.log(day[1])//u
//split
//tue day
let splitDay = day.split("s")
console.log(splitDay[1])// day
//trim
console.log(splitDay[1].trim().length)

//convert string to number and subtract it
let date = '23'
let nextDate = '27'
let diffDate = parseInt(date) - parseInt(nextDate)
console.log(diffDate);
//now converting again to string from number
diffDate.toString()

//concatinate string
let newWord = 'today is' +day
console.log(newWord);

//Indexof string.
let newVal = newWord.indexOf("day", 5 )
console.log(newVal)

//program for finding the day values in tuesaday is funday
let newVal = newWord.indexOf("day", 5 )
let count = 0
while(value!==-1)
{
    count++
    value = newVal.indexOf("day", value+1)

}
console.log(count)

//object
let person = { firstName: 'raveena', LastName: 'sharath'}
console.log(person.firstNamefirstName)
console.log(person['firstName'])
person.LastName = 'Sharath'

//to know the property exists in object
//example: Use 'in' keyword
console.log('gender' in person)

//using for loop u can print the persons property

for( let key in person)
{
    console.log(person[key])
}

// using function inside the created object - this is the keyword that represent the property of that object
let bird= {colour: 'white', voice: 'soft', feather: 'long' }
{
    babyBird = bird()
    {
        console.log(this.colour+this.voice)
    }
}

//classes
class Animal
{
    which = 'lion'
    get animalColour()// this is also consider as property as the keyword suggest with get so it means get the locators
    {
        return 'blue'
    }
}
let animal = new Animal()
animal.which
animal.animalColour

//
class Employee
{
    constructor(name)
    {
        this.name = name;
    }
    display()
    {
        console.log(this.name)
    }
}
const emp = new Employee

emp.display();