import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import MyTrees from './MyTrees'
import icon from '../assets/tree-icon.png'

export default function TreeList() {
    const { mulberryTrees, ginkgoTrees, serviceberryTrees, hawthornTrees, crabappleTrees, hackberryTrees } = useLoaderData()
    const [trees, setTrees] = useState([])

    //----- for Bookmarking ------//
    const [bookmarkedTrees, setBookmarkedTrees] = useState([])
    const handleBookmark = (treeObj) => {
        setBookmarkedTrees(prevbookmarkedTrees => [...prevbookmarkedTrees, treeObj])
    }

    // const mappedTrees = trees.map( treeObj => (
    //     <div key={treeObj.tree_id}>
    //         <h1>{treeObj.spc_common}</h1>
    //         <p>{treeObj.latitude} {treeObj.longitude}</p>
    //         <p>{treeObj.address}, {treeObj.boroname}</p>
    //     </div>
    // ) )

    const treeIcon = new L.icon({
        iconUrl: icon,
        iconSize: [32, 40],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    })

    const mapTreeMarkers = trees.map( treeObj => (
        <Marker
            key={treeObj.tree_id} 
            position={[
                treeObj.latitude, treeObj.longitude ]}
            icon={treeIcon}
        >
            <Popup>
                <div>
                    {treeObj.spc_common} tree
                    <br/>
                    {treeObj.address}, {treeObj.boroname}
                </div>
                <div className="bookmark">
                    <p onClick={() => handleBookmark(treeObj)}>bookmark</p>
                </div>
            </Popup>
        </Marker>
    ) )

    return(
        <div className="find-container">
            <div className="fruit-trees-nav">
                <div className="fruit-tree">
                    <img src="https://www.pngmart.com/files/22/Mulberry-Transparent-PNG.png" alt="Mulberry Trees" onClick={() => setTrees(mulberryTrees)}></img>
                    <h4>Mulberry Trees</h4>
                </div>
                <div className="fruit-tree">
                    <img src="https://as1.ftcdn.net/v2/jpg/00/73/95/36/1000_F_73953628_gpcjEKzD3gtxQ5ZucRLLjDuVQ2Bl9Kuf.jpg" alt="Ginkgo Trees" onClick={() => setTrees(ginkgoTrees)}></img>
                    <h4>Ginkgo Trees</h4>
                </div>
                <div className="fruit-tree">
                    <img src="https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Amelanchier-alnifolia--Danny-Barron--CC-BY-NC-ND.jpg" alt="Serviceberry Trees" onClick={() => setTrees(serviceberryTrees)}></img>
                    <h4>Serviceberry Trees</h4>
                </div>
                <div className="fruit-tree">
                    <img src="https://media.istockphoto.com/id/152940679/photo/hawthorn-berries-with-leaves-on-stem.jpg?s=612x612&w=0&k=20&c=bIFXQM8-AERkXPx4JdqpO02kiKWb1uq2Et6UWf9eY_8=" alt="Hawthorn Trees" onClick={() => setTrees(hawthornTrees)}></img>
                    <h4>Hawthorn Trees</h4>
                </div>
                <div className="fruit-tree">
                    <img src="https://www.piercenativeplantsale.com/uploads/1/1/2/0/112044857/s236061467420380553_p240_i2_w960.jpeg" alt="Crabapple Trees" onClick={() => setTrees(crabappleTrees)}></img>
                    <h4>Crabapple Trees</h4>
                </div>
                <div className="fruit-tree">
                    <img src="https://ae01.alicdn.com/kf/HTB1I2NUa5LrK1Rjy1zdq6ynnpXaC/Lote-1-45.jpg" alt="Hackberry Trees" onClick={() => setTrees(hackberryTrees)}></img>
                    <h4>Hackberry Trees</h4>
                </div>
            </div>
            <div>
                <MapContainer center={[40.74021106, -73.97738586]} zoom={13} style={{ width: '700px', height: '600px' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                    />
                    {mapTreeMarkers}
                </MapContainer>
                <MyTrees bookmarkedTrees={bookmarkedTrees}/>
                {/* {mappedTrees} */}
            </div>
        </div>
    )
}