let codeCrewString = "Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness.";

// !! : make sure to complete the requirements before moving onto bonus
let myArray = [
  "some string",
  "another string",
  "third string "
];

let randomString = myArray[Math.floor(Math.random()*myArray.length)];
console.log(randomString);

// !! : you have a typo in your HTML where you are supposed to be calling this function on key down
function myFunction() {
  let x = document.getElementById("myTextarea").value;
  document.getElementById("blanklabel").innerHTML = codeCrewString;
  console.log(randomString)
}


function resetFunction() {
  let x = document.getElementById("myTextarea").value;
  document.getElementById("blanklabel").innerHTML = "";
}


// JUNK PILE BELOW ##################################

// let x = document.getElementById("myTextarea").value;
//   x.onkeydown = function(e) {
//   console.log(randomString);
// }


// let inputElement = document.getElementsByTagName("textarea");
//
// let text2 = document.getElementsByTagName("label");
//
// inputElement.onkeydown = function(e){
//   console.log(e.target.value);
// }

// let x = document.getElementById("myTextarea").value;
// x.onkeydown = function(e){
//   console.log(e.target.value);
// }

//
// inputElement.onclick = function (){
//     text2.innerText = "Changed";
// };
