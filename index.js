// Reference types : Object and Arrays

// Datatypes 
// 2.Reference type : objects, arrays 
//     takes heap memory and assigned variable takes stack memory 

// Arrays
//     Non primitive data type/ reference type 
//     Heap type memory allocation

// Object
//     Collection of key value pair


// let obj = {
//     name: "Sagar",
//     age: 29,
//     weight: 75,
//     "last name": "Myana",
//     greet: ()=> {
//         console.log("Hello folks");
//     }
// };
// console.log(obj);;
// obj.greet();


// Shallow copy & deep copy
//     assigning same value of object like obj2=obj is shallow bz its taking same memory allocation in heap as of obj, not creating new memory


// Arrays
//     Collection of items(premitive or non primitve)
//     can create in 2 ways , [] or array constructor

// creation of arrays
//  let arr= [1,2,3];
    // let brr= new Array()
//        Built in methods in array


// variable Scoping
// global--can access anywhere in file
// function--inside function inside curly brackets used then outside can not be used
// block--inside curly braces, then out cant access except var, var can be accessed

// var is global scope, function scope not block scope
// let const is block scope

// for let and const variable cant be accessed before line where declared, if tried to access then u get reference error , n from that accessed line to declared line is called temporal dead zone

// best practice: dont use var, use let const, and use them in function or block scope not in global scope




//lec 48 common inbuilt objects in JS

// Math.PI
// Math.max
// Math.min
// Math.round
// Math.floor --just smallest integer less than of that number
// Math.ceil --just largest integer more than that number
// Math.abs --makes -ve to +ve and , +ve to +ve only 

// Date

// let curr=new Date();

// let date = new Date('June 25 1998 07:25')
// console.log(date);