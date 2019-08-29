// Instruments
import { Todo } from '../../controllers';

export const get = (req, res) => {
    try {
        res.status(200).json({ message: 'Welcome to workshop!' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
