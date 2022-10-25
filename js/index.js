async function nombreDeLaFuncion(){

    try{
        var eventsJson = await fetch('https://amazing-events.herokuapp.com/api/events')
        eventsJson = await eventsJson.json()
    }catch(error){
        console.log(error);
    }

    var eventsApi = eventsJson.events



    imprimirCartas(eventsApi,'cards')

/*     // -------------------------------------  CHECKBOX  ----------------------------------------------

const contenedorChecks = document.getElementById('checkbox-container')

let categoriasCheckbox = new Set(eventsApi.map(evento => evento.category))

categoriasCheckbox.forEach(createCheckbox)

function createCheckbox(categoria){
    contenedorChecks.innerHTML += `
    <div class="input-group-text bg-transparent border-0">
        <label for="">
        <input class="form-check-input mt-0 checkBoxClass" type="checkbox" value="${categoria}" aria-label=""> ${categoria}
        </label>
    </div>
    `
}

    // ----------------------------------- CHEKBOX & SEARCH Filtering ----------------------------------------------

let checkBoxClass = Array.from(document.querySelectorAll(".checkbox-container"))

let searchId = document.getElementById('checks')

checkBoxClass.forEach(checkbox => checkbox.addEventListener('click', filtrarCards))

searchId.addEventListener('input',filtrarCards)

function filtrarCards(){
    let checkboxFiltrados = checkboxFilters(eventsApi)
    let searchFiltrados = searchFilters(checkboxFiltrados,searchId.value)
    if(searchFiltrados.length !== 0 ){
        contenedorCards.innerHTML = ``
    }
    searchFiltrados.forEach(createCard)
}

function checkboxFilters(eventsApi){
    let checkboxFiltering = checkBoxClass.filter(check => check.checked).map(check => check.value)
    if (checkboxFiltering.length !== 0){
        checkboxFiltering = eventsApi.filter(event => checkboxFiltering.includes(event.category))
        return checkboxFiltering
    }
    return eventsApi

}
checkboxFilters(eventsApi)

function searchFilters(array, texto){
    let searFiltering = array.filter(event => event.name.toLowerCase().includes(texto.toLowerCase()))
    if(searFiltering.length === 0){
        contenedorCards.innerHTML = `
        <h1>No obtuvimos resultados en su busqueda</h1>
        `
        return []
    }
    return searFiltering
} */
let categorias = new Set(eventsApi.map(element => element.category))
categorias = [...categorias]
let printCategories = (array,id) => {
    document.querySelector(`#${id}`).innerHTML = ""
    array.forEach(cat =>{
        document.querySelector(`#${id}`).innerHTML +=
            `
            <label class="d-flex align-items-center p-1" for="${cat}">${cat}
                <input class="d-flex align-items-center m-1 checkbox" type="checkbox" id="${cat.toLowerCase()}" name="letter" value="${cat.toLowerCase()}">
            </label>
            `
    })
    let checks = document.querySelectorAll('.checkbox')
    checks.forEach(cadaCheck => {
        cadaCheck.addEventListener('click',() => search(eventsApi))
    })

}
printCategories(categorias,'checks')

let arrayEventos = categorias.map(cadaCategoria => {
    let arrayFiltrado = eventsApi.filter(cadaEvento => cadaEvento.category === cadaCategoria)
    return arrayFiltrado
})

function search(array) {

    let checks = document.querySelectorAll('.checkbox:checked')

    let filterArray = []
    checks.forEach(cadaCategoria => {
        let newArray = array.filter(cadaEvento => cadaEvento.category.toLowerCase() === cadaCategoria.value)

        filterArray = filterArray.concat(newArray)
    })

    if (filterArray.length===0) {
        filterArray = array
    }
    imprimirCartas(filterArray,'cards')
}






}

nombreDeLaFuncion()

function imprimirCartas(array,id) {
    document.querySelector(`#${id}`).innerHTML = ""
    array.forEach(event =>{
        document.querySelector(`#${id}`).innerHTML +=
            `
            <div class="styleCards card p-1" style="width: 25rem; ">
                    <img src="${event.image}" class="card-img-top" alt="imagen1">
                    <div class="card-body">
                        <h5 class="card-title">${event.name}</h5>
                        <p class="card-text"></p>
                        <div class="d-flex justify-content-between">
                            <h6>Price: ${event.price}</h6>
                        <a href="./details.html?id=${event._id}" class="btn btn-primary">Details</a>

                        </div>
                    </div>
                </div>

            `
    })
}
