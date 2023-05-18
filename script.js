const svg = document.getElementById('canvas');
let currentShape;

window.addEventListener("resize", resizeSvg);

function resizeSvg(){
    let bbox = svg.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${bbox.width} ${bbox.height}`);
}

function resizeSvg(){
    let bbox = svg.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${bbox.width} ${bbox.height}`);
    
    for(let circle of svg.children){
        circle.setAttribute('r',  Math.min(bbox.width, bbox.height) * 0.1);
    }
}


// Define event listeners for shape buttons
document.getElementById('square-button').addEventListener('click', () => {
    createShape('rect');
});

document.getElementById('circle-button').addEventListener('click', () => {
    createShape('circle');
});

document.getElementById('ellipse-button').addEventListener('click', () => {
    createShape('ellipse');
});

// Define event listener for color button
document.getElementById('color-button').addEventListener('click', () => {
    changeColor();
});

// Function to create a new shape
function createShape(shapeType) {
// Remove previous shape if it exists
    if (currentShape) {
        svg.removeChild(currentShape);
    }

// Create new shape and add to svg and set in the center
    const shape = document.createElementNS('http://www.w3.org/2000/svg', shapeType);
    shape.setAttribute('fill', 'none');
    shape.setAttribute('stroke', 'black');
    shape.setAttribute('stroke-width', '3');
    if (shapeType === 'rect') {
        shape.setAttribute('x', '200');
        shape.setAttribute('y', '200');
        shape.setAttribute('width', '100');
        shape.setAttribute('height', '100');
    } else if (shapeType === 'circle') {
        shape.setAttribute('cx', '250');
        shape.setAttribute('cy', '250');
        shape.setAttribute('r', '50');
    } else if (shapeType === 'ellipse') {
        shape.setAttribute('cx', '250');
        shape.setAttribute('cy', '250');
        shape.setAttribute('rx', '100');
        shape.setAttribute('ry', '50');
    }
    svg.appendChild(shape);
    currentShape = shape;
}

// Function to change color of current shape
function changeColor() {
    if (currentShape) {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        currentShape.setAttribute('fill', `rgb(${r},${g},${b})`);
    }
}