require('dotenv').config({ silent: true });
const fs = require('fs');
const axios = require('axios');
const app = require('express')();

const { PORT = 8081 } = process.env;
let places = fs.readFileSync('./db.json', {encoding: 'utf-8'});
places = JSON.parse(places);
let i = 0;
let key = 0;
async function execute() {
  const  url =  `${process.env.HOST}/heart-beat-trends`;

  await axios({
      method: 'POST',
      url,
      headers: { api_key: process.env.API_KEY },
      data: {
        place: places[i],
        key
      }
    })
    .catch(error => {
      console.log(error.message);
    })
  console.log('place', `${i}/${places.length - 1} - key: ${key + 1}`);
  i++
  i = i % process.env.AMOUNT_PLACES;
  key++;
  key = key % AMOUNT_KEY;
} 

setInterval(execute, 4000);
execute()

app.listen(PORT, () => {
  console.log(`ENDPOINT: http://localhost:${PORT}`); // eslint-disable-line
  console.log(`ENVIROMENT: ${process.env.UP_STAGE}`); // eslint-disable-line
});
