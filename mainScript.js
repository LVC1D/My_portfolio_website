let highlight = document.getElementsByTagName('h1');

const changeColor = () => {
    highlight.style.backgroundColor = "black";
    highlight.style.color = "white";
    highlight.style.borderRadius = "10px";
    highlight.style.transition = "0.2 easy";
}

const revertColor = () => {
    highlight.style.backgroundColor = '';
    highlight.style.color = ''; 
}


highlight.addEventListener("mouseover", changeColor);
highlight.addEventListener("mouseout", revertColor);