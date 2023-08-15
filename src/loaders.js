export async function getMulberryTrees() {

    const response = await fetch('https://data.cityofnewyork.us/resource/5rq2-4hqu.json?spc_common=mulberry')

    const mulberryTrees = await response.json()
    return { mulberryTrees }
}