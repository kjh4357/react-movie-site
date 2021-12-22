import { useEffect, useState } from 'react';
import { isCompositeComponent } from 'react-dom/cjs/react-dom-test-utils.production.min';
import { useParams } from 'react-router-dom';
function Details() {
    const [detail, setDetail] = useState(null);
    const {id} = useParams();
    const getDetails = async(id) => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setDetail(json.data.movie);
        
    }
    console.log(detail)
    useEffect(() => {
        getDetails(id);
    }, [])
    return (
        <div>
            <h1>{detail.title}</h1>
            <div>
                <img src={detail.medium_cover_image} />
                <h2>{detail.description_full}</h2>
            </div>
        </div>
    )
}

export default Details;