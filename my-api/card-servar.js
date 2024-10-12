const express = require('express');
const fs = require('fs'); // To work with the file system
const path = require('path'); // To handle file paths
const cardData = require('./courseData');
const favoritesData = require('./favlist');
const app = express();
const PORT = 5000;

const cors = require('cors');
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

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

// POST a language as favorite
app.post('/api/favorites/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const language = cardData.find(item => item.id === id);

    if (language) {
        const favorite = {
            framework: language.framework,
            image: language.image,
            rating: language.rating
        };

        favoritesData.push(favorite);
        // Write the updated favorites data to a file
        fs.writeFile(path.join(__dirname, 'favoritesData.js'), `module.exports = ${JSON.stringify(favoritesData, null, 2)};`, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error saving favorite language' });
            }
            res.status(201).json(favorite);
        });
    } else {
        res.status(404).json({ message: 'Language not found' });
    }
});

// GET all favorite languages
app.get('/api/favorites', (req, res) => {
    res.json(favoritesData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
