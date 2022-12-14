let cart = []
let modalQt = 1
let key
let sizeSelected
// 0 = P , 1 = M , 2 = G

const html = (element) => {
    return document.querySelector(element)
}

const closeModal = () => {
    html(".pizzaWindowArea").style.opacity = 0
    setTimeout(() => {
        html(".pizzaWindowArea").style.display = "none"
    }, 300)
}

const updateCart = () => {
    html(".menu-openner span").innerHTML = `${cart.length}`

    if(cart.length > 0) {
        html("aside").classList.add("show")
        html(".cart").innerHTML = ""

        let subTotal = 0
        let discount = 0
        let total = 0

        cart.map((pizza, index) => {
            let pizzaItem = pizzaJson.find((iten) => { return iten.id == pizza.id })
            let pizzaHtml = html(".models .cart--item").cloneNode(true)

            let pizzaSize
            switch (pizza.size) {
                case 0:
                    pizzaSize = "P"
                    break;
                case 1:
                    pizzaSize = "M"
                    break;
                case 2:
                    pizzaSize = "G"
                    break;
            }
            let pizzaName = `${pizzaItem.name} (${pizzaSize})`

            pizzaHtml.querySelector("img").setAttribute("src", `${pizzaItem.img}`)
            pizzaHtml.querySelector(".cart--item-nome").innerHTML = pizzaName
            pizzaHtml.querySelector(".cart--item--qt").innerHTML = pizza.qt
            pizzaHtml.querySelector(".cart--item-qtmenos").addEventListener("click", () => {
                if(pizza.qt > 1) {
                    pizza.qt--
                } else {
                    cart.splice(index, 1)
                }
                updateCart()
            })
            pizzaHtml.querySelector(".cart--item-qtmais").addEventListener("click", () => {
                pizza.qt++
                updateCart()
            })

            subTotal += (pizza.qt * pizza.unitPrice)
            discount = subTotal*0.1
            total = subTotal - discount

            html(".cart").append(pizzaHtml)            
        })

        html(".subtotal span:last-child").innerHTML = `R$ ${subTotal.toFixed(2)}`
        html(".desconto span:last-child").innerHTML = `R$ ${discount.toFixed(2)}`
        html(".total span:last-child").innerHTML = `R$ ${total.toFixed(2)}`
    } else {
        html("aside").classList.remove("show")
        html("aside").style.left = "100vw"
    }
}

pizzaJson.map((iten, index) => {
    let pizzaItem = html(".models .pizza-item").cloneNode(true)

    pizzaItem.querySelector("img").setAttribute("src", `${iten.img}`) 
    pizzaItem.querySelector(".pizza-item--price").innerText = `De R$ ${iten.price[0].toFixed(2)} a R$ ${iten.price[2].toFixed(2)}`
    pizzaItem.querySelector(".pizza-item--name").innerText = `${iten.name}`
    pizzaItem.querySelector(".pizza-item--desc").innerText = `${iten.description}`
    pizzaItem.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault()

        key = index
        modalQt = 1

        html(".pizzaBig img").setAttribute("src", pizzaJson[key].img)
        html(".pizzaInfo h1").innerText = pizzaJson[key].name
        html(".pizzaInfo--desc").innerText = pizzaJson[key].description
        html(".pizzaInfo--size.selected").classList.remove("selected")
        document.querySelectorAll(".pizzaInfo--size").forEach((i, k) => {
            if (k == 2) {
                i.classList.add("selected")
                sizeSelected = k
            }
            i.querySelector("span").innerText = pizzaJson[key].sizes[k]
        })
        html(".pizzaInfo--actualPrice").innerText = `R$ ${pizzaJson[key].price[sizeSelected].toFixed(2)}`
        html(".pizzaInfo--qt").innerText = modalQt

        html(".pizzaWindowArea").style.opacity = 0
        html(".pizzaWindowArea").style.display = "flex"
        setTimeout(() => {
            html(".pizzaWindowArea").style.opacity = 1
        }, 150)
    })

    html(".pizza-area").append(pizzaItem)
})

document.querySelectorAll(".pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton").forEach( (i) => {
    i.addEventListener("click", closeModal)
})

html(".pizzaInfo--qtmenos").addEventListener("click", () => {
    if(modalQt > 1) {
        modalQt--
    }
    html(".pizzaInfo--qt").innerText = modalQt
    html(".pizzaInfo--actualPrice").innerText = `R$ ${(pizzaJson[key].price[sizeSelected] * modalQt).toFixed(2)}`
})

html(".pizzaInfo--qtmais").addEventListener("click", () => {
    modalQt++
    html(".pizzaInfo--qt").innerText = modalQt
    html(".pizzaInfo--actualPrice").innerText = `R$ ${(pizzaJson[key].price[sizeSelected] * modalQt).toFixed(2)}`
})

document.querySelectorAll(".pizzaInfo--size").forEach((iten, index) => {
    iten.addEventListener("click", () => {
        html(".pizzaInfo--size.selected").classList.remove("selected")
        iten.classList.add("selected")
        sizeSelected = index
        html(".pizzaInfo--actualPrice").innerText = `R$ ${(pizzaJson[key].price[sizeSelected] * modalQt).toFixed(2)}`
    })
})

html(".pizzaInfo--addButton").addEventListener("click", () => {

    let identifier = `${pizzaJson[key].id}@${sizeSelected}`
    let hasInCart = cart.findIndex((i) => {
        return i.identifier == identifier
    })

    if(hasInCart > -1) {
        cart[hasInCart].qt += modalQt
    } else {
        cart.push({
            identifier,
            id: pizzaJson[key].id,
            size: sizeSelected,
            qt: modalQt,
            unitPrice: pizzaJson[key].price[sizeSelected]
        })  
    }

    closeModal()
    updateCart()
})

html(".menu-openner").addEventListener("click", () => {
    if( cart.length > 0) {
        html("aside").style.left = 0
    }
})

html(".menu-closer").addEventListener("click", () => {
    html("aside").style.left = "100vw"
})