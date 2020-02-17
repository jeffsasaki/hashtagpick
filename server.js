const express = require('express');
const Twitter = require('twitter');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.TOKEN_SECRET
});

app.get('/api/trending', (req, res) => {
  client.get('trends/place', { id: 23424977 }, (err, data, response) => {
    const trends = data[0]['trends'];
    const output = [];
    const tagset = new Set();
    let i = 0;

    for(let j = 0; j < trends.length; j++) {
      output.push(trends[j]['name']);
    }
    output.sort((a, b) => a.length - b.length);

    while (tagset.size < 30 && i < output.length) {
      if (typeof output[i] === 'undefined') {
        i++;
        continue;
      }
      const hashtag = output[i].replace(/\W/g, '');

      if (hashtag.length > 0 && hashtag[0] !== '_') {
        tagset.add(`#${hashtag}`);
        process.stdout.write(`✅ ${output[i]}\n`);
      } else {
        process.stdout.write(`❌ ${output[i]}\n`);
      }
      i++;
    }
    res.json(Array.from(tagset));
  });
});

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => process.stdout.write(`\nServer started on port ${PORT}\n`));