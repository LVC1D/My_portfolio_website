let highlights = document.querySelectorAll('h3');

// Define the function to change the color
const changeColor = () => {
    highlights.forEach((highlight) => {
        highlight.style.backgroundColor = '#445D48';
        highlight.style.color = '#D6CC99';
    });
}

// Define the function to revert the color
const revertColor = () => {
    highlights.forEach((highlight) => {
        highlight.style.backgroundColor = '';
        highlight.style.color = '';
    });
}

// Add event listeners to all <h3> elements
highlights.forEach((highlight) => {
    highlight.addEventListener('mouseover', changeColor);
    highlight.addEventListener('mouseout', revertColor);
});