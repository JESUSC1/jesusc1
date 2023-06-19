const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
    const joke = response.data;

    if (joke.type === 'twopart') {
      res.send(`${joke.setup}\n\n${joke.delivery}`);
    } else {
      res.send(joke.joke);
    }
  } catch (error) {
    res.status(500).send('Failed to fetch a joke');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
