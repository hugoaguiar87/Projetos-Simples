let board = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: 'd'
}
let turnPlayer = ''
let winner = ''
let playing = false

// console.log(board"])

reset()

document.querySelector('.reset').addEventListener('click', reset)
document.querySelectorAll('.iten').forEach((i) => {
    i.addEventListener('click', itenClick)
})

function itenClick (event) {
    let iten = event.target.getAttribute('game-area')
    if(playing && board[iten] === ''){
        board[iten] = turnPlayer
        renderBoard()
        changePlayer()
    }

}

function reset ()  {
    let random = Math.floor(Math.random() * 2)
    turnPlayer = (random === 1) ? 'x' : 'o'
    winner = ''
    playing = true

    for (let i in board) {
        board[i] = ''
    }

    renderBoard()
    renderInfos()
}

function renderBoard() {
    for(let i in board) {
        let iten = document.querySelector(`div[game-area = ${i}]`)
        iten.innerHTML = board[i]
    }

    checkGame()
}

function renderInfos() {
    document.querySelector("#turnPlayer").innerHTML = `Jogador da vez: <span>${turnPlayer}</span>`
    document.querySelector('#result').innerHTML = `Resultado: <span>${winner}</span>`
}

function changePlayer () {
   turnPlayer = (turnPlayer === 'o') ? 'x' : 'o'
   renderInfos()
}

function checkGame () {
    if(checkWinner('x')){
        winner = ' O "x" venceu!'
        playing = false
    } else if(checkWinner('o')){
        winner = 'O "o" venceu!'
        playing = false
    } else if (checkTie()){
        winner = 'Empate!'
        playing = false
    }
}

function checkWinner (player) {
    let win = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',
        'a1,b1,c1',
        'a2,b2,c2',
        'a3,c3,b3',
        'a1,b2,c3',
        'a3,b2,c1'
    ]

    for (let w in win){
        let pArray = win[w].split(',')
        let hasWon = pArray.every((option) => {
            return (board[option] === player)
        })

        if(hasWon) {
            return true
        }
    }

    return false
} 

function checkTie () {
    for(let i in board) {
        if(board[i] === ''){
            return false
        }
    }
    
    return true
}