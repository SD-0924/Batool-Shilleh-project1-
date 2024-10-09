// server.js
const express = require('express');
const cardData = require('./courseData');
const app = express();
const PORT = 4000;

// Endpoint لجلب معلومات اللغة حسب ID
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
// تشغيل السيرفر
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
