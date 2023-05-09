const express = require('express')
const app = express()
const port = 3000

app.get('/movies', (req, res) => {
  res.send([
    {
    title: "Pulp Fiction",
    },
    {
    title: "Mad Max",
    },
    {
    title: "The Matrix",
    },
    ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})