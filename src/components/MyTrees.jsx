import { useLoaderData } from 'react-router-dom'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import icon from '../assets/tree-icon.png'

export default function MyTrees() {

    const { bTrees } = useLoaderData()

    const treeIcon = new L.icon({
        iconUrl: icon,
        iconSize: [32, 40],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    })

    const mapMyTrees = bTrees.map( treeObj => (
        <Marker
            key={treeObj.id} 
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
                    {/* <p onClick={() => handleBookmark(treeObj)}>bookmark</p> */}
                </div>
            </Popup>
        </Marker>
    ) )

    return(
        <div className="map-and-bookmarks">
            <MapContainer center={[40.726892, -73.899816]} zoom={13} style={{ width: '100%', height: '600px' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                />
                {mapMyTrees}
            </MapContainer>
        </div>
    )
}