import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import BookmarkedTree from './BookmarkedTree'
import FruitTreesNav from './FruitTreesNav'
import icon from '../assets/tree-icon.png'

export default function TreeList() {
    const { bTrees } = useLoaderData()
    const [trees, setTrees] = useState([])

    //------- for Bookmarking ------//
    const [bookmarkedTrees, setBookmarkedTrees] = useState(bTrees)
    function addBookmarkedTree(newTree) {
        setBookmarkedTrees(prevBookmarkedTrees => [...prevBookmarkedTrees, newTree])
    }

    function handleBookmark(treeObj) {
        const OPTIONS = {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                spc_common: treeObj.spc_common,
                latitude: treeObj.latitude,
                longitude: treeObj.longitude,
                address: treeObj.address,
                boroname: treeObj.boroname,
            })
        }
        fetch('http://localhost:3000/trees', OPTIONS)
        .then(res => res.json())
        .then(newTree => addBookmarkedTree(newTree))
    }
    //---------end Bookmarking----------//

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
                <div className="popup-tree">
                    <h3>{treeObj.spc_common} tree</h3>
                    {treeObj.address}, {treeObj.boroname}
                </div>
                <div className="popup-bookmark">
                    <p onClick={() => handleBookmark(treeObj)}>bookmark</p>
                </div>
            </Popup>
        </Marker>
    ) )

    const default_longitude = 40.726892
    const default_latitude = -73.899816

    // const longitude = this.props.coords ? this.props.coords.longitude : default_longitude
    // const latitude = this.props.coords ? this.props.coords.latitude : default_latitude

    return(
        <div className="find-container">
            <FruitTreesNav setTrees={setTrees}/>
            <div className="map-and-bookmarks">
                <MapContainer center={[default_longitude, default_latitude]} zoom={13} style={{ width: '100%', height: '700px' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                    />
                    {mapTreeMarkers}
                </MapContainer>
                {/* {mappedTrees} */}
            </div>
                <BookmarkedTree bookmarkedTrees={bookmarkedTrees} setBookmarkedTrees={setBookmarkedTrees}/>
        </div>
    )
}