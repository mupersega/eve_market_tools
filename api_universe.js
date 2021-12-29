import { postPage } from "./api_utils.js"

async function getTypeIdFromTypeName(TypeName) {
    let url = "https://esi.evetech.net/latest/universe/ids/?datasource=tranquility&language=en"
    let params = [TypeName]

    console.log(JSON.stringify(params))
    let typeInfo = await postPage(url, params)
    return typeInfo.inventory_types[0].id
}

export { getTypeIdFromTypeName }
