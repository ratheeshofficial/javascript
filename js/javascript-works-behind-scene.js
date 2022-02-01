'use strict';
// const myName = 'Ratheesh'

// function first(birthYeah){
//    const age = 2022 - birthYeah;
//    // console.log(age)

//    if( age <= 30 && age >= 18){
//       var millenial = true;
//       const str = `You'r a major ${myName}`
//       console.log(str)
//       // console.log(millenial)
//    }
//    console.log(millenial)

//    function printAge(){
//       const job = 'Web developer';
//       const output = `${myName} is ${age} years old and, he is a ${job}`
//       console.log(output)
//    }
//    printAge();
// }
// first(1997);

// if(!num){
//     deleteShoppingCart()
// }
// var num = 10

// function deleteShoppingCart(){
//     console.log(`All products deleted`)
// }
console.log(this)

const calcAge = function(birthyear){
    console.log(2022 - birthyear)
    console.log(this)
}
calcAge(1997)

const age = (birthYeah) => {
    console.log(2022 - birthYeah)
    // console.log(this)
}
age(1997)

const jonas = {
    year : 2032,
    lastName: 'j',
    calcFun: function(){
        console.log(`${this.year}`)
        return this.lastName
    }
}
console.log(jonas.calcFun())