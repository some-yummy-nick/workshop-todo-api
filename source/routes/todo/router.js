// Core
import express from 'express';

// Handlers
import * as todos from './';

const route = express.Router();

route.get('/', todos.get);

export { route as todos };
