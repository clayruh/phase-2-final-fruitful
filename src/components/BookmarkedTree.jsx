import tree from '../assets/reg tree.png'

export default function BookmarkedTree({ bookmarkedTrees, setBookmarkedTrees }) {

    function deleteBookmark(deletedTree) {
        const filteredTrees = bookmarkedTrees.filter( tree => tree.id !== deletedTree.id )
        setBookmarkedTrees(filteredTrees)
    }

    function handleRemoveBookmark(treeObj) {
        const OPTIONS = {method: 'DELETE'}
        fetch(`${process.env.REACT_APP_JSON_SERVER_URL}/${treeObj.id}`, OPTIONS)
        .then(res => res.json())
        .then(() => deleteBookmark(treeObj))
    } 

    return(
        <div className="my-trees">
            <h2>Bookmarked Trees</h2>
            <div className="bookmark-trees-container">
                {bookmarkedTrees.map(treeObj => (
                    <div key={treeObj.id} className="bookmarked-tree">
                        <div>
                            <img src={tree} alt="tree icon" className="bookmarked-tree-icon"></img>
                        </div>
                        <div>
                            <h3>{treeObj.spc_common} tree</h3>
                            <p>{treeObj.address}, {treeObj.boroname}</p>
                        </div>
                        <button onClick={() => handleRemoveBookmark(treeObj)}>remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}