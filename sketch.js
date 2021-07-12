
function setup() {
    var r1 = createButton("Red");
    var g1 = createButton("Green")
    r1.mousePressed(colorr);
    g1.mousePressed(colorg);
}


function draw() {
}


function colorr () {
console.log (background("red"))
}

function colorg () {
console.log (background("green"))

}



