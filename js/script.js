// let js = "amazing"
// // if(js === "amazing"){
// //     alert("Javascript is fun")
// // }
// // 41 + 21 + 5
// // console.log(41 + 21 + 5);

// // console.log("ratheesh")
// // console.log(12)

// // let firstName = "Ratheesh"
// // console.log(firstName)

// // let $function = "job";
// // console.log($function)

// // let javascriptIsFun = true
// // console.log(javascriptIsFun)

// // console.log(typeof true)

// // let age = 23
// // age = 22
// // console.log(age)

// // const name = "Ratheesh"

// // var job = "Full Stack"
// // job = "Developer"
// // console.log(job)

// // Math Operators
// const now = 2021
// const ageRatheesh = now - 1998
// const ageBilla = now - 2003
// console.log(ageRatheesh , ageBilla)

// console.log(ageRatheesh * 2, ageBilla / 2, 2 ** 3)
// // 2 ** 3 means 2 power 3 = 2*2*2 = 8

// let firstName = "shyjan" ;
// let lastName = "Harsha";
// let fullName = `${firstName} ${lastName} Age is ${ageRatheesh}` //string interpolation
// console.log(fullName)

// // Airthmetic Operator
// let x = 15
// x += 10 //  x = x('x' value is 15) + 10 = 25
// console.log(x)
// x -= 10 //  x = x('x' value is 25) - 10 = 15
// console.log(x)
// x++ // The Answer is 16
// console.log(x)
// x-- // The Answer is 15

// // Comparison Operators

// console.log(ageRatheesh < ageBilla)
// console.log(ageRatheesh >= ageBilla)

// // Operator Precedence
// let a , b 
// a = b = 25 -  
// console.log(a,b)

// const averageAge = (ageRatheesh + ageBilla) / 2
// console.log(ageRatheesh, ageBilla, averageAge) //23 18

// Coding Challange 1

// const marksWeight = 78
// const marksHeight = 1.69 
// const johnWeight = 92 
// const johnHeight = 1.95

// let bmiMarks = marksWeight / marksHeight ** 2
// console.log(bmiMarks)
// let bmiJohn = johnWeight / johnHeight ** 2
// console.log(bmiJohn)

// const markHigherBMI = bmiJohn < bmiMarks
// console.log(markHigherBMI)

// const firstName = "Ratheesh";
// const birthYear = 1997;
// const year = 2021;
// const work = "Employee";

// const string = `I am ${firstName} & my age is ${year - birthYear}, & I,m ${work}` // string interpolatoin
// console.log(string)

// console.log("string with \n\ multiple \n\ lines")
// // Template Literals
// console.log(`string with
// multiple
// lines`)

// const age = 17
// if (age >= 18)
// {
//     console.log(`You are eligible for a driving license`)
// }else{
//     const yearSelect = 18 - age 
//     console.log(`You'r not eligible and wait for ${yearSelect} years.... :)`)
// }

// const birthYear = 1998

// let century
// if (birthYear <= 2000){
//     century = 20
// }else {
//     century = 21
// }
//  console.log(`${century}`)

// Coding Challange 2

// const marksWeight = 78
// const marksHeight = 1.69 
// const johnWeight = 92 
// const johnHeight = 1.95

// let bmiMarks = marksWeight / marksHeight ** 2
// console.log(bmiMarks)
// let bmiJohn = johnWeight / johnHeight ** 2
// console.log(bmiJohn)

// const markHigherBMI = bmiJohn < bmiMarks
// console.log(markHigherBMI)

// if(bmiMarks > bmiJohn){
//     console.log(`Marks BMI is ${bmiMarks}, higher than Johns ${bmiJohn}`)
// }else{
//     console.log(`John BMI is ${bmiJohn}, higher than Marks ${bmiMarks}`)
// }

// const string = " 1998"
// console.log(Number(string))
// console.log(string)
// // console.log(parseInt(string))

// // type coercion
// console.log("I m " + 23)
// console.log("I m " + "23 " + "years old")
// console.log('13' - '12') // 1 in number but NAN
// console.log(typeof '13' - '12' - 2) // -1 in number but NAN

// let n = 1 - '1';
// console.log(typeof n)
// n = n + 1;
// console.log(n)

// const fav = Number(prompt(`What is your Favourite Number`));
// console.log(fav)
// console.log(typeof fav)
//  if(fav === 23){
//     console.log("You favourite number is 23")
//  }else if(fav == 9){
//      console.log("9 is cool number")
//  }else{
//      console.log(`Why not 23 or 9`)
//  }

//  if(fav != 23) console.log(`why not 23 ? `)

// const hasDriverLicense = true; //A
// const hasGoodVision = true; //B

// const isTired = false; //C

// if(hasDriverLicense && hasGoodVision && !isTired) {
//     console.log(`Sara is able to drive`)
// }else{
//     console.log(`Someone else should drive`)
// }

// const dolphinScore = (97 + 112 + 123) / 3
// console.log(dolphinScore)
// const koalaScore = (97 + 112 + 123 ) / 3
// console.log(koalaScore)

// if(dolphinScore < koalaScore && koalaScore >= 100){
//     console.log(`Koala team score is ${koalaScore} and winner also`)
// }else if(koalaScore < dolphinScore && dolphinScore >= 100) {
//     console.log(`dolphin team score is ${dolphinScore} and winner also`)
// }else if(dolphinScore == koalaScore && dolphinScore >= 100){
//     console.log(`The scores are level, so the match is drawed`)
// }else{
//     console.log('No one wins the trophy')
// }

// const day = "tuesday"

// switch (day){
//     case "monday":
//         console.log(`This is monday`)
//         break;
//     case "tuesday":
//         console.log(`This is Tuesday`)
//         break;
//     case "wednesday":
//     case "thursday":
//         console.log(`This is thursday`)
//         break;
//     case "friday":
//         console.log(`This is friday`)
//         break;
//     case "saturday":
//         console.log(`This is saturday`)
//         break;
//     case "sunday":
//         console.log(`Sunday is a weekend day`)
//         break;
//     default:
//         console.log(`This is not a valid day`)
// }

// ternary operator
// const age = 16
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink)

// const billValue = 324;
// const usualTip = 0.15;
// const tipIncrement = 0.2;
// let tip;
// tip = tipUsual = billValue * usualTip
// tip = incrementTip = billValue * tipIncrement
// console.log(incrementTip)

// if (billValue > 50 && billValue < 300){
//     tip = billValue * usualTip;
//     console.log(`The bill value is  ${billValue} and the usual tip is ${tip} and the total bill is ${tip + billValue}`)
// }else{
//     tip = billValue * tipIncrement;
//     console.log(`The bill value is  ${billValue} and the usual tip is ${tip} and the total bill is ${tip + billValue}`)
// }

// const totalValue = billValue > 50 && billValue < 300 ? console.log(`The bill value is  ${billValue} and the usual tip is ${tipUsual} and the total bill is ${tipUsual + billValue}`) : console.log(`The bill value is  ${billValue} and the usual tip is ${incrementTip} and the total bill is ${incrementTip + billValue}`)
// console.log(totalValue);


// const bill = 275;
// const usualTip = .15;
// const extraTip = .2;
// const tip = bill > 50 && bill < 300 ? bill * usualTip : bill * extraTip ;
// console.log(`The bill value is  ${bill} and the usual tip is ${tip} and the total bill is ${bill + tip}`)

// 'use strict';
//  let hasDriverLicense = true;

//  if (true) hasDriversLicense = true;
//  if (true) console.log(hasDriverLicense);

// function method

// function logger(){
//     console.log("My name is Ratheesh")
// }
// logger();

// function fruits(apples,oranges){
//     // console.log(apple,orange)
//     const juice = `Juice with ${apples} Apples and ${oranges} Oranges`
//     // console.log(juice)
//     return juice;
// }
//  const appleJuice = fruits(5,0)
//  console.log(appleJuice)

//  const appleOrangeJuice = fruits(2,3)
//  console.log(appleOrangeJuice)

//   Function declaration 
// function calAge1(birthYear){
//     return 2021 - birthYear;
// }
// const age1 = calAge1(1997)
// console.log(age1)

// const calAge2 = function(birthYear){
//     return 2021 - birthYear
// }
// const age2 = calAge2(1998)
// console.log(age2)

// console.log(age1,age2)

// const calAge3 = birthYear => 2021 - birthYear
// const age3 = calAge3(1997)
// console.log(age3)


// const yearsUntilRetirement = (birthYear,firstName) => {
//    let age = 2021 - birthYear
//    let retirementAge = 65 - age;
//    return `${firstName} retires in ${retirementAge} years`;
// }
// console.log(yearsUntilRetirement(1997,"Ratheesh"));
// const appleJuice = (apple)=> {
//    return apple * 2;
// }
// const orangeJuice = (orange)=> {
//    return orange * 2;
// }

// const fruitsProcessor = (apples,oranges) => {
//    // console.log(apples,oranges)
//    const apple = appleJuice(apples);
//    const orange = orangeJuice(oranges);

