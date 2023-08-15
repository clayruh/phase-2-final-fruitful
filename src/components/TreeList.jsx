import TreeCard from './TreeCard'
import { userLoaderData } from 'react-router-dom'

export default function TreeList({ treeArray }) {
    return(
        <div>
            {treeArray.map( tree => (
                <TreeCard 
                    key={tree.id} 
                    tree={tree} 
                /> 
            ))}
        </div>
    )
}