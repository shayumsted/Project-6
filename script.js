// Bouncing Ball constructor class
class Ball {
    constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;}

// Drawing method for the Ball class
draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();}

// Update method with collision detection for Ball class
update(canvas) {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.dx = -this.dx;}
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.dy = -this.dy;}

// Updated Ball position
        this.x += this.dx;
        this.y += this.dy;}}

// Create a new Ball instance with test data
const ball = new Ball(200, 160, 20, 2, 2, "red");

// Getting the canvas and context
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("animationCanvas");
    const context = canvas.getContext("2d");

// The Animation Loop
function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        ball.draw(context);
        ball.update(canvas);}

// Implement animation using setInterval
    setInterval(animate, 10);});