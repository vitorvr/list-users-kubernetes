const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/users', (req, res) => {
  res.json([
    { name: 'Jhon', id: 1 },
    { name: 'Ashe', id: 2 },
  ]);
});

app.listen(port, () => console.log(`Server is running at on port ${port}`));
