// ---------------------------- Variables (state) ----------------------------/
// board
let board = [
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'sn',
  'sn',
  'sn',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle',
  'obstacle'
]
// snake in array bcuz there are 3 parts in the snake
let snake = ['i286', 'i287', 'i288']
// to determent the length of snake to classified the length if it's body, head, and tail
let lengthOfTheSnake = snake.length
// for the past location to make the body in the past location of the head
let headLocation = ''
// distance between the squares
let boxSize = 25
// this function update to make the squares black or green depend on what we write
let direction = 'left'
let foodItems = [
  { emoji: '🍎', type: 'apple' },
  { emoji: '🍬', type: 'candy' },
  { emoji: '⚽', type: 'ball' }
]
let foodLocation = ''
// -------------------------------- Constants --------------------------------/

// -------------------------------- Functions --------------------------------/
const update = () => {
  let div = ''
  // to this function work on each square in the board
  board.forEach((element, index) => {
    // to make it easier
    div = document.querySelector(`#i${index}`)
    // if i write obstacle then the square will become black
    if (element === 'obstacle') {
      div.style.backgroundColor = 'black'
      // if i write sn then the square will become green to make sure it work and we will use it then to make the snake look like it move
    } else if (element === 'sn') {
      div.style.backgroundColor = 'green'
    } else if (element === '') {
      div.style.backgroundColor = 'white'
    }
    // to use the emojis on the screen not just a color
    else if (typeof element === 'object' && element.emoji) {
      div.style.backgroundColor = 'white'
      div.textContent = element.emoji
    }
  })
}
const snackLocation = () => {
  // finding empty squares (checks all the squares) store indexes
  let emptyIndices = []
  // to go through all elements in the board
  board.forEach((element, index) => {
    // checks if the square is empty
    if (element === '') {
      //  index is added to the array
      emptyIndices.push(index)
    }
  })
  //  if array not empty at least empty square on board
  if (emptyIndices.length > 0) {
    // select random number but in the numbers between zero and length
    const randomIndex = Math.floor(Math.random() * emptyIndices.length)
    // selects a food item
    const randomFood = foodItems[Math.floor(Math.random() * foodItems.length)]
    // places the randomly selected food item at the randomly chosen empty square
    board[emptyIndices[randomIndex]] = randomFood
    foodLocation = emptyIndices[randomIndex]
  }
}
const eat = () => {
  snake.push(foodLocation)
  board[foodLocation] = 'sn'
  snackLocation()
  update()
}
snackLocation()
update()
eat()
// ----------------------------- Event Listeners -----------------------------/
// event listener to use the keyboard key
document.addEventListener('keyup', (event) => {
  // i add and condition to not make the motion reverse the direction and the snack will die
  if (event.key === 'ArrowDown' && direction !== 'up') {
    direction = 'down'
    // to work on each square in the board
    snake.forEach((element, index) => {
      // for head
      if (index === 0) {
        // store location for the body
        headLocation = element
        // make the element in the board empty
        board[snake[index].substring(1)] = ''
        // to move
        snake[index] = `i${Number(element.substring(1)) + boxSize}`

        //  to make it green
        board[snake[index].substring(1)] = 'sn'
      }
      // to the body and tail
      else {
        // make the element in the board empty
        board[snake[index].substring(1)] = ''
        // use the past location of the head
        snake[index] = headLocation
        //  to make it green
        board[snake[index].substring(1)] = 'sn'
        headLocation = element
      }
    })
    board[headLocation.substring(1)] = ''
    update()
    // note i use substring bcuz i just want the number without i
  } else if (event.key === 'ArrowUp' && direction !== 'down') {
    direction = 'up'
    snake.forEach((element, index) => {
      if (index === 0) {
        headLocation = element
        board[snake[index].substring(1)] = ''
        snake[index] = `i${Number(element.substring(1)) - boxSize}`
        board[snake[index].substring(1)] = 'sn'
      } else {
        board[snake[index].substring(1)] = ''
        snake[index] = headLocation
        board[snake[index].substring(1)] = 'sn'
        headLocation = element
      }
    })
    board[headLocation.substring(1)] = ''
    update()
  } else if (event.key === 'ArrowRight' && direction !== 'left') {
    direction = 'right'
    snake.forEach((element, index) => {
      if (index === 0) {
        headLocation = element
        board[snake[index].substring(1)] = ''
        snake[index] = `i${Number(element.substring(1)) + 1}`
        board[snake[index].substring(1)] = 'sn'
      } else {
        board[snake[index].substring(1)] = ''
        snake[index] = headLocation
        board[snake[index].substring(1)] = 'sn'
        headLocation = element
      }
    })
    board[headLocation.substring(1)] = ''
    update()
  } else if (event.key === 'ArrowLeft' && direction !== 'right') {
    direction = 'left'
    snake.forEach((element, index) => {
      if (index === 0) {
        headLocation = element
        board[snake[index].substring(1)] = ''
        snake[index] = `i${Number(element.substring(1)) - 1}`
        board[snake[index].substring(1)] = 'sn'
      } else {
        board[snake[index].substring(1)] = ''
        snake[index] = headLocation
        board[snake[index].substring(1)] = 'sn'
        headLocation = element
      }
    })
    board[headLocation.substring(1)] = ''
    update()
  }
})
