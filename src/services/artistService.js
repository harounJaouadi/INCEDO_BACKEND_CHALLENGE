import axios from "axios" ; 
import dotenv from "dotenv" ; 

dotenv.config() ; 

export async function getArtistByName(artistName) {
    try {
        const response = await axios.get(process.env.ARTIST_API_URL , {
            params : {
                api_key : process.env.API_KEY , 
                method : process.env.METHOD , 
                format : process.env.FORMAT ,
                artist : artistName 
            }
        })
        return response.data.results.artistmatches.artist ; 
    }catch (error) {
        console.error("Error in the getArtistByName function : " , error ) ;
        return [] ; 
    }
}