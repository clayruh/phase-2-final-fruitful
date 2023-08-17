import tree from '../assets/reg tree.png'

export default function BookmarkedTree({bookmarkedTrees}) {

    const handleRemoveBookmark = (treeObj) => {
        console.log('removed', treeObj)
    }

    return(
        <div className="my-trees">
            <h2>Bookmarked Trees</h2>
            {bookmarkedTrees.map(treeObj => (
                <div key={treeObj.id} className="bookmarked-tree">
                    <div>
                        <img src={tree} alt="tree icon" className="bookmarked-tree-icon"></img>
                    </div>
                    <div>
                        <h3>{treeObj.spc_common}</h3>
                        <p>{treeObj.address}, {treeObj.boroname}</p>
                    </div>
                    <button onClick={() => handleRemoveBookmark}>remove</button>
                </div>
            ))}
        </div>
    )
}