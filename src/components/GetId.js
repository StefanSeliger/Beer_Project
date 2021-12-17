import { useParams } from 'react-router-dom'
import AllBeerDetail from '../pages/AllBeerDetails.js';


const GetId = () => {
    let { id } = useParams()
    console.log(id)
    return (
        <div>
            <AllBeerDetail
                id={id}
            />
        </div>
    );
}

export default GetId;