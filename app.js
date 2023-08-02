const axios = require('axios');

const apiKey = '435ded952cef475aab43e8fe874f77ae';
const apiUrl = 'http://newsapi.org/v2/top-headlines';
const country = 'us'; // Change this to your desired country code
const pageSize = 5;   // Number of news articles to fetch

const requestOptions = {
    params: {
        country,
        pageSize,
        apiKey,
    }
};

axios
    .get(apiUrl, requestOptions)
    .then(response => {
        const articles = response.data.articles;
        articles.forEach((article, index) => {
            console.log(`#${index + 1}`);
            console.log('Title:', article.title);
            console.log('Description:', article.description);
            console.log('URL:', article.url);
            console.log('Published At:', article.publishedAt);
            console.log('Source:', article.source.name);
            console.log('----------------------');
        });
    })
    .catch(error => {
        console.error('Error fetching news:', error.message);
    });