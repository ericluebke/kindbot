function preload(){
height1 = window.innerHeight
var newStyles1 = document.createElement('style');
  document.head.append(newStyles1);
  newStyles1.innerHTML = ".headImg{ " +
  "height: " + height1 + "px" + ";" + 
  " }";
}
function setup(){
button1 = createButton('⮛');
button1.position(window.innerWidth/2-35, window.innerHeight -100);
button1.mousePressed(pressed);
newH = windowHeight;
newH = newH;
}
function center(){
button1.position(window.innerWidth/2-35, window.innerHeight -100);
}
function windowResized(){
center();
}
var newH = newH;
console.log(newStyles1);
var pressedVar = false;
function pressed(){
pressedVar = true;
}
function draw(){
var newStyles1 = document.createElement('style');
  document.head.append(newStyles1);
  newStyles1.innerHTML = ".headImg{ " +
  "height: " + window.innerHeight + "px" + ";" + 
  " }";
if (pressedVar === true){
if (document.body.scrollTop < 400){
document.body.scrollTop = document.body.scrollTop + 15;
document.documentElement.scrollTop = document.documentElement.scrollTop + 15;
}
if (document.body.scrollTop > 400){
pressedVar = false
}
}
}