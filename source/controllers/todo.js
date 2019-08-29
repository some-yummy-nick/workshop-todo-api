import { Todo as TodoModel } from '../models';

export class Todo {
    constructor(data) {
        this.models = {
            todo: new TodoModel(data),
        };
    }
}
