var mycircle=function(canvas,x,y)
{
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.r = 25;
    this.mycolor = 'red';
    this.flag = 1;
    
}

mycircle.prototype.draw = function ()
{
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 2*Math.PI, true);
    context.fillStyle = this.mycolor
    context.fill();
    context.strokeStyle = "black";
    context.lineWidth = 3
    context.stroke();

}

mycircle.prototype.setcolor = function (color) {

    this.mycolor = color;

}

   
