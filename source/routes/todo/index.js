// Instruments
import { Todo } from '../../controllers';

export const read = async (req, res) => {
    try {
        const todo = new Todo();
        const data = await todo.read();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const create = async (req, res) => {
    try {
        const todo = new Todo(req.body);
        const data = await todo.create();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const todo = new Todo(req.body);
        const data = await todo.update(req.params.id);

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const remove = async (req, res) => {
    try {
        const todo = new Todo();
        const data = await todo.remove(req.params.id);

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
