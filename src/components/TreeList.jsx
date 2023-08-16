import TreeCard from './TreeCard'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function TreeList() {

    const { mulberryTrees, ginkgoTrees, serviceberryTrees, hawthornTrees, crabappleTrees, hackberryTrees } = useLoaderData()
    const [trees, setTrees] = useState([])

    const mappedTrees = trees.map( treeObj => (
        <div key={treeObj.tree_id}>
            <h1>{treeObj.spc_common}</h1>
            <p>{treeObj.latitude} {treeObj.longitude}</p>
            <p>{treeObj.address}, {treeObj.boroname}</p>
        </div>
    ) )

    return(
        <div className="find-container">
            <div className="fruit-trees">
                <img src="https://www.pngmart.com/files/22/Mulberry-Transparent-PNG.png" onClick={() => setTrees(mulberryTrees)}></img>
                <img src="https://as1.ftcdn.net/v2/jpg/00/73/95/36/1000_F_73953628_gpcjEKzD3gtxQ5ZucRLLjDuVQ2Bl9Kuf.jpg" onClick={() => setTrees(ginkgoTrees)}></img>
                <img src="https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Amelanchier-alnifolia--Danny-Barron--CC-BY-NC-ND.jpg" onClick={() => setTrees(serviceberryTrees)}></img>
                <img src="https://media.istockphoto.com/id/152940679/photo/hawthorn-berries-with-leaves-on-stem.jpg?s=612x612&w=0&k=20&c=bIFXQM8-AERkXPx4JdqpO02kiKWb1uq2Et6UWf9eY_8=" onClick={() => setTrees(hawthornTrees)}></img>
                <img src="https://www.piercenativeplantsale.com/uploads/1/1/2/0/112044857/s236061467420380553_p240_i2_w960.jpeg" onClick={() => setTrees(crabappleTrees)}></img>
                <img src="https://ae01.alicdn.com/kf/HTB1I2NUa5LrK1Rjy1zdq6ynnpXaC/Lote-1-45.jpg" onClick={() => setTrees(hackberryTrees)}></img>
            </div>
            <div>
                {mappedTrees}
            </div>
        </div>
    )
}