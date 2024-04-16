const shape = document.getElementById('shape');
const circle = document.getElementById('circle');

// function to generate Randomn color
const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for( let i = 0 ; i < 6 ; i++){
       color += hex[Math.floor(Math.random() * 16 )];
    }
    return color;
};

// function to generate Randomn shape
const randomShape = function() {
    const shapes = ['circle', 'square', 'triangle', 'hexagon']; // Define an array of shape names
    const randomIndex = Math.floor(Math.random() * shapes.length); // Generate a random index
    // console.log(randomIndex)
    return shapes[randomIndex]; // Return the randomly selected shape
};


// changing the color on click
document.getElementById('changeColorBtn').addEventListener('click', function() {
    circle.style.backgroundColor = randomColor(); // Apply random color to circle
});


// changing the shape on click
document.getElementById('changeShapeBtn').addEventListener('click' ,function(){
    //   console.log("shape", shape);
      const changeShape = randomShape();

    if (changeShape === 'triangle') {
        shape.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
        // shape.style.backgroundColor = "red"
    } 
    else if (changeShape === 'hexagon') {
        shape.style.clipPath = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
        // shape.style.backgroundColor = "green";
    }
    else {
        shape.style.clipPath = null;
    }
      

});