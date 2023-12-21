const cardArray = [
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    }
];

const scoreDisplay = document.getElementById("score");
const gridDisplay = document.querySelector("#grid");

cardArray.sort(() => 0.5 - Math.random())

const cardChosen = [];

function createBoard() {
    for (let i=0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src","images/blank.png");
        card.setAttribute("dataId",i);
        card.addEventListener("click", flipCard);
        gridDisplay.appendChild(card)
    }
}

createBoard();
///


function flipCard () {
    let cardId = this.getAttribute('dataId');
    // console.log(cardArray[cardId].name);
    // console.log("clicked", cardId);
    cardChosen.push(cardArray[cardId].name);
    this.setAttribute("src",cardArray[cardId].img);
}


