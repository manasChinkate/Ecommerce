import { Express } from 'express';
import mongoose from 'mongoose';
import { FormData } from '../models/Checkout';

const app = express();
const PORT = 5173;

let password = "6x75FehSE1mX70DS"

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/E-Commerce.Checkout', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle form data submission
app.post('http://localhost:5173/api/formdata', async (req, res) => {
    try {
        const formData = req.body;
        // Create a new document with the form data
        const savedFormData = await FormData.create(formData);
        res.status(201).json(savedFormData);
    } catch (error) {
        console.error('Error saving form data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
