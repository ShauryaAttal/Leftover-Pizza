

var a = prompt('Enter the first variable: ');
var b = prompt('Enter the second variable: ');
function setup(){
  var b2 = createButton("click here to Swap");
  b2.mousePressed(swap);
  }


function draw() {
background(220);
}

function swap() {
[a,b] = [b,a];
console.log('Value of a after swap is:' + a);
console.log('Value of b after swap is:' + b);
}


