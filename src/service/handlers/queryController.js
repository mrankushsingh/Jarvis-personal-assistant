const axios = require('axios');
const cheerio = require('cheerio');
const request = require('request');
const SCRAPING_URL = 'https://www.google.com/search?q=delhi';

class QueryController {
  HandleGoogleQuery(query) {
    return axios.get(SCRAPING_URL);
    // .then((res) => {
    //   return results;
    //   return new Promise((resolve) => {
    //     console.log('I am hereeeeeee');
    //     const results = [];
    //     res = res.data;
    //     if (res) {
    //       const $ = cheerio.load(res);
    //     //   console.log('$ loaded:: ', $);
    //       $('.BNeawe.vvjwJb.AP7Wnd').each(function() {
    //         const details = new Object();
    //         details.title = $(this).text();
    //         // console.log('details:: ', details);
    //         results.push(details);
    //       });
    //     }
    //     resolve(results);
    //   });
    // })
    // .catch((err) => console.log(err));
  }
}

module.exports = { QueryController };