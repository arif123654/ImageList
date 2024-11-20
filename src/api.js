import axios from "axios"


const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: 'Client-ID oyQx86z1GpkZ34MX1kNvATtCDn0Lz7XUQ9J3sGFbzHM'
        },
        params: {
            query: term,
        }
    })

    return response.data.results;
}

export default searchImages;