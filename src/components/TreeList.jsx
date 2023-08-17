import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function TreeList() {
    const { mulberryTrees, ginkgoTrees, serviceberryTrees, hawthornTrees, crabappleTrees, hackberryTrees } = useLoaderData()
    const [trees, setTrees] = useState([])

    // const mappedTrees = trees.map( treeObj => (
    //     <div key={treeObj.tree_id}>
    //         <h1>{treeObj.spc_common}</h1>
    //         <p>{treeObj.latitude} {treeObj.longitude}</p>
    //         <p>{treeObj.address}, {treeObj.boroname}</p>
    //     </div>
    // ) )

    const mapTreeMarkers = trees.map( treeObj => (
        <Marker
            key={treeObj.tree_id} 
            position={[
                treeObj.latitude, 
                treeObj.longitude
            ]}
            onClick={ () => {
                setTrees(treeObj)
            } }
        />
    ) )

    return(
        <div className="find-container">
            <div className="fruit-trees-nav">
                <img className="fruit-tree" src="https://www.pngmart.com/files/22/Mulberry-Transparent-PNG.png" alt="Mulberry Trees" onClick={() => setTrees(mulberryTrees)}></img>
                <img className="fruit-tree" src="https://as1.ftcdn.net/v2/jpg/00/73/95/36/1000_F_73953628_gpcjEKzD3gtxQ5ZucRLLjDuVQ2Bl9Kuf.jpg" alt="Ginkgo Trees" onClick={() => setTrees(ginkgoTrees)}></img>
                <img className="fruit-tree" src="https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Amelanchier-alnifolia--Danny-Barron--CC-BY-NC-ND.jpg" alt="Serviceberry Trees" onClick={() => setTrees(serviceberryTrees)}></img>
                <img className="fruit-tree" src="https://media.istockphoto.com/id/152940679/photo/hawthorn-berries-with-leaves-on-stem.jpg?s=612x612&w=0&k=20&c=bIFXQM8-AERkXPx4JdqpO02kiKWb1uq2Et6UWf9eY_8=" alt="Hawthorn Trees" onClick={() => setTrees(hawthornTrees)}></img>
                <img className="fruit-tree" src="https://www.piercenativeplantsale.com/uploads/1/1/2/0/112044857/s236061467420380553_p240_i2_w960.jpeg" alt="Crabapple Trees" onClick={() => setTrees(crabappleTrees)}></img>
                <img className="fruit-tree" src="https://ae01.alicdn.com/kf/HTB1I2NUa5LrK1Rjy1zdq6ynnpXaC/Lote-1-45.jpg" alt="Hackberry Trees" onClick={() => setTrees(hackberryTrees)}></img>
            </div>
            <div>
                <MapContainer center={[40.74021106, -73.97738586]} zoom={13} style={{ width: '700px', height: '600px' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                    />
                    {mapTreeMarkers}
                </MapContainer>
                {/* {mappedTrees} */}
            </div>
        </div>
    )
}