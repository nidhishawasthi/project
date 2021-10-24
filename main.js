var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="black";
width_of_line=1;
canvas.addEventListener("mouseDown",my_mouseDown);
function my_mouseDown(e)
{
    mouseEvent="mouseDown";

}
canvas.addEventListener("mouseMove",my_mouseMove);
function my_mouseMove(e)
{
    current_position_of_mouse_x=e.clientX-canvas.ofsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.ofsetTop;
    if(mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last Position of x and y=");
        console.log("x="+ last_position_of_x + "y=" + last_position_of_y);
        ctx.moveTo (last_position_of_y,last_position_of_x);
    
        console.log("current Position of x and y=");
        console.log("x="+ current_position_of_mouse_x  + "y=" + current_position_of_mouse_y);
        ctx.lineTo ( current_position_of_mouse_x, current_position_of_mouse_y); 
        ctx.stroke ();

    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}

canvas.addEventListener("mouseUp",my_mouseUp);
function my_mouseUp (e)
{
    mouseEvent="mouseUp";

}
canvas.addEventListener("mouseLeave",my_mouseLeave);
function my_mouseLeave(e)
{
    mouseEvent="mouseLeave";
}
