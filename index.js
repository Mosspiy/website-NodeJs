const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join('public')));

const indexpage = path.join(__dirname, 'index.html');
const projectpage = path.join(__dirname, 'trai.html');
const contactpage = path.join(__dirname, 'cont.html');
const exp = path.join(__dirname, 'exp.html');

console.log(indexpage);

app.get('/', (req, res) => {
  res.sendFile(indexpage);
});
app.get('/index', (req, res) => {
  res.sendFile(indexpage);
});


app.get('/trainings', (req, res) => {
    res.sendFile(projectpage)
});

app.get('/Contact', (req, res) => {
    res.sendFile(contactpage)
})

app.get('/Experience', (req, res) => {
    res.sendFile(exp)
})

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});