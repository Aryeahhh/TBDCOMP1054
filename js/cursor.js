//Coordinates of the cursor
const coords = { x: 0, y: 0 };
//Select all the circles
const circles = document.querySelectorAll(".dot");
//Add event listener to the document to change the color of the cursor when it hovers over a text element(doesn't work)
document.addEventListener('mouseover', function(event) {
            if (event.target.tagName.toLowerCase() === 'span') { // or any other text element
                circle.style.backgroundColor = 'transparent';
            } else {
                circle.style.backgroundColor = 'black';
            }
        });
//Set the initial position of the cursor
circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = '#000000';
});
//Add event listener to the window to get the coordinates of the cursor
window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});
//Animate the cursor
function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}
//Call the animateCircles function
animateCircles();