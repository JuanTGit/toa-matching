console.log('Hello World!')

const cards = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

const gameBoard = document.querySelectorAll(".board")

let selectedCards = [];

function shuffleCards(array) {
	return array.sort(() => 0.5 - Math.random());
}


function createCardElements() {
	gameBoard.forEach(board => {
		const playerCards = [...cards]
		shuffleCards(playerCards)

		playerCards.forEach(card => {
			const cardElement = document.createElement('div');
			cardElement.classList.add('card')
			cardElement.dataset.value = card;

			cardElement.addEventListener('click', () => handleCardClick(cardElement, board));

			board.appendChild(cardElement)
			})
		})
		
}

function handleCardClick(cardElement, board) {
	if (selectedCards.length < 2) {
		cardElement.textContent = cardElement.dataset.value;
		selectedCards.push({ value: cardElement.dataset.value, board: board, element: cardElement });
	}

	if (selectedCards.length === 2) {
		compareCards();
	}
}

function compareCards() {
	const [card1, card2] = selectedCards;

	if (card1.value === card2.value) {
		alert("It's a match!")
	} else {
		setTimeout(() => {
			card1.element.textContent = '';
			card2.element.textContent = '';
		}, 1000)
	}

	selectedCards = []
}

createCardElements();