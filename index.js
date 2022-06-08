const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const arr = [
    { fruits: 'apple', vegetable: 'potato' },
    { fruits: 'banana', vegetable: 'Onion' },
    { fruits: 'dragonfruit', vegetable: 'Tomato' },
  ];
  const data = arr.map(Showfruits);
  function Showfruits(item) {
    return item.fruits;
  }
  res.send(data);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
