import { getMarketOrders } from "./api_market.js"

const region_id = 10000002
const order_type = "all"

// NODES
const searchButton = document.querySelector("#search")
const typeId = document.querySelector("#typeid")
const display = document.querySelector("#search-results")

// LISTENERS
searchButton.addEventListener("click", (event) => {
    event.preventDefault()
    getMarketOrders(region_id, order_type, typeId.value).then((response) => {
        buildResults(response)
    })
})

// FUNCTIONS
function buildResults(data) {
    for (let row of data) {
        let tr = document.createElement("tr")
        tr.innerHTML = `
        <td>${row.type_id}</td>
        <td>${row.price}</td>
        `
        display.appendChild(tr)
    }
}
