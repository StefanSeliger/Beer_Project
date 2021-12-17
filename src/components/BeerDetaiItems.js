import { Link } from 'react-router-dom'

const BeerDetailItems = (props) => {
    return (  
        <article>
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <h3 className="orangeFont">{props.tagline}</h3>
            <div>
                <p>First Brewed</p>
                <p>{props.first_brewed}</p>
            </div>
            <div>
                <p>Attenuation level</p>
                <p>{props.attenuation_level}</p>
            </div>
            <p>{props.description}</p>
            <Link to={props.link}><i class="fas fa-arrow-circle-left fa-4x"></i></Link>
        </article>
    );
}
 
export default BeerDetailItems;