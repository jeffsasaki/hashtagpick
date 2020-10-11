const express = require('express');
const Twitter = require('twitter');
const googleTrends = require('google-trends-api');
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

const getGoogleTrends = () => {
  return googleTrends
    .dailyTrends({ geo: 'US' })
    .then(data => {
      const output = [];
      const parsedData = JSON.parse(data).default.trendingSearchesDays[0].trendingSearches;
      parsedData.forEach(val => output.push(val.title.query));
      return output;
    });
};

const getTwitterTrends = () => {
  return client.get('trends/place', { id: 23424977 })
    .then(data => {
      const trends = data[0]['trends'];
      const output = [];
      for(let j = 0; j < trends.length; j++) {
        output.push(trends[j]['name']);
      }
      return output;
    });
};

app.get('/api/trending', (req, res) => { 
  const promises = [
    getGoogleTrends(),
    getTwitterTrends()
  ];
  Promise.all(promises)
    .then(data => {
      const output = data[0].concat(data[1]);
      const tagset = new Set();
      let i = 0;

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
    })
    .catch(err => console.error(err));
});

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => process.stdout.write(`\nServer started on port ${PORT}\n`));