import express from 'express';
import data from './data.js';
import path from 'path';

const app = express();

app.get('/api/characters', (req, res) => {
  res.send(data.characters);
});

app.get('/api/students', (req, res) => {
  res.send(data.students);
});

app.get('/api/staff', (req, res) => {
  res.send(data.staff);
});

// Necesito una api para traer los detalles del character
app.get('/api/characters/:id', (req, res) => {
  // buscaremos el producto
  const character = data.characters.find((x) => x._id === req.params.id);
  if (character) {
    res.send(character);
  } else {
    res.status(404).send({ message: 'Caracter not Found' });
  }
});

app.get('/api/students/:id', (req, res) => {
  // buscaremos el producto
  const student = data.students.find((x) => x._id === req.params.id);
  if (student) {
    res.send(student);
  } else {
    res.status(404).send({ message: 'Student not Found' });
  }
});

app.get('/api/staff/:id', (req, res) => {
  // buscaremos el producto
  const staff = data.staff.find((x) => x._id === req.params.id);
  if (staff) {
    res.send(staff);
  } else {
    res.status(404).send({ message: 'Staff not Found' });
  }
});

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
});

// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
