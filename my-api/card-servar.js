const express = require('express');
const cors = require('cors');
const cardData = require('./courseData');
const app = express();
const PORT = 5000;

app.use(cors());

// Existing endpoint to get a single language by ID
app.get('/api/languages/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const language = cardData.find(item => item.id === id);

    if (language) {
        res.json(language);
    } else {
        res.status(404).json({ message: 'Language not found' });
    }
});

// New endpoint to filter and search languages
app.get('/api/languages', (req, res) => {
    const { search, sort } = req.query; // Get search and sort parameters
    let filteredData = cardData;

    // Filter by search term if provided
    if (search) {
        const lowerCaseSearch = search.toLowerCase();
        filteredData = filteredData.filter(card =>
            card.title.toLowerCase().includes(lowerCaseSearch) ||
            card.framework.toLowerCase().includes(lowerCaseSearch)
        );
    }

    // Sort if sort parameter is provided
    if (sort === 'relevance') {
        filteredData.sort((a, b) => b.rating - a.rating); // Sort by rating
    } else if (sort === 'default') {
        filteredData.sort((a, b) => a.framework.localeCompare(b.framework)); // Sort by framework
    } else if (sort === 'date') {
        filteredData.sort((a, b) => a.title.localeCompare(b.title)); // Sort by title
    }

    res.json(filteredData); // Send filtered and sorted data
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
