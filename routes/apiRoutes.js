const axios = require("axios");
const router = require("express").Router();

var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";


//  fl = web_url, headline, pub_date
// begin_date YYYYMMDD
// end_date YYYYMMDD

router.get("/articles", (req, res) => {
    axios
        .get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=", {
            params: req.query
        })
        .then(({
            data: {
                results
            }
        }) => res.json(results))
        .catch(err => res.status(422).json(err));
});
module.exports = router;

// request.get({
//     url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//     qs: {
//       'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
//       'q': "heat",
//       'begin_date': "20150701",
//       'end_date': "20150731",
//       'sort': "newest",
//       'fl': "web_url, headline, pub_date"
//     },
//   }, function(err, response, body) {
//     body = JSON.parse(body);
//     console.log(body);
//   })