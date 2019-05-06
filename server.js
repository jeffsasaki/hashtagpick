const express = require('express');
const Twitter = require('twitter');
const key = require('./config/twitter');
const app = express();
const client = new Twitter({
  consumer_key: key.CONSUMER_KEY,
  consumer_secret: key.CONSUMER_SECRET,
  access_token_key: key.ACCESS_TOKEN,
  access_token_secret: key.TOKEN_SECRET
});


app.get('/', (req, res) => {
  client.get('trends/place', { id: 23424977 }, (err, data, response) => {
    let output = data[0]['trends'];
    let return_data = [];
    for (let i = 0; i < output.length; i++) {
      return_data.push(output[i]['name'].replace(/^#/, '').replace(' ', ''). replace('\'', '').trim());
    }
    res.json(return_data);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));