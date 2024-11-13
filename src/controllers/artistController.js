import randomArtists from '../utils/randomArtists.json' assert {type : 'json'}
import { getArtistByName } from '../services/artistService.js';
import { writeToCSV } from '../utils/csvWriter.js';

export async function GetUsersByName(req , res) {
    
    const {name , filename} = req.query ; 

    if( !filename ) {
        return res.status(400).json({
            message : "you must specify the filename"
        })
    } else if (!name) {
        return res.status(400).json({
            message : "you must specify the name"
        })
    }

    try {
        let artists = await getArtistByName(name) ; 

        if(artists.length == 0) {
            let counter=0 ;
            for (const artistName of randomArtists) {

                if (Math.floor(Math.random() * 3) == 1 || ((counter+1==randomArtists.length) && (artists.length==0))){
                    
                    const randomArtistData = await getArtistByName(artistName) ; 
                    artists = [...artists,...randomArtistData] ; 
                }
                counter++ ; 
            }
        }

        await writeToCSV(artists,filename+".csv") ; 
        res.status(200).json(artists) ;
        
    }catch (error) {
        res.status(500).json({
            message : error.message  
        }) ;

    }

} ; 



