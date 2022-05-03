const express = require('express');
const app = express();
const PORT = 3000;
const User = require('./models/User');

app.use(express.json());

app.get('/user', async (_req, res) => {
  const result = await User.getAll();
  res.status(200).json(result)
})

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const result = await User.findById(id);

  if (!result) return res.status(404).json({ error: true, message: 'Usuário não encontrado' });

  return res.status(200).json(result)
})

app.put('/user/:id', async (req, res) => {
  const { firstName, lastName, password, email } = req.body;
  const { id } = req.params;

  const result = await User.findById(id);

  if (!result) return res.status(404).json({ error: true, message: 'Usuário não encontrado' });

  const check = User.isValid(firstName, lastName, password, email);

  if (check.error) return res.status(400).json(check);

  await User.updateUser(firstName, lastName, password, email, id)
  return res.status(200).json({ firstName, lastName, id, email })
})

app.post('/user', async (req, res) => {
  const { firstName, lastName, password, email } = req.body;
  const check = User.isValid(firstName, lastName, password, email);

  if (check.error) return res.status(400).json(check);

  await User.create(firstName, lastName, password, email)
  return res.status(201).json({ firstName, lastName, id, email });
})

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});