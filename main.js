canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");
nasa_images_array=["NASA_IMAGE_1.jpeg","NASA_IMAGE_2.jpeg","NASA_IMAGE_3.jpeg","NASA_IMAGE_4.jpeg","NASA_IMAGE_5.jpeg"];
random_number=Math.floor(Math.random()*5);
console.log(random_number);
roverheight=100;
roverwidth=90;
roverx=10;
rovery=10;
//backgroundimg="mars.jpg";
roverimg="rover.png";
backgroundimg=nasa_images_array[random_number];
console.log("backgroungimg= "+backgroundimg);
var backgroundimgtag,roverimgtag;
function add() {
   backgroundimgtag=new Image();
   backgroundimgtag.onload=uploadbackground;
   backgroundimgtag.src=backgroundimg;
   roverimgtag=new Image();
   roverimgtag.onload= uploadrover;
   roverimgtag.src=roverimg;
}
function uploadbackground() {
    ctx.drawImage(backgroundimgtag,0,0,canvas.width,canvas.height);
}
function uploadrover() {
    ctx.drawImage(roverimgtag,roverx,rovery,roverwidth,roverheight);
}
window.addEventListener("keydown",keeydown);
function keeydown(e) {
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress=="37") {
        left();
        console.log("Left");
    }
    if(keypress=="38") {
        up();
        console.log("Up");
    }
    if(keypress=="39") {
        right();
        console.log("Right");
    }
    if(keypress=="40") {
        down();
        console.log("Down");
    }
}
function up() {
    if(rovery>=0) {
        rovery=rovery-10;
        console.log("When Up Arrow Is Pressed, X= "+roverx+" | Y= "+rovery);
        uploadbackground();
        uploadrover();
    }
}
function down() {
    if(rovery<=500) {
        rovery=rovery+10;
        console.log("When Down Arrow Is Pressed, X= "+roverx+" | Y= "+rovery);
        uploadbackground();
        uploadrover();
    }
}
function left() {
    if(roverx>=0) {
        roverx=roverx-10;
        console.log("When Left Arrow Is Pressed, X= "+roverx+" | Y= "+rovery);
        uploadbackground();
        uploadrover();
    }
}
function right() {
    if(roverx<=700) {
        roverx=roverx+10;
        console.log("When Right Arrow Is Pressed, X= "+roverx+" | Y= "+rovery);
        uploadbackground();
        uploadrover();
    }
}