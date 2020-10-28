//Nicole Stewart

//create the canvas
//var gameboard = document.getElementById("canvas");
//var context = gameboard.getContext("2d");
//set the canvas background colour
//const canvasBackgroundColour="#3e3e3e";
//context.fillStyle=canvasBackgroundColour;
//context.fillRect(0, 0, gameboard.width, gameboard.height);

//set the image size of the train
//const image = new Image(60, 50);
//draw the image onto the screen
//image.onload = drawImage;
//link to the image of the train
//image.src = "../graphics/trains/BLUECARRIAGEFRONT.png";

//function to draw the image onto the screen
//function drawImage() {
  //context.drawImage(this, 0, 0, this.width, this.height);
//}

window.onload=function(){
    var x=0;
    var y=0;
    var key,pos=0;
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    const img=new Image(10, 10);
    img.onload=function()
    {
      ctx.drawImage(img,x,y, 50, 50);
    }
    img.src="../graphics/trains/BLUECARRIAGEFRONT.png";
    document.onkeydown=function(e)
    {
      pos++;
      key=window.event?e.keyCode:e.which;
    }
    document.onkeyup=function(e){pos--}
    setInterval(function()
    {
      if(pos==0)return;
      if(key==37)x-=1;
      if(key==38)y-=1;
      if(key==39)x+=1;
      if(key==40)y+=1;
      canvas.width=canvas.width;
      ctx.drawImage(img,x,y, 50, 50);
    });
}
