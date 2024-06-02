// Bouncing Ball constructor class
class Ball {constructor(x, y, radius, dx, dy, color) {this.x = x; this.y = y; this.radius = radius;
     this.dx = dx; this.dy = dy; this.color = color;}

// Drawing method for the Ball class
    draw(ctx) {ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); 
        ctx.fillStyle = this.color; ctx.fill(); ctx.closePath();}

// Update method with collision detection for Ball class
    update(canvas) { // Collision detection with the canvas walls
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
const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");

// The Animation Loop
    function animate() {ctx.clearRect(0, 0, canvas.width, canvas.height); // Clearing the canvas
        ball.draw(ctx); // Drawing the ball
        ball.update(canvas); // Updating the ball's position}

// Implement animation using setInterval
    setInterval(animate, 10);}

