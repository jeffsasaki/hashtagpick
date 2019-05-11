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

app.get('/trending', (req, res) => {
  client.get('trends/place', { id: 23424977 }, (err, data, response) => {
    const output = data[0]['trends'];
    let tagset = new Set();
    let i = 0;
    while (tagset.size < 30) {
      tagset.add(
        '#' + output[i]['name']
        .replace(/^#/, '')
        .replace(/\s/g, '')
        .replace('\'', '')
      );
      i++;
    }
    let return_data = Array.from(tagset);
    res.json(return_data);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));