import { getMarketOrders } from "./api_market.js"
import { getTypeIdFromTypeName } from "./api_universe.js"

const region_id = 10000002
const order_type = "all"

// NODES
const searchButton = document.querySelector("#search")
const typeId = document.querySelector("#typeid")
const display = document.querySelector("#search-results")

// LISTENERS
searchButton.addEventListener("click", (event) => {
    event.preventDefault()
    getTypeIdFromTypeName(typeName.value)
    .then((typeId) => {
        getMarketOrders(region_id, order_type, typeId).then((response) => {
            buildResults(response)
        })
    }).catch((err) => {
        switch (err.message) {
            case "typeInfo.inventory_types is undefined":
                showUnfoundError()
                break;
            default:
                break;
        }
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

function showUnfoundError() {
    let errorMessage = document.createElement("p")
    errorMessage.innerHTML = 'Item not found, please check spelling.'
    document.querySelector("body").appendChild(errorMessage)
}
