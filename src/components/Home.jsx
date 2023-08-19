import headshot from '../assets/IMG_3244.JPG'

export default function Home() {

    return (
        <div className="home">
            <h3>
                Welcome to fruit(ful), where you'll have a bountiful time finding fruit trees in your area. Happy foraging!
            </h3>
            <iframe src="https://giphy.com/embed/bAwEiGwtV8mRy" width="480" height="259" frameBorder="0" className="giphy-embed"  title="totoro-trees" allowFullScreen></iframe>
            <div className="created-by">
                <img src={headshot} alt="Clae squatting and making a peace sign pose in front of red rocks"></img>
                <h4>
                    Made by Clae Lu, a forager who loves to stare at fruiting trees or pick random plants on the sidewalk. Fruitful was created using React Router and <a href="https://data.cityofnewyork.us/Environment/2015-Street-Tree-Census-Tree-Data/pi5s-9p35" target="_blank" rel="noreferrer">NYC Open Data's API</a>.
                </h4>
            </div>
        </div>
    )
}