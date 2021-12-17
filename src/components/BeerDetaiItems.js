import { Link } from 'react-router-dom'
import Arrow from '../img/Vector.jpg'

const BeerDetailItems = (props) => {
    return (  
        <article>
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <h3>{props.tagline}</h3>
            <div>
                <p>First Brewed</p>
                <p>{props.first_brewed}</p>
            </div>
            <div>
                <p>Attenuation level</p>
                <p>{props.attenuation_level}</p>
            </div>
            <p>{props.description}</p>
            <Link to={props.link}><img src={Arrow} alt="back" /> </Link>
        </article>
    );
}
 
export default BeerDetailItems;