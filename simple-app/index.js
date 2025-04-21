// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 2000;

app.get('/', (req, res) => {
  res.send('🚀 CI/CD working! Hello from Node.js!');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

