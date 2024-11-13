# Artist Search API

## Description
A Node.js REST API for searching artists using the Last.fm API. If no results are found, it randomly selects an artist's name from a predefined list of artists stored in a JSON document . 
The result will be stored in a CSV file . 
The CSV file include the following information (name, mbid, url, image_small, image)

## Setup 

### Prerequisites
- Node.js ( version used : v20.14.0 ) and npm
- A valid [Last.fm API key] ("I understand that sharing an API key can be risky. However, I've included my key in the .env file to make it easier for you to test the API without needing to create your own Last.fm account)

### Running the Server 
1. Clone the repository : 
   git clone https://github.com/harounJaouadi/INCEDO_BACKEND_CHALLENGE.git

2. Install dependencies : 
   npm install 

2. In The root directory of the project run the server :
   npm run start   

### Example Usage 
1. Open a Terminal and send a request : 
   curl -s -H "Accept: application/json" "localhost:3000/api/artists/?name=eminem&filename=eminem_file"
