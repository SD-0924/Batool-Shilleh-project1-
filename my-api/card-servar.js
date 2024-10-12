const express = require('express');
const fs = require('fs');
const path = require('path');
const cardData = require('./courseData');
const app = express();
const PORT = 4000;

const cors = require('cors');
app.use(cors());

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

// POST to add a language ID to the favorites list
app.post('/api/favorites', (req, res) => {
    // Collect the raw data from the request
    let body = '';

    // Listen for data events to receive the body
    req.on('data', chunk => {
        body += chunk.toString(); // Convert Buffer to string and append
    });

    // Listen for the end event to know when all data has been received
    req.on('end', () => {
        try {
            const { id } = JSON.parse(body); // Parse the JSON body

            if (!id) {
                return res.status(400).json({ message: 'ID is required' });
            }

            // Define the path for the favlist.js file
            const favListPath = path.join(__dirname, 'favlist.js');

            // Read the existing favlist.js file or initialize an empty array if it doesn't exist
            let favList = [];

            // Check if the file exists
            if (fs.existsSync(favListPath)) {
                const data = fs.readFileSync(favListPath, 'utf-8');
                favList = JSON.parse(data); // Parse the existing favorites
            }

            // Add the new ID to the list if it's not already there
            if (!favList.includes(id)) {
                favList.push(id);
            }

            // Write the updated list back to favlist.js
            fs.writeFileSync(favListPath, JSON.stringify(favList, null, 2), 'utf-8');

            res.status(201).json({ message: 'ID added to favorites', favList });
        } catch (error) {
            // Handle any errors that occur during parsing
            res.status(400).json({ message: 'Invalid JSON format' });
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
