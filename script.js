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
let interval
let speed = 300
// -------------------------------- Constants --------------------------------/
// to add the score
const score = document.querySelector('#score')

// -------------------------------- Functions --------------------------------/
const endPage = () => {
  window.location.href = 'end.html'
}
const movement = () => {
  if (direction === 'down') {
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

        if (
          board[snake[index].substring(1)] !== 'obstacle' &&
          board[snake[index].substring(1)] !== 'sn' &&
          board[snake[index].substring(1)] !== ''
        ) {
          eat()
          return
        }
        if (
          board[snake[index].substring(1)] === 'obstacle' ||
          board[snake[index].substring(1)] === 'sn'
        ) {
          endPage()
          restart()
          return
        }
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
  } else if (direction === 'up') {
    direction = 'up'
    snake.forEach((element, index) => {
      if (index === 0) {
        headLocation = element
        board[snake[index].substring(1)] = ''
        snake[index] = `i${Number(element.substring(1)) - boxSize}`
        if (
          board[snake[index].substring(1)] !== 'obstacle' &&
          board[snake[index].substring(1)] !== 'sn' &&
          board[snake[index].substring(1)] !== ''
        ) {
          eat()
          return
        }
        if (
          board[snake[index].substring(1)] === 'obstacle' ||
          board[snake[index].substring(1)] === 'sn'
        ) {
          endPage()
          restart()
          return
        }
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
  } else if (direction === 'right') {
    direction = 'right'
    snake.forEach((element, index) => {
      if (index === 0) {
        headLocation = element
        board[snake[index].substring(1)] = ''
        snake[index] = `i${Number(element.substring(1)) + 1}`
        if (
          board[snake[index].substring(1)] !== 'obstacle' &&
          board[snake[index].substring(1)] !== 'sn' &&
          board[snake[index].substring(1)] !== ''
        ) {
          eat()
          return
        }
        if (
          board[snake[index].substring(1)] === 'obstacle' ||
          board[snake[index].substring(1)] === 'sn'
        ) {
          endPage()
          restart()
          return
        }
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
  } else if (direction === 'left') {
    direction = 'left'
    snake.forEach((element, index) => {
      if (index === 0) {
        headLocation = element
        board[snake[index].substring(1)] = ''
        snake[index] = `i${Number(element.substring(1)) - 1}`
        if (
          board[snake[index].substring(1)] !== 'obstacle' &&
          board[snake[index].substring(1)] !== 'sn' &&
          board[snake[index].substring(1)] !== ''
        ) {
          eat()
          return
        }
        if (
          board[snake[index].substring(1)] === 'obstacle' ||
          board[snake[index].substring(1)] === 'sn'
        ) {
          endPage()
          restart()
          return
        }
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
}

const update = () => {
  let div = ''
  // to this function work on each square in the board
  board.forEach((element, index) => {
    // to make it easier
    div = document.querySelector(`#i${index}`)
    // if i write obstacle then the square will become black
    if (element === 'obstacle') {
      div.style.backgroundColor = 'pink'
      // if i write sn then the square will become green to make sure it work and we will use it then to make the snake look like it move
    } else if (element === 'sn') {
      div.style.backgroundColor = 'rgb(194, 59, 98)'
    } else if (element === '') {
      div.style.backgroundColor = 'white'
    }
    // to use the emojis on the screen not just a color
    else if (typeof element === 'object' && element.emoji) {
      div.style.backgroundColor = 'white'
      div.textContent = element.emoji
    }
  })
  score.innerHTML = `<h4>score: ${snake.length - 3}</h4>`
  clearInterval(interval)
  interval = setInterval(movement, speed)
}
const speedLevel = () => {
  if (score >= 0 && score <= 3) {
    speed = 300
  } else if (score >= 4 && score <= 7) {
    speed = 290
  } else if (score >= 8 && score <= 11) {
    speed = 280
  } else if (score >= 12 && score <= 15) {
    speed = 270
  } else if (score >= 16 && score <= 19) {
    speed = 260
  } else if (score >= 20 && score <= 23) {
    speed = 250
  } else if (score >= 24 && score <= 27) {
    speed = 240
  } else if (score >= 28 && score <= 31) {
    speed = 230
  } else if (score >= 32 && score <= 35) {
    speed = 220
  } else if (score >= 36 && score <= 39) {
    speed = 210
  } else if (score >= 40 && score <= 43) {
    speed = 200
  } else if (score >= 44 && score <= 47) {
    speed = 190
  } else {
    speed = 150
  }
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
  // Add the new food location to the snake
  snake.push(`i${foodLocation}`)
  // Update the board to reflect the snake's new position
  board[foodLocation] = 'sn'

  // Remove the emoji from the div where the food was eaten
  const foodDiv = document.querySelector(`#i${foodLocation}`)
  if (foodDiv) {
    foodDiv.textContent = '' // Clear the emoji
  }

  // Spawn a new food item on the board
  snackLocation()
  // Update the visual representation
  update()
}

snackLocation()
update()

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

        if (
          board[snake[index].substring(1)] !== 'obstacle' &&
          board[snake[index].substring(1)] !== 'sn' &&
          board[snake[index].substring(1)] !== ''
        ) {
          eat()
          return
        }
        if (
          board[snake[index].substring(1)] === 'obstacle' ||
          board[snake[index].substring(1)] === 'sn'
        ) {
          endPage()
          restart()
          return
        }
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
        if (
          board[snake[index].substring(1)] !== 'obstacle' &&
          board[snake[index].substring(1)] !== 'sn' &&
          board[snake[index].substring(1)] !== ''
        ) {
          eat()
          return
        }
        if (
          board[snake[index].substring(1)] === 'obstacle' ||
          board[snake[index].substring(1)] === 'sn'
        ) {
          endPage()
          restart()
          return
        }
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
        if (
          board[snake[index].substring(1)] !== 'obstacle' &&
          board[snake[index].substring(1)] !== 'sn' &&
          board[snake[index].substring(1)] !== ''
        ) {
          eat()
          return
        }
        if (
          board[snake[index].substring(1)] === 'obstacle' ||
          board[snake[index].substring(1)] === 'sn'
        ) {
          endPage()
          restart()
          return
        }
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
        if (
          board[snake[index].substring(1)] !== 'obstacle' &&
          board[snake[index].substring(1)] !== 'sn' &&
          board[snake[index].substring(1)] !== ''
        ) {
          eat()
          return
        }
        if (
          board[snake[index].substring(1)] === 'obstacle' ||
          board[snake[index].substring(1)] === 'sn'
        ) {
          endPage()
          restart()
          return
        }
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

const restart = () => {
  // Loop through the board and clear the board
  board.forEach((element, index) => {
    if (element !== 'obstacle') {
      board[index] = '' // Reset non-obstacle positions on the board
    }

    // Clear the emoji from the board's divs (if there's any)
    const div = document.querySelector(`#i${index}`)
    if (div) {
      div.textContent = '' // Remove the emoji
    }
  })

  // Reset the snake to its initial positions
  snake.length = 0 // Clear the snake array
  snake = ['i286', 'i287', 'i288'] // Set the snake's initial positions
  direction = 'left'
  // Place the snake on the board
  board[snake[0].substring(1)] = 'sn'
  board[snake[1].substring(1)] = 'sn'
  board[snake[2].substring(1)] = 'sn'

  // Reset the food
  snackLocation()

  // Update the board view
  update()
}
window.onload = function () {
  const music = document.getElementById('background-music')
  music.play() // Play the audio automatically
}
