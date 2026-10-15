console.log("hello..!!")
//assignment
let c = a+b
console.log(c)
//if and if else condition
const flag = true
if(flag)
{
    console.log("condition met")
}
else 
{
 console.log('did not met');
}
//while
let i = 0
while(i<10)
{
    i++
    console.log(i)
}
//do while
do
{
    i++
}
while(1<10);
console.log(i)
//Assignment operator
//multiple of 2 and 5 from 1 to 10 
let i = 1
for(let i=1; i<=10; i++)
{
    if(i%2 == 0 && i%5 == 0)
    {
        console.log(i)
    }
}

//Nested if condition and using break statement
//Multiple of 2 and 5 till 100 but i want only first 3 values to be diaplayed
let a = 1
let b = 1
for(let a=1; a<=100; a++)
{
    if(a%2 == 0 && a%5 == 0)
    {
            n++
    console.log(a)
    if(n == 3)
        break;
    }
    
}

//Array's and Methods in js
let marks = [20, 30, 40, 50, 60, 70]
subarray = marks.slice(1, 4)
console.log(marks[3]);//50
marks[5] = 80
console.log(marks)// 20, 30, 40, 50, 80
// to see the length of an array. Length is a method in js
console.log(marks.length)//6
marks.push(65)//append new elemt to the array
console.log(marks)//20, 30, 40, 50, 80, 65
marks.pop()//this will delete the last element of the array
marks.unshift(11)// add teh elemet in the beginning of the array
console.log(marks.indexOf(50))//3 is the answer

//example sum of all the arrays

let sum = 0
for(i=0; i<marks.length; i++)
{
    sum = sum + marks[i]
}
console.log(sum);

let total = marks.reduce((sum, marks)=>sum+marks,0)

var Scores = [12,13,14,15]
var evenScores = []
for(let i=0; i<=Scores; i++)
{
    if(Scores[i]%2 == 0)
    {
        evenScores.push(Scores[i])
    }
}console.log(evenScores);// long way of doing it using for loop

let evenNumbersUsingfilter = Scores.filter(Score=>Scores[i]%2==0)
console.log(evenNumbersUsingfilter);

let newMultipliedArry = evenNumbersUsingfilter.map(Score=>Score*3)
console.log(newMultipliedArry)

let newArrayValue = newMultipliedArry.reduce((sum, val)=>sum+val, 0)
console.log(newArrayValue);

//Sort string
let fruits = ["pome", "banana", "apple", "mango"]
fruits.sort()
//reverse string 
fruits.reverse()

//Sort numbers
let number = [16, 1, 19, 6, 20, 30]
console.log(number.sort((a,b)=> a-b))
