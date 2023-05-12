import 'dotenv/config';
import pg from 'pg';
import express from 'express';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get('/api/todos', async (req, res) => {
  try {
    const sql = `
      select *
        from "todos"
        order by "todoId"
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.post('/api/todos', async (req, res) => {
  try {
    const { task, isCompleted = false } = req.body;
    if (!task || typeof isCompleted !== 'boolean') {
      res.status(400).json({ error: 'task and isCompleted are required' });
      return;
    }
    const sql = `
      insert into "todos" ("task", "isCompleted")
        values ($1, $2)
        returning *
    `;
    const params = [task, isCompleted];
    const result = await db.query(sql, params);
    const [todo] = result.rows;
    res.status(201).json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.patch('/api/todos/:todoId', async (req, res) => {
  try {
    const todoId = Number(req.params.todoId);
    if (!Number.isInteger(todoId) || todoId < 1) {
      res.status(400).json({ error: 'todoId must be a positive integer' });
      return;
    }
    const { isCompleted } = req.body;
    if (typeof isCompleted !== 'boolean') {
      res.status(400).json({ error: 'isCompleted (boolean) is required' });
      return;
    }
    const sql = `
      update "todos"
        set "updatedAt" = now(),
            "isCompleted" = $1
        where "todoId" = $2
        returning *
    `;
    const params = [isCompleted, todoId];
    const result = await db.query(sql, params);
    const [todo] = result.rows;
    if (!todo) {
      res.status(404).json({ error: `cannot find todo with todoId ${todoId}` });
      return;
    }
    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
