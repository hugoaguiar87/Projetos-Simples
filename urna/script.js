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
    let stage = stages[currentStage]
    let candidate = stage.candidates.filter((c) => {
        if(c.number === typedNumber) {
            return true
        } else {
            return false
        }
    })

    if(candidate.length > 0) {
        candidate = candidate[0]

        forVote.style.display = "block"
        candidatesDescription.innerHTML = `Nome: ${candidate.name} <br/> Partido: ${candidate.party} <br/> ${candidate.vice ? `Vice: ${candidate.vice}` : ""}`
        infos.style.display = "block"

        let photosHtml = ''
        for (let i in candidate.photos) {
            photosHtml += `
                <div class="--right-image ${candidate.photos[i].small ? "small" : ""}"> 
                    <img src="images/${candidate.photos[i].url}" alt="Foto Candidato"/> 
                    ${candidate.photos[i].subtitle}
                </div>
            `
        }

        images.innerHTML = photosHtml
    } else {
        forVote.style.display = "block"
        infos.style.display = "block"
        candidatesDescription.innerHTML = "<div class= 'warning flasher'> VOTO NULO</div>"

    }
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