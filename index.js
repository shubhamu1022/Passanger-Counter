// document.getElementById("count-el").innerText = 
// let first_batch = 5;
// let second_batch = 7
// let count = frist_batch + second_batch;
// console.log(count);
 let count = 0;
 let countEl = document.getElementById("count-el");
 let saveEl = document.getElementById("save-el");

 function increment(){
    count++;
    countEl.innerText = count;
 }

 function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.innerText = 0;
 }
 
//  DOM Document Object Model
// How to modify website using Javascript

