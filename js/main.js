console.log('Hello World!')

const cards = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']

const gameBoard = document.querySelectorAll(".board")
const board = document.querySelector('.board')
console.log(board)
console.log(gameBoard[0])



function createCardElements() {
	gameBoard.forEach(gameBoard => {
		cards.sort(() => 0.5 - Math.random());

		cards.forEach(card => {
			const cardElement = document.createElement('div');
			cardElement.classList.add('card')
			cardElement.dataset.value = card;

			cardElement.addEventListener('click', () => {
				cardElement.textContent = card;
			})

			gameBoard.appendChild(cardElement)
			})
		})
		
}

createCardElements()