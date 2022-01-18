canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=7;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="Black";
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="Red";
ctx.arc(400,200,40,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="Yellow";
ctx.arc(250,240,40,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle="Green";
ctx.arc(350,240,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=3;
ctx.rect(100,100,400,240);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").Value;
console.log(color);
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clienty-canvas.offsetTop;
console.log("X = " + mouse_x + " ,Y = " + mouse_y);
circle(mouse_x , mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}