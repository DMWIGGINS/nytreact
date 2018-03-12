import axios from "axios";

// The getArticles method retrieves articles from the server
// It accepts a "query" or term to search the New York Times api for articles with the specified topic, start date and end date

export default {
  // gets the articles saved to the database
  getSavedArticles: function () {
    return axios.get("/api/articles");
  },
  // Deletes the article with the given id
  deleteArticle: function (id) {
    return axios.delete("/api/article/" + id);
  },
  // Saves an article to the database
  saveArticle: function (articleData) {
    return axios.post("/api/article", articleData);
  },
  // gets the queried articles from the New York Times api
  getArticles: function (query) {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json" + '?' + $.param({

        'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
        'q': req.params.topic,
        'begin_date': req.params.startDate,
        'end_date': req.params.endDate,
        'fl': "web_url,headline,pub_date"
      })
      .then(({
        data: {
          results
        }
      }) => res.json(results))
      .catch(err => res.status(422).json(err)))
    console.log(results);
  }
};