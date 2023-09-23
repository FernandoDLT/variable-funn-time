// // Easy
// // Create a variable and assign it a number
// let num = 120
// // Minus 10 from that nunber
// num = num - 10
// // Print that to the console
// console.log(num)
// // Medium
// // Create a varible that holds a value from the input
// let numFromInput = Number(document.querySelector('input').value)
// // Add 25 to that number
// numFromInput += 25
// // Alert that number
// alert(numFromInput)
// // Hard
// // Create a variable that holds the h1
// const h1 = document.querySelector('h1')
// // Add an event listener to that element and console log  the sum of the two previous variables

// h1.addEventListener('click', addTwoNums)

// function addTwoNums () {
//     console.log(num + numFromInput)
// }



let num = 15
num = num - 10
// num -= 2 Short version
console.log(num)

//

// numFromInput += 25

// alert(numFromInput)

//
const h1 = document.querySelector('h1')

h1.addEventListener('click', addTwo)

function addTwo() {
    let numFromInput = Number(document.querySelector('#danceDanceRevolution').value)
    numFromInput += 25

    console.log(num + numFromInput)
}