function pintar(event) {
    event.target.style.backgroundColor = 'yellow';
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);



