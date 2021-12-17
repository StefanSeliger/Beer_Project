import { Link } from 'react-router-dom'

const BeerDetailItems = (props) => {
    return (  
        <section>
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
            <Link to={props.link}>back</Link>
        </section>
    );
}
 
export default BeerDetailItems;