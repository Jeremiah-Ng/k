img="";
function setup(){
    createCanvas(630,420);
    // canvas.center();
}
function preload(){
    img = loadImage("no vroom for you.jpg");
}
function draw(){
    image(img,0,0,640,420);
    // fill("red");
    // text("Dog", 45, 75);
    // noFill();
    // stroke("red");
    // rect(30,60,450,350);
}
function home(){
    location.replace("index.html")
}