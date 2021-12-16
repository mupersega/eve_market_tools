async function getPage(url) {
    const response = await fetch(url)
    if (response.status == 200) {
        let output = await response.json()
        return output
    } else {
        throw Error
    }
}

async function getAllPages(url, ppr) {
    const data = []
    let done = false
    let i = 0
    // process ppr(pages per request) number of requests at a time until a request is rejected.
    while (!done) {
        const currentProms = []
        // prepare promises
        for (let page = i + 1; page <= i + ppr; page++) {
            currentProms.push(getPage(`${url}&page=${page}`))
        }
        i += ppr
        console.log(`Requests made: ${i}`)
        // asynchronously process current promises and wait for them to resolve
        let evaluatedProms = await Promise.allSettled(currentProms)
        // process results
        for (let prom of evaluatedProms) {
            if (prom.status == "fulfilled") {
                data.push(...prom.value)
            } else {
                done = true
            }
        }
    }
    return data
}

export { getPage, getAllPages }