//    const juice = `The Apple juice was made by ${apple} Apples, and Orange juice made by ${orange} Oranges `
//    return juice;
// }

// const fruit = fruitsProcessor(2,3)
// console.log(fruit)


// const yearsUntilRetirement = (birthYear) => {
//    // console.log(birthYear,firstName)
//    console.log(birthYear) 
// }

// yearsUntilRetirement(1997,"Ratheesh")

// Challenge 1 

// function checkWinner(dolphinsScore){

// }


// const calcAverage = (firstScore,secondScore,thirdScore) =>   ( firstScore + secondScore + thirdScore) / 3
// const dolphinsScore = calcAverage(85,54,41)
// const koalaScore = calcAverage(23,34,27)
// console.log({dolphinsScore,koalaScore})

// function checkWinner(avgDolphins,avgKoalas){
//    if(avgDolphins >= 2 * avgKoalas){
//       console.log(`Dolphins win (${avgDolphins} : ${avgKoalas})`)
//    }else if(avgKoalas >= 2 * avgDolphins){
//       console.log(` kolas win ${avgKoalas} : ${avgDolphins}`)
//    }else{
//       console.log(`No Teams win`)
//    }
// }
// checkWinner(dolphinsScore,koalaScore)

// Array Concepts

// const friend1 = "Ajith"
// const friend2 = "Vijay"
// const friend3 = "Vikram"

// const friends = ['ajith','Vijay','Vikram']
// console.log(friends[0])
// console.log(friends[friends.length-1])

// const jonas = [friend2,"kamal",1997-1999]
// console.log(jonas)
// console.log(jonas.length)

// const calcAge = function(birthyeah){
//    return 2022 - birthyeah
// }
// const years = [1990,1789,1967]

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length-1])

// console.log(age1,age2,age3)
// ADD ELEMENTS
// const friends = ['ajith','Vijay','Vikram']
// const friendsLength = friends.push("Vishal")
// console.log(friends)
// console.log(friendsLength)
// friends.unshift("Neymar")
// console.log(friends)
// // REMOVE ELEMENTS
// friends.pop() //Last item
// console.log(friends)

// friends.shift()
// console.log(friends)

// friends.push(23)

// console.log(friends.indexOf("Vijay"))
// console.log(friends.includes("bob"))
// console.log(friends.includes("Vijay"))
// console.log(friends.includes(23))
// // console.log(friends)
// if (friends.includes("Vijay")){
//    console.log("You called a friend Vijay")
// }

// Challenge Array
//  function calcTip(bill){
//    //  let tip15 = 50 <= 300;
//    if(bill > 50 && bill < 300 ){
//       return (bill * 0.15) 
//    }else{
//       return (bill * 0.2)
//    }
//  }

//  const bills = [125,555,44]
//  const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
//  const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
//  console.log(bills, tips, totals)

// Object
// const jonas = {
//    firstName : "Ratheesh",
//    lastName : "Neymar",
//    age : 2022 - 1997,
//    job : 'teacher',
//    friends: ['ajith','vijay','murali']
// }
// const nameKey = 'Name'
// // console.log(jonas)
// // console.log(jonas.lastName)
// console.log(jonas['first' + nameKey])
// console.log(jonas['last' + nameKey])

// const  interestedIN = prompt("What do you know about jonas ? Choose between firstName, lastName, age , job and friends")
// if(jonas[interestedIN]){
//    console.log(jonas[interestedIN])
// }else{
//    console.log('wrong request, Choose between firstName, lastName, age , job and friends ')
// }
// jonas.location = "Nagercoil"
// jonas['twitter'] = '@twitter'
// console.log(jonas)
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and the best friend is called ${jonas.friends[0]}`)

// const jonas = {
//    firstName : "Ratheesh",
//    lastName : "Neymar",
//    birthYeah : 1997,
//    job : 'teacher',
//    friends: ['ajith','vijay','murali'],
//    drivingLicense : true,
//    calcAge: function(){
//       console.log(this)
//       this.age = 2022 - this.birthYeah
//       return this.age 
//    },
//    getSummary: function(){
//       return `${jonas.firstName} is a ${jonas.calcAge()}-year old ${jonas.job}, and he had ${jonas.drivingLicense ? "a" : "no"} drivers License`
//    }
// }
// console.log(jonas.calcAge())
// console.log(jonas.age)
// // console.log(jonas['calcAge'](1997))
// console.log(jonas.getSummary());

// Object Coding Challenge
// const mark = {
//    firstName : "Mark",
//    lastName: "Miller",
//    mass : 78,
//    height : 1.69,
//    calcBMI : function(){
//       // console.log(mass,height)
//       return this.BMI = this.mass / this.height ** 2 
//    }
// }

// const john = {
//    firstName : "John",
//    lastName: "Smith",
//    mass : 92,
//    height : 1.95,
//    calcBMI : function(){
//       // console.log(mass,height)
//       return this.BMI = this.mass / this.height ** 2 
//    }
// }
// console.log(mark.calcBMI(),john.calcBMI())
// // console.log(`${mark.firstName} ${mark.lastName} BMI is ${mark.calcBMI()} higher than ${john.firstName} ${john.lastName} ${john.calcBMI()}`)
// if(mark.calcBMI() > john.calcBMI()){
//    console.log(`${mark.firstName} ${mark.lastName} BMI is ${mark.calcBMI()} higher than ${john.firstName} ${john.lastName} ${john.calcBMI()}`)
// }else if(john.calcBMI() > mark.calcBMI()){
//    console.log(`${john.firstName} ${john.lastName} BMI is ${mark.calcBMI()} higher than ${mark.firstName} ${mark.lastName} ${john.calcBMI()}`)
// }

// for loop concept
// for(let rep=1;rep<=10;rep++){
//    console.log(`Lifting weight repetition ${rep}`)
// }

// const jonas = ['Jonas','Murali',2022-1997,'teacher',['Michel','Royapan','Steven'],true]
// // console.log(jonas.length)
// const types = [];

// for(i=0;i<jonas.length;i++){
//    console.log(`${jonas[i]} is ${typeof jonas[i]}`)

//    types.push(typeof jonas[i]);
// }

// console.log(types)

// const years = [1991, 2007, 1969, 2020]
// const age = []

// for(let i = 0; i < years.length; i++){
//    age.push(2037 - years[i])
// }
// console.log(age)
// console.log(`-------------Only Continue----------`)
// for(let i=0; i<jonas.length; i++){
//    if(typeof jonas[i] !== 'string') continue

//       console.log(jonas[i], typeof jonas[i])
// }

// console.log(`-------------Only Break----------`)
// for(let i=0; i<jonas.length; i++){
//    if(typeof jonas[i] === 'number') break

//       console.log(jonas[i], typeof jonas[i])
// }

// Looping backwords loop
// const jonas = ['Jonas','Murali',2022-1997,'teacher',['Michel','Royapan','Steven']]

// for(i = jonas.length-1; i >= 0; i--){
//    console.log(i, jonas[i])
// }

// let rep = 0
// while(rep <= 10){
//    console.log(`WHILE: Lifting weights repetition ${rep}`);
//    rep++;
// }

// let dice = Math.trunc(Math.random() * 6 ) + 1;
// console.log(dice)

// while(dice !==6){
//    console.log(`You rolled a dice number ${dice}`)
//    dice = Math.trunc(Math.random() * 6 ) + 1;
//    if(dice === 6){
//       console.log(`Loop is about to end`)
//    }
//    // dice++;
// }

// Coding Challange 4
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = []
// const totals = []

// function calcTip() {
//    for (let i = 0; i < bills.length; i++) {
//       if (bills[i] > 50 && bills[i] < 300) {
//          tips.push(bills[i] * 0.15) // 15 percentage for bill tip
//          totals.push((bills[i] * 0.15) + bills[i])
//       } else {
//          tips.push(bills[i] * 0.2)
//          totals.push((bills[i] * 0.2) + bills[i])
//       }
//    }
// }
// calcTip()
// // console.log(tips)
// // console.log(totals)

// function calcAverage() {
//    let sum = 0;
//    for (let i = 0; i < bills.length; i++) {

//       sum = sum + bills[i]
//       // console.log(sum)

//    }
//    total = sum / bills.length
// }
// calcAverage()
// console.log(total)

//Min and Max value using array
const temperature = [3,-2,-1,'error',14,15,19,56,8,45]
const maxValue = function (temps){
   let max = temps[0]
   let min = temps[0]

   for(i = 0; i < temps.length; i++ ){

      const curTemp = temps[i]

      if (typeof curTemp !== 'number') continue;

      if (curTemp > max){
         max = curTemp
      }
      if (curTemp < min){
         min = curTemp
      }
   }
   console.log(max,min)

}

maxValue([3,7,4,2,88,65,9,33])
maxValue(temperature)

const array1 = [1,3,5,7,9]
const array2 = [2,4,6,8,10]
const array3 = array1.concat(array2)
console.log(array3)
