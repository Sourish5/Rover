canvas = document.getElementById('myCanvas');//fetching canvas elements
ctx = canvas.getContext("2d");//to draw 2d structures

rover_width = 100;
rover_height = 90;

background=["img_01.jpg","img_02.jpg","img_03.jpg","img_04.jpg","mars.jpg"];
random=Math.floor(Math.random()*5);

background_image=background[random];

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function Add()//activated when page is loaded
 {
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground(); // setting a function, onloading this variable
    background_imgTag.src = background_image;   // load image

    rover_imgTag = new Image(); //defining a variable with a new image
    rover_imgTag.onload = uploadrover(); // setting a function, onloading this variable
    rover_imgTag.src = rover_image;   // load image
}

function uploadBackground()//called to upload background image of canvas
 {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);//to draw an image onto the canvas
}

function uploadrover()//called to upload image of rover
 {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);//to draw an image onto the canvas
}

//code to control the rover

window.addEventListener("keydown", my_keydown);//whenever key is pressed keydown is activated

function my_keydown(e)
{
    keyPressed = e.keyCode;//variable used to store ASCII values of keyboard keys
    
    //all keyboard keys have a fixed ASCII value

    if(keyPressed == '38')//38 is the ASCII value of up arrow
    {
        up();
        
    }
    if(keyPressed == '40')//40 is the ASCII value of down arrow
    {
        down();
        
    }
    if(keyPressed == '37')//37 is the ASCII value of left arrow
    {
        left();
        
    }
    if(keyPressed == '39')//39 is the ASCII value of right arrow
    {
        right();
        
    }
}

function up()
{
if(rover_y>=10)
{
    rover_y = rover_y - 10;
    uploadBackground();
    uploadrover();
}
}
function down()
{
if(rover_y<=590)
{
    rover_y = rover_y + 10;
    uploadBackground();
    uploadrover();
}
}
function left()
{
if(rover_x>=10)
{
    rover_x = rover_x - 10;
    uploadBackground();
    uploadrover();
}
}
function right()
{
    if(rover_x<=790)
    {
    rover_x = rover_x + 10;
    uploadBackground();
    uploadrover();
    }
}