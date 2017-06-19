import express from 'express';
import path from 'path';
import open from 'open';

/*eslint-disable no-console*/

const port = 3000;
const app = express();

app.use(express.static('dist'));

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, error => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server started at http://localhost:${port}`);
  }
});
