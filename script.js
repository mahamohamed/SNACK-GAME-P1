// ---------------------------- Variables (state) ----------------------------/
let SNAKE
let SNAKEBODY
let SNACKTAIL
let SCORE = 0
let HIGHESTSCORE = 0
let CURRENTDIFFICALTY = ''
let TIMER = 0
let GAMESTARTED = false
let GAMEEND = false
board = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ''
]
// -------------------------------- Constants --------------------------------/
const SNACKOPTIONS = ['apple', 'candy', 'ball', 'random']
const DIFFICALTYLEVEL = ['easy', 'medium', 'hard']
const INITIALSNACKX = [0]
const INITIALSNACKY = [0]
// ------------------------ Cached Element References ------------------------/

// -------------------------------- Functions --------------------------------/

// ----------------------------- Event Listeners -----------------------------/
