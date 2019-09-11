// Core
import express from 'express';

// Handlers
import * as todos from './';

const route = express.Router();

// http://localhost:3000/api/todos
route.get('/', todos.read);

// http://localhost:3000/api/todos
route.post('/', todos.create);

// http://localhost:3000/api/todos/identifier
route.put('/:id', todos.update);

// http://localhost:3000/api/todos/identifier
route.delete('/:id', todos.remove);

export { route as todos };
