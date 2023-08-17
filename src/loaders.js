export async function getTrees() {
    const mulberryResponse = await fetch('https://data.cityofnewyork.us/resource/5rq2-4hqu.json?spc_common=mulberry')
    const mulberryTrees = await mulberryResponse.json()

    const ginkgoResponse = await fetch('https://data.cityofnewyork.us/resource/5rq2-4hqu.json?spc_common=ginkgo')
    const ginkgoTrees = await ginkgoResponse.json()

    const serviceberryResponse = await fetch('https://data.cityofnewyork.us/resource/5rq2-4hqu.json?spc_common=serviceberry')
    const serviceberryTrees = await serviceberryResponse.json()
    
    const hawthornResponse = await fetch('https://data.cityofnewyork.us/resource/5rq2-4hqu.json?spc_common=hawthorn')
    const hawthornTrees = await hawthornResponse.json()

    const crabappleResponse = await fetch('https://data.cityofnewyork.us/resource/5rq2-4hqu.json?spc_common=crab%20apple')
    const crabappleTrees = await crabappleResponse.json()

    const hackberryResponse = await fetch('https://data.cityofnewyork.us/resource/5rq2-4hqu.json?spc_common=common%20hackberry')
    const hackberryTrees = await hackberryResponse.json()

    const bookmarkedTreesRes = await fetch('http://localhost:3000/trees')
    const bTrees = await bookmarkedTreesRes.json()

    return { mulberryTrees, ginkgoTrees, serviceberryTrees, hawthornTrees, crabappleTrees, hackberryTrees, bTrees }
}

// const treeName = ["mulberry", "ginkgo", "serviceberry", "crab apple", "hawthorn"]

// function fetchTrees() { (tree) => {
//   fetch(`https://data.cityofnewyork.us/resource/5rq2-4hqu.json?spc_common=${tree}`)
//   .then(res => res.json())
//   .then(data => console.log(data))
// }}

// fetchTrees("serviceberry")

// originalArray = []
//   ( let i=0, i<treeName.length ) {
//       originalArray.fill(fetchTrees(treeName[i]))}

// latLongs = []
// // originalArray = [treeObj1, treeObj2, ...] by this line, this is what originalArray will approx look like
// (let i=0, i<originalArray.length)
//   latLongs.fill([originalArray[i].latitude, originalArray[i].longitude])