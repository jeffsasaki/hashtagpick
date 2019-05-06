const express = require('express');
const app = express();

app.get('/', (req, res) => {
  fetch('https://api.twitter.com/1.1/trends/place.json?id=23424977')
    .then((response) => response.json())
    .then((data) => res.json(data));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));