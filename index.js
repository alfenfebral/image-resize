const express = require('express');
const resize = require('./resize');

const app = express();

app.get('/', (req, res) => {
  const widthString = req.query.width;
  const heightString = req.query.height;
  const format = req.query.format;

  let width, height;
  if (widthString) {
    width = parseInt(widthString);
  }
  if (heightString) {
    height = parseInt(heightString);
  }

  res.type(`image/${format || 'png'}`);
  resize('react.png', format, width, height).pipe(res);
});

app.listen(8000, () => {
  console.log('Server started!');
});