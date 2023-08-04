const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const apiKey = '435ded952cef475aab43e8fe874f77ae';
const apiUrl = 'http://newsapi.org/v2/top-headlines';
const country = 'us'; // Change this to your desired country code
const pageSize = 10;   // Number of news articles to fetch

// Function to fetch news articles based on category
const fetchNewsByCategory = (category) => {
    const requestOptions = {
        params: {
            country,
            category, // Add the category parameter to the API request
            pageSize,
            apiKey,
        }
    };
    return axios.get(apiUrl, requestOptions);
};

// Configure EJS as the view engine
app.set('view engine', 'ejs');

// Route for top headlines (Default page)
app.get('/', (req, res) => {
    fetchNewsByCategory('general')
        .then(response => {
            const articles = response.data.articles;
            res.render('news', { articles, title: 'General' });
        })
        .catch(error => {
            console.error('Error fetching top headlines:', error.message);
            res.render('error', { title: 'Error' });
        });
});

// Route to fetch business news and render it using EJS
app.get('/business', (req, res) => {
    fetchNewsByCategory('business')
        .then(response => {
            const articles = response.data.articles;
            res.render('news', { articles, title: 'Business News Headlines' });
        })
        .catch(error => {
            console.error('Error fetching business news:', error.message);
            res.render('error', { title: 'Error' });
        });
});

// Route to fetch sports news and render it using EJS
app.get('/sports', (req, res) => {
    fetchNewsByCategory('sports')
        .then(response => {
            const articles = response.data.articles;
            res.render('news', { articles, title: 'Sports News Headlines' });
        })
        .catch(error => {
            console.error('Error fetching sports news:', error.message);
            res.render('error', { title: 'Error' });
        });
});

// Route to fetch entertainment news and render it using EJS
app.get('/entertainment', (req, res) => {
    fetchNewsByCategory('entertainment')
        .then(response => {
            const articles = response.data.articles;
            res.render('news', { articles, title: 'Entertainment News Headlines' });
        })
        .catch(error => {
            console.error('Error fetching entertainment news:', error.message);
            res.render('error', { title: 'Error' });
        });
});

// Route to fetch technology news and render it using EJS
app.get('/technology', (req, res) => {
    fetchNewsByCategory('technology')
        .then(response => {
            const articles = response.data.articles;
            res.render('news', { articles, title: 'Technology News Headlines' });
        })
        .catch(error => {
            console.error('Error fetching technology news:', error.message);
            res.render('error', { title: 'Error' });
        });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
