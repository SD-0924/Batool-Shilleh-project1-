const express = require('express');
const cors = require('cors'); // Import the CORS module
const cardData = require('./courseData');
const app = express();
const PORT = 4000;

// Enable CORS for all routes
app.use(cors());

app.get('/api/languages/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const language = cardData.find(item => item.id === id);

    if (language) {
        res.json(language);
    } else {
        res.status(404).json({ message: 'Language not found' });
    }
});

app.get('/api/languages', (req, res) => {
    res.json(cardData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
