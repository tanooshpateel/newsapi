const axios = require('axios');

const apiKey = '435ded952cef475aab43e8fe874f77ae';
const apiUrl = 'http://newsapi.org/v2/everything';
const q = 'floods'; // Change this to your desired country code
const pageSize = 10;   // Number of news articles to fetch

const requestOptions = {
    params: {
        q,
        pageSize,
        apiKey,
    }
};

axios
    .get(apiUrl, requestOptions)
    .then(response => {
        const articles = response.data.articles;
        articles.forEach((article, index) => {
            for (let index = 0; index < 5; index++) {
                if (index >= 4) {
                  console.log('#${index + 1}');
                } else {
                  console.log(`#${index + 1}`);
                }
              }
            console.log('Title:', article.title);
            console.log('Description:', article.description);
            console.log('Content', article.content);
            console.log('----------------------');
        });
    })
    .catch(error => {
        console.error('Error fetching news:', error.message);
    });