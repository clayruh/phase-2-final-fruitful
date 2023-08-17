export default function MyTrees({bookmarkedTrees}) {
    return(
        <div className="my-trees">
            <h2>Bookmarked Trees</h2>
            {bookmarkedTrees.map(treeObj => (
                <div key={treeObj.tree_id}>
                    <h3>{treeObj.spc_common}</h3>
                    <p>{treeObj.address}, {treeObj.boroname}</p>
                </div>
            ))}
        </div>
    )
}