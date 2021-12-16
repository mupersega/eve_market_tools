// function getData(url) {
//     return fetch(url)
//         .then((response) => {
//             switch (response.status) {
//                 case 200:
//                     // console.log(response)
//                     return response.json()
//                 case 404:
//                     return
//                 default:
//                     throw "There was an error"
//             }
//         })
//         .catch(() => console.log("error"))
// }

// async function getPagesOfData(url, pages) {
//     const data = []
//     for (let i = 1; i < pages + 1; i++) {
//         let newUrl = `${url}&page=${i}`
//         data.push(getData(newUrl))
//     }
//     const dataWithCatches = data.map((promise) =>
//         promise.catch((error) => error)
//     )
//     final_obj = []
//     Promise.all(dataWithCatches).then((j) => {
//         let errorCount = 0
//         for (each of j) {
//             try {
//                 final_obj.push(...each)
//             } catch (error) {
//                 errorCount++
//                 continue
//             }
//         }
//         resolve(j => return j)
//     })
// }

// function buildMarketOrdersUrl(regionId, orderType, typeId) {
//     let base = "https://esi.evetech.net/latest/markets/"
//     let newUrl = `${base}${regionId}/orders/?datasource=tranquility&order_type=${orderType}`
//     if (typeId) {
//         newUrl += `&type_id=${typeId}`
//     }
//     return newUrl
// }

// // EVENT LISTENERS
// const typeSubmit = document.querySelector("#type-submit")
// typeSubmit.addEventListener("click", (event) => {
//     event.preventDefault()
//     buildResultsTable()
// })

// async function buildResultsTable() {
//     const display = document.querySelector("#results-display")
//     const typeId = document.querySelector("#type-input").value
//     getPagesOfData(buildMarketOrdersUrl("10000043", "all", typeId), 5).then(
//         (j) => {
//             console.log(j)
//             for (row in j) {
//                 console.log(row)
//                 let row = document.createElement("tr")
//                 row.innerHTML = `
//                     <td>${row.type_id}</td>
//                     <td>${row.price}</td>
//                     `
//                 display.appendChild(row)
//             }
//         }
//     )
// }
// // getPagesOfData(buildMarketOrdersUrl("10000043", "all"), 160)

function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x)
        }, 2000)
    })
}

async function f1() {
    var x = await resolveAfter2Seconds(10)
    console.log(x) // 10
}

f1()
