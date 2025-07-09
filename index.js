let homeScore = document.getElementsByClassName('score')[0];
let guestScore = document.getElementsByClassName('score')[1];

let count = 0;

function add1() {
    count++ 
    homeScore.textContent = count;
    console.log(count)
}

function add2() {
    count++ 
    homeScore.textContent = count;
    console.log(count)
}

// function add1() {
//     console.log("test")
// }

// function add1() {
//     console.log("test")
// }