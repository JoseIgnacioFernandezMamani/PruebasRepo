
alert("day 2");

let score = prompt("input the score");

switch (true){
  case score > 80:
    console.log("A");
    break;
  case score > 70:  
    console.log("B");
    break;
  case score > 60:
    console.log("C");
    break;
  case score > 40 :
    console.log("D");
    break;
  default:
    console.log("pesima nota");
}