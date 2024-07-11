import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import fs from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { nanoid } from 'nanoid';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

// reading and writing - local file
const dataFilePath = path.join(__dirname, 'tasks.json');

const readTasksFromFile = async () => {
  try {
    const data = await fs.readFile(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return [];
  }
};

const writeTasksToFile = async (tasks) => {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(tasks));
  } catch (error) {
    console.log(error);
  }
};

// initial data
let taskList = await readTasksFromFile();

// middlewares
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('<h1>Hello From Server... </h1>');
});

app.get('/api/tasks', (req, res) => {
  res.json({ taskList });
});

app.post('/api/tasks', async (req, res) => {
  const { title } = req.body;
  if (!title) {
    res.status(400).json({ msg: 'please provide title' });
    return;
  }

  const newTask = { id: nanoid(), title, isDone: false };
  taskList = [...taskList, newTask];
  await writeTasksToFile(taskList);
  res.status(201).json({ task: newTask });
});

app.patch('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { isDone } = req.body;

  taskList = taskList.map((task) => {
    if (task.id === id) {
      return { ...task, isDone };
    }
    return task;
  });

  await writeTasksToFile(taskList);
  res.status(200).json({ msg: 'task updated' });
});

app.delete('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  taskList = taskList.filter((task) => task.id !== id);
  await writeTasksToFile(taskList);
  res.status(200).json({ msg: 'task removed' });
});

// not found
app.use((req, res) => res.status(404).send('Route does not exist'));

// server
const port = process.env.port || 5000;

const startApp = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startApp();
