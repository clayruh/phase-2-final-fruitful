import { useLoaderData } from 'react-router-dom'

export default function FruitTreesNav({ setTrees }) {
    const { mulberryTrees, ginkgoTrees, serviceberryTrees, hawthornTrees, crabappleTrees, hackberryTrees } = useLoaderData()

    return (
        <div className="fruit-trees-nav">
            {/* <TreeSelector name="Mulberry Trees" img="//" onClick={() => setTrees(mulberryTrees)} /> */}
            <div className="fruit-tree" onClick={() => setTrees(mulberryTrees)}>
                <img src="https://www.pngmart.com/files/22/Mulberry-Transparent-PNG.png" alt="Mulberry Trees"></img>
                <h4>Mulberry Trees</h4>
            </div>
            <div className="fruit-tree" onClick={() => setTrees(ginkgoTrees)}>
                <img src="https://as1.ftcdn.net/v2/jpg/00/73/95/36/1000_F_73953628_gpcjEKzD3gtxQ5ZucRLLjDuVQ2Bl9Kuf.jpg" alt="Ginkgo Trees"></img>
                <h4>Ginkgo Trees</h4>
            </div>
            <div className="fruit-tree" onClick={() => setTrees(serviceberryTrees)}>
                <img src="https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Amelanchier-alnifolia--Danny-Barron--CC-BY-NC-ND.jpg" alt="Serviceberry Trees"></img>
                <h4>Serviceberry Trees</h4>
            </div>
            <div className="fruit-tree" onClick={() => setTrees(hawthornTrees)}>
                <img src="https://media.istockphoto.com/id/152940679/photo/hawthorn-berries-with-leaves-on-stem.jpg?s=612x612&w=0&k=20&c=bIFXQM8-AERkXPx4JdqpO02kiKWb1uq2Et6UWf9eY_8=" alt="Hawthorn Trees"></img>
                <h4>Hawthorn Trees</h4>
            </div>
            <div className="fruit-tree" onClick={() => setTrees(crabappleTrees)}>
                <img src="https://www.piercenativeplantsale.com/uploads/1/1/2/0/112044857/s236061467420380553_p240_i2_w960.jpeg" alt="Crabapple Trees"></img>
                <h4>Crabapple Trees</h4>
            </div>
            <div className="fruit-tree" onClick={() => setTrees(hackberryTrees)}>
                <img src="https://ae01.alicdn.com/kf/HTB1I2NUa5LrK1Rjy1zdq6ynnpXaC/Lote-1-45.jpg" alt="Hackberry Trees"></img>
                <h4>Hackberry Trees</h4>
            </div>
        </div>
    )
}