import express from 'express';
import morgan, { token } from 'morgan';
import cors from 'cors';

const app = express();

let persons = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
];

app.use(cors());
app.use(express.json());

morgan.token('body', (req) => JSON.stringify(req.body));
app.use(morgan(
  (tokens, req, res) => {
    const tokensArr = [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms',
    ];
    if (req.method === 'POST' && res.statusCode === 200)
      tokensArr.push(tokens.body(req, res));
    return tokensArr.join(' ');
  }
));

app.get('/info', (_, res) => {
  res.send(`<p>Phonebook has info for ${persons.length} people<br/>${new Date()}</p>`)
});

app.get('/api/persons', (_, res) => {
  res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
  const id = req.params.id;
  const person = persons.find(p => p.id === Number(id));

  if (person) res.json(person);
  else res.status(404).end();
});

const generateRandomId = () => Math.round(Math.random() * Math.pow(10,10));

app.post('/api/persons', (req, res) => {
  const { name, number } = req.body;

  if (!name || !number) {
    res.status(400).json({
      error: "Name or number is missing"
    });
  } else if (persons.some(p => p.name === name)) {
    res.status(400).json({
      error: "Name must be unique"
    });
  } else {
    const newPerson = {
      id: generateRandomId(),
      name,
      number,
    };
    persons.push(newPerson);
    res.json(newPerson);
  }
});

app.delete('/api/persons/:id', (req, res) => {
  const id = req.params.id;
  persons = persons.filter(p => p.id !== Number(id));
  res.status(204).end();
});

const PORT = 3001;
app.listen(PORT);