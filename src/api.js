import axios from "axios"
import unsplash_api_key from "./statics";


const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: 'Client-ID '+unsplash_api_key
        },
        params: {
            query: term,
        }
    })

    return response.data.results;
}

export default searchImages;