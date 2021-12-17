import { Link } from 'react-router-dom'


const AllBeerItems = (props) => {
    return (  
        <article>
            <img src={props.image} alt={props.name} />
            <div>
                <h2>{props.name}</h2>
                <h3>{props.tagline}</h3>
                <p>Created by: {props.name}</p>
                <Link to={`/allbeer/${props.id}`}>Details</Link>
            </div>
        </article>
    );
}
 
export default AllBeerItems;