import { Link } from 'react-router-dom'

const MainItems = (props) => {
    return (  
        <article>
            <img src={props.image} alt={props.title} />
            <Link className="orangeBackground" to={props.link}><h1>{props.title}</h1></Link>
            <p>{props.mainText}</p>
        </article>
    );
}
 
export default MainItems;