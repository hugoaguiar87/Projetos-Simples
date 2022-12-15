let forVote = document.querySelector(".--left-1 span")
let office = document.querySelector(".--left-2 span")
let candidatesDescription = document.querySelector(".--left-4")
let images = document.querySelector(".d-1--right")
let infos = document.querySelector(".d-2")
let officeNumbers = document.querySelector(".--left-3")

let currentStage = 0
let typedNumber = ""

const startStage = () => {
    let stage = stages[currentStage] 
    
    let numberHtml = ""

    for (let i=0; i<stage.numbers; i++) {
        if ( i === 0){
            numberHtml += '<div class="number flasher"></div>'
        } else {
            numberHtml += '<div class="number"></div>'
        }
        
    }
    
    forVote.style.display = "none"
    office.innerHTML = stage.tittle
    candidatesDescription.innerHTML = ""
    images.innerHTML = ""
    infos.style.display = "none"
    officeNumbers.innerHTML = numberHtml
}

const updateInterface = () => {
    alert(`votou em ${typedNumber}`)
}

const handleClickButtonNumbers = (n) => {
    let flasherElement = document.querySelector(".number.flasher")
    if(flasherElement !== null) {
        flasherElement.innerHTML = n
        typedNumber = `${typedNumber}${n}`

        flasherElement.classList.remove("flasher")

        if(flasherElement.nextElementSibling !== null) {
            flasherElement.nextElementSibling.classList.add("flasher")
        } else {
            updateInterface()
        }
    }
}

startStage()