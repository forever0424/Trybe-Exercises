const router = require('express').Router();
const { SUCCESS } = require('../statusCode');
const { validTeam } = require('../middlewares/validationsMiddlewares');
const fs = require('fs');

router.post('/', validTeam, (req, res) => {
  const { name, initials, country, league } = req.body;
  const obj = { name, initials, country, league };

  if (fs.existsSync('teams.json')) {
    const newFile = JSON.parse(fs.readFileSync('teams.json', 'utf-8'));
    newFile.push(obj);
    fs.writeFileSync('teams.json', JSON.stringify(newFile));
    return res.status(SUCCESS).json(obj);
  }

  const file = [];
  file.push(obj)
  fs.writeFileSync('teams.json', JSON.stringify(file))
  return res.status(SUCCESS).json(obj);
});

router.get('/', (_req, res) => {
  if (!fs.existsSync('teams.json')) return res.status(SUCCESS).json({ "teams": [] });

  const file = JSON.parse(fs.readFileSync('teams.json', 'utf-8'));
  return res.status(SUCCESS).json(file);
})

module.exports = router;