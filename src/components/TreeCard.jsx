export default function TreeCard({tree}) {

    const imgSrc = tree.spc_common === 'gingko' ? 'https://www.pngmart.com/files/22/Mulberry-Transparent-PNG.png' : ''

    return (
        <>
            {/* <img src={imgSrc} alt={tree.spc_common}></img> */}
            <p>{tree.spc_common}</p>
        </>
    )
}