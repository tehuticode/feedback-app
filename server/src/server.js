const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send('Home page');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

