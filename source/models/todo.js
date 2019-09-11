// Instruments
import { todo } from '../odm';

export class Todo {
    constructor(data) {
        this.data = data;
    }

    _formatTodo(todo) {
        return {
            id:        todo._id,
            message:   todo.message,
            favorite:  todo.favorite,
            completed: todo.completed,
            created:   todo.created,
        };
    }

    async read() {
        const source = await todo.find({})
            .sort({ created: -1 });

        const data = source.map((todo) => this._formatTodo(todo));

        return data;
    }

    async create() {
        const source = await todo.create(this.data);

        const data = this._formatTodo(source);

        return data;
    }

    async update(id) {
        const update = {};
        const { message, favorite, completed } = this.data;

        if (this.data.hasOwnProperty('message')) {
            update.message = message;
        }

        if (this.data.hasOwnProperty('favorite')) {
            update.favorite = favorite;
        }

        if (this.data.hasOwnProperty('completed')) {
            update.completed = completed;
        }

        const source = await todo.findByIdAndUpdate(id, update, { new: true });

        const data = this._formatTodo(source);

        return data;
    }

    async remove(id) {
        const source = await todo.findByIdAndRemove(id);
        if (!source) {
            throw new Error(`todo with id ${id} not found`);
        }
        return `todo with id ${id} deleted`;

    }
}
