const express = require('express');
const fs = require('fs');
const cors = require('cors');
const cardData = require('./courseData');
const app = express();
const PORT = 2000;

app.use(cors());
app.use(express.json()); 

// GET a language by ID
app.get('/api/languages/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const language = cardData.find(item => item.id === id);

    if (language) {
        res.json(language);
    } else {
        res.status(404).json({ message: 'Language not found' });
    }
});

// GET all languages
app.get('/api/languages', (req, res) => {
    res.json(cardData);
});

// POST to store a favorite
app.post('/api/favorites', (req, res) => {
    const favorite = req.body;

    fs.readFile('favorites.js', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server Error');
        }

        let favorites = [];
        if (data) {
            favorites = JSON.parse(data);
        }

        favorites.push(favorite);

        fs.writeFile('favorites.js', JSON.stringify(favorites, null, 2), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Failed to save favorite');
            }

            res.status(201).json(favorite);
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
