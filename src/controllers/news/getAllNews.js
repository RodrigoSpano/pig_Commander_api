const axios = require('axios');

const getAllNews = async (req, res) => {
  try {
    const { data } = await axios(
        `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=${process.env.NEWS_KEY}`
    );

    if (!data) {
      res.status(404).json({ error: 'News not found!' });
      return;
    }

    const newsClean = data.feed.map((news) => ({
      date: news.time_published,
      tittle: news.tittle,
      summary: news.summary,
      author: news.authors[0],
      url: news.url,
      image: news.banner_image,
      topics: news.topics.map((topic) => topic.topic),
    }));

    if (newsClean.length === 0) {
      res.status(404).json({ error: 'News not found!' });
      return;
    }

    res.status(200).json(newsClean);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllNews;
