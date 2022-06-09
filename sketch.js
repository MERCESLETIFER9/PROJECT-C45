var bgImage;

function preload(){
    bgImage = loadImage("background.png");
}

function setup(){
    createCanvas(500,1000);
}

function draw(){
    background(bgImage);
}