const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const apiKey = '435ded952cef475aab43e8fe874f77ae';
const apiUrl = 'http://newsapi.org/v2/top-headlines';
const country = 'us'; // Change this to your desired country code
const pageSize = 10;   // Number of news articles to fetch

const requestOptions = {
    params: {
        country,
        pageSize,
        apiKey,
    }
};

// Configure EJS as the view engine
app.set('view engine', 'ejs');

// Route to fetch news and render it using EJS
app.get('/', (req, res) => {
    axios.get(apiUrl, requestOptions)
        .then(response => {
            const articles = response.data.articles;
            res.render('news', { articles, title: 'News Headlines' });
        })
        .catch(error => {
            console.error('Error fetching news:', error.message);
            res.render('error', { title: 'Error' });
        });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
