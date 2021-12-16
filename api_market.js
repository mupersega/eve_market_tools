import { getAllPages } from "./api_utils.js"

function buildMarketOrdersUrl(regionId, orderType, typeId) {
    let base = "https://esi.evetech.net/latest/markets/"
    let newUrl = `${base}${regionId}/orders/?datasource=tranquility&order_type=${orderType}`
    if (typeId) {
        newUrl += `&type_id=${typeId}`
    }
    return newUrl
}

async function getMarketOrders(regionId, orderType, typeId) {
    let url = buildMarketOrdersUrl(regionId, orderType, typeId)
    return await getAllPages(url, 1)
}

export { getMarketOrders }
