import { Link } from 'react-router-dom'


const AllBeerItems = (props) => {
    return (  
        <article>
            <img src={props.image} alt={props.name} />
            <div>
                <h2>{props.name}</h2>
                <h3 className="orangeFont">{props.tagline}</h3>
                <p>Created by: {props.name}</p>
                <Link className="orangeBackground" to={`/allbeer/${props.id}`}>Details</Link>
            </div>
        </article>
    );
}
 
export default AllBeerItems;