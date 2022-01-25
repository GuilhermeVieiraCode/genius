let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue-area');
const red = document.querySelector('.red-area');
const yellow = document.querySelector('.yellow-area');
const green = document.querySelector('.green-area');

const shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

const lightColor = (element, number) => {
    number *= 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

const checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Score: ${score}\nSuccess! Starting next level!`);
        nextLevel();
    }
}

const click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

}

const createColorElement = (color) => {
    switch (color) {
        case 0:
            return green;
        case 1:
            return red;
        case 2:
            return yellow;
        case 3:
            return blue;        
        default:
            break;
    }
}

const nextLevel = () => {
    score++;
    shuffleOrder();
}

const gameOver = () => {
    alert(`Score: ${score}\nYou lose!\nClick ok to start a new game`);
    order = [];
    clickedOrder = [];

    newGame();
}

const newGame = () => {
    alert('Welcome to genius! Starting a new game!');
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

newGame();
