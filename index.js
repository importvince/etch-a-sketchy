// 1. create a board of tiles based on the value of the slider
// - initiate a variable for slider
// - capture value of slider
// - write a function that uses the value of the slider to create that amount of divs
// - these divs should be styled to appear as squares with borders
// 2. create event listeners on every created tile to listen for hovers
// - create an array of the board
// - write a forEach function that adds the same event listener to every div
// parameters: should stay colored. passing over again shouldn't change it back. board container should stay same size the entire time. 
// - should default to boring, but also an event listener on the boring button and can switch to random colors when pretty button is pressed. so there should be an event listener on the pretty button that runs the same forEach fucntion as above but includes a random color generator
// - most styling will have the be done with javascript. includes color on hover and sizing of grid divs. and will have to maybe add grid styling to the #tile-container too...
// 3. Add a reset button to clear the board
// 4. Make it fun and different

const slider = document.getElementById('myRange');
const container = document.getElementById('tile-container');
const boring = document.getElementById('boring');
const pretty = document.getElementById('pretty');
const reset = document.getElementById('reset');
const sliderReader = document.getElementById('slider-reader');

sliderReader.textContent = slider.value;

slider.oninput = function() {
    sliderReader.textContent = `${this.value} X ${this.value}`;
}

createBoard(); // need an event listener on the slider to create the board size accordingly

slider.addEventListener('change', createBoard);


function createBoard() {
    const style = document.createElement('style');

    // add style to board
    // ** somehow need hover effect to stay 
    style.innerHTML = `
    #tile-container {
        grid-template-columns: repeat(${slider.value}, 1fr);
        grid-template-rows: repeat(${slider.value}, 1fr);

    }`
    document.head.appendChild(style);

    const gridSize = slider.value * slider.value;

    for (let i = 0; i < gridSize; i++) {
        const tile = document.createElement('div');
        tile.style.height = "1fr";
        container.appendChild(tile);
        tile.addEventListener('mouseover',() => {
            tile.style.backgroundColor = 'black'
        })
    }
}
