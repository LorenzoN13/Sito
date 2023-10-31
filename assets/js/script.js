let button = document.querySelector("button");
let header = document.querySelector("header");
let containerBox = document.querySelector(".container-box");

/*****************INIZIO SWITCH HOME PAGE*****************/

button.addEventListener('click', () => {
    header.classList.remove('hidden');
});

button.addEventListener('click', () => {
    containerBox.classList.add('hidden');
});


/*****************FINE SWITCH HOME PAGE*****************/