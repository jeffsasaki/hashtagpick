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
    const output = data[0]['trends'].sort((a, b) => a.length - b.length);
    const tagset = new Set();
    let i = 0;
    while (tagset.size < 30 && i < 50) {
      if (typeof output[i] === 'undefined') {
        i++;
        continue;
      }
      const hashtag = output[i]['name'].replace(/\W/g, '');
      process.stdout.write(output[i]['name']);
      
      if (hashtag.length > 0 && hashtag[0] !== '_') {
        tagset.add(`#${hashtag}`);
        process.stdout.write(' ✅\n');
      } else {
        process.stdout.write(' ❌\n');
      }
      i++;
    }
    const returnData = Array.from(tagset).sort((a, b) => a.length - b.length);
    res.json(returnData);
  });
});

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => process.stdout.write(`Server started on port ${PORT}`));