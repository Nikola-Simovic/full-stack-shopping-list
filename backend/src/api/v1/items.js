const express = require('express');
const Joi = require('joi');

const router = express.Router();
const ITEMS = [
  {
    id: 1,
    name: 'Item 1',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Item 2',
    quantity: 1,

  },
  {
    id: 3,
    name: 'Red bull (not sponsored)',
    quantity: 1,

  },
];

router.get('/', (req, res) => {
  res.json(ITEMS);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = ITEMS.find((i) => i.id === id);
  if (!item) {
    res.status(404).json({ message: 'Not found' });
  }
  res.json(item);
});

const schema = Joi.object({
  name: Joi.string().min(2).required(),
  quantity: Joi.number().min(1).required(),
});

router.post('/', (req, res) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const { name } = req.body;
  const newItem = {
    id: ITEMS.length + 1,
    name: name,
    quantity: 1,
  };
  ITEMS.push(newItem);
  res.send(newItem);
});

router.put('/', (req, res) => {
  const id = parseInt(req.body.id, 10);
  const itemIndex = ITEMS.findIndex((i) => i.id === id);

  if (itemIndex === -1) {
    res.status(404).send('Not Found');
    return;
  }
  ITEMS[itemIndex].name = req.body.name;
  ITEMS[itemIndex].quantity = req.body.quantity;
  res.json(ITEMS[itemIndex]);
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const itemIndex = ITEMS.findIndex((i) => i.id === id);

  if (itemIndex === -1) {
    res.status(404).send('Not Found');
    return;
  }

  ITEMS[itemIndex].name = req.body.name;
  ITEMS[itemIndex].quantity = req.body.quantity;
  res.json(ITEMS[itemIndex]);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  const item = ITEMS.find((i) => i.id === id);
  if (!item) {
    res.status(404).send('Not found');
    return;
  }
  const index = ITEMS.indexOf(item);
  ITEMS.splice(index, 1);
  res.sendStatus(204);
});

module.exports = router;
