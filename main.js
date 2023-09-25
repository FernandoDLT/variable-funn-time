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


//
// let num = 15
// num = num - 10
// // num -= 2 Short version
// console.log(num)

//

// numFromInput += 25

// alert(numFromInput)

//
// const h1 = document.querySelector('h1')

// h1.addEventListener('click', addTwo)

// function addTwo() {
//     let numFromInput = Number(document.querySelector('#danceDanceRevolution').value)
//     numFromInput += 25

//     console.log(num + numFromInput)
// }

// document.querySelector('h1').addEventListener('click', checkYards)
// function checkYards() {
//     let yards = Number(document.querySelector('input').value)
//     if (yards < 10) {
//         console.log('Use your Putter, you got this...')
        
//     } else if (yards > 10 || yards < 80) {
//         console.log('use your 60 Degree Wedge')

//     } else if (yards > 81 || yards < 110) {
//         console.log('use your Sand Wedge')
        
//     } else if (yards < 120) {
//         console.log('use your Pitching Wedge')
        
//     } else if (yards < 130) {
//         console.log('use your 9 Iron')

//     } else if (yards < 140) {
//         console.log('use your 8 Iron')
        
//     } else if (yards < 150) {
//         console.log('use your 7 Iron')
        
//     } else if (yards < 160) {
//         console.log('use your 6 Iron')
        
//     } else if (yards < 170) {
//         console.log('use your 5 Iron')
        
//     } else if (yards === 180) {
//         console.log('use your 4 Iron')

//     } else if (yards === 190) {
//         console.log('use your 3 Iron')

//     } else if (yards === 200) {
//         console.log('Use your 5 Wood')

//     } else if (yards > 250) {
//         console.log('Use your 3 Wood')

//     } else {
//         console.log('Use BIG Momma!')
//     }
// }

document.querySelector('h1').addEventListener('click', checkYards);

function checkYards() {
    let yards = Number(document.querySelector('input').value);
    if (yards < 9) {
        console.log('Use your Putter, you got this...');
    } else if (yards >= 10 && yards < 79) {
        console.log('Use your 60 Degree Wedge');
    } else if (yards >= 80 && yards < 110) {
        console.log('Use your Sand Wedge');
    } else if (yards >= 110 && yards < 120) {
        console.log('Use your Pitching Wedge');
    } else if (yards >= 120 && yards < 130) {
        console.log('Use your 9 Iron');
    } else if (yards >= 130 && yards < 140) {
        console.log('Use your 8 Iron');
    } else if (yards >= 150 && yards < 160) {
        console.log('Use your 7 Iron');
    } else if (yards >= 160 && yards < 170) {
        console.log('Use your 6 Iron');
    } else if (yards >= 170 && yards < 180) {
        console.log('Use your 5 Iron');
    } else if (yards >= 180 && yards < 190) {
        console.log('Use your 4 Iron');
    } else if (yards >= 190 && yards < 200) {
        console.log('Use your 3 Iron');
    } else if (yards >= 200 && yards < 220) {
        console.log('Use your 5 Wood');
    } else if (yards >= 220 && yards < 250) {
        console.log('Use your 3 Wood');
    } else if (yards > 250) {
        console.log('Use BIG Momma!');
    }
}
