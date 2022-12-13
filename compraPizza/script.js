const html = (element) => {
    return document.querySelector(element)
}

pizzaJson.map((iten, index) => {
    let pizzaItem = html(".models .pizza-item").cloneNode(true)
    
    pizzaItem.querySelector("img").setAttribute("src", `${iten.img}`) 
    pizzaItem.querySelector(".pizza-item--price").innerText = `De R$ ${iten.price.p.toFixed(2)} a R$ ${iten.price.g.toFixed(2)}`
    pizzaItem.querySelector(".pizza-item--name").innerText = `${iten.name}`
    pizzaItem.querySelector(".pizza-item--desc").innerText = `${iten.description}`

    html(".pizza-area").append(pizzaItem)
})