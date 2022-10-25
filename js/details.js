const contenedorDetails = document.getElementById('detail-container')

async function getDataApi(){
    try {
        var eventsJson = await fetch('https://amazing-events.herokuapp.com/api/events')
        eventsJson = await eventsJson.json()
    } catch (error) {
        console.log(error);
    }

    let data = eventsJson.events

    let id = location.search.slice(4)
    data = data.filter(event => event._id == id)
    data = data[0]
    createCard(data)
}

getDataApi()


function createCard(evento){
    contenedorDetails.innerHTML += `
    <div class="card" style="width: 18rem; height: 28em">
        <img src="${evento.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${evento.name}</h5>
            <p class="card-text">${evento.description}</p>
            <p class="card-text">${evento.place}</p>
            <p class="card-text">${evento.date}</p>
            <p class="card-text">${evento.assistance}</p>
        </div>
    </div>
    `
}