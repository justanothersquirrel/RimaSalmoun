// scribble.js

// Wrap the entire script inside a DOMContentLoaded listener
document.addEventListener("DOMContentLoaded", () => {
  const svgPath = document.getElementById("scribble-path");
  const svgContainer = document.getElementById("scribble-border");

  let isHovered = false;

function drawScribble(amplitude) {
    if (!svgPath) return;

    // 1. Define your custom start and end points in pixels
    const startY = 70;  // How many pixels down from the top the line begins
    const endY = 700;   // How many pixels down from the top the line stops
    
    // Calculate the total custom length of the line
    const totalHeight = endY - startY; 
    const steps = 30; 
    const stepHeight = totalHeight / steps;
    
    // 2. Set the starting point coordinate (X=15, Y=startY)
    let pathData = `M 15 ${startY}`; 
    
    for (let i = 1; i <= steps; i++) {
        // Calculate Y starting from your custom offset
        const y = startY + (i * stepHeight);
        
        const xOffset = isHovered ? (Math.random() - 0.5) * amplitude : 0;
        const x = 15 + xOffset;
        
        pathData += ` L ${x} ${y}`;
    }
    
    svgPath.setAttribute('d', pathData);
}

  function animateScribble() {
    if (isHovered) {
      drawScribble(10);
      requestAnimationFrame(animateScribble);
    }
  }

  // Only attach events if the container element actually exists in the HTML
  if (svgContainer) {
    svgContainer.addEventListener("mouseenter", () => {
      isHovered = true;
      animateScribble();
    });

    svgContainer.addEventListener("mouseleave", () => {
      isHovered = false;
      drawScribble(0);
    });
  }

  // Initialise the line on page load
  drawScribble(0);
});
