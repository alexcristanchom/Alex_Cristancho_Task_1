let cards = document.getElementById("cards")

function impresionCards(elementos,amazingEvents){
for (let tarjetas of amazingEvents.events){
    elementos.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="${tarjetas.image}" class="card-img-top" alt="${tarjetas.name}">
        <div class="card-body">
          <h5 class="card-title">${tarjetas.name}</h5>
          <p class="card-text">${tarjetas.description}</p>
          <p class="card-text">price: $${tarjetas.price}</p>
          <a href="#" class="btn btn-primary">Buy</a>
        </div>
    </div>`
}
}
impresionCards(cards, amazingEvents)