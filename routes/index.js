var express = require('express');
var router = express.Router();

const title = 'Mini Message Board';
const date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
console.log(date);

const messages = [
  {
    text: 'Hi there, Jeff!',
    user: 'Briggs',
    added: date,
  },
  {
    text: 'Doc girl! Hello 👋',
    user: 'Tati',
    added: date,
  },
  {
    text: 'Heil, Queen!',
    user: 'Cat Queen',
    added: date,
  },
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: title, messages: messages });
  next();
});

router.get('/new', (req, res, next) => {
  res.render('form', { title: title });
});

router.post('/new', (req, res, next) => {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
