const express = require('express');
const app = express();
app.use(express.json())
const fs = require('fs').promises;

//Exercicios Simpsons

const authMiddleware = ('/simpsons', (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || authorization.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  next();
})

app.get('/simpsons', authMiddleware, (req, res) => {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then((data) => res.status(200).json(JSON.parse(data)))
    .catch((e) => res.status(500).end())
})

app.get('/simpsons/:id', authMiddleware, (req, res) => {
  const { id } = req.params;

  return fs.readFile('./simpsons.json', 'utf-8')
    .then((data) => {
      const simpsons = JSON.parse(data);
      const char = simpsons.find((char) => char.id === id);

      if (!char) return res.status(404).json({ message: 'simpson not found' });

      return res.status(200).json(char);
    })
    .catch((e) => res.status(500).end())
})

app.post('/simpsons', authMiddleware, (req, res) => {
  const { id, name } = req.body;

  return fs.readFile('./simpsons.json', 'utf-8')
    .then((data) => {
      const simpsons = JSON.parse(data);

      const char = simpsons.find((char) => char.id === id);
      if (char) return res.status(409).json({ message: 'id already exists' });

      const newSimpsons = [...simpsons, { id, name }]
      fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons))
      return res.status(204).end();
    })
    .catch((e) => res.status(500).end())
})



//Exercicios 1 ao 5

app.get('/ping', (req, res) => res.json({ message: 'pong' }));

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ "message": name })
})

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age > 17) return res.status(200).json({ "message": `Hello, ${name}` })
  return res.status(401).json({ "message": "Unauthorized" })
})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
});


// Generate Token && exercicio bonus

const crypto = require('crypto');
function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if (!email || !password || !firstName || !phone) return res.status(401)
    .json({ message: 'missing fields' });
  
  return res.status(200).json({ token: generateToken() })
})

app.listen(3001, console.log('Ouviu!'))