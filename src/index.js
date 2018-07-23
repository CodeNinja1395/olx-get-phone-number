'use strict';
const nightmare = require('nightmare')();
module.exports = function (app) {
    app.get(`/olxPhone`, (req, res) => 
        nightmare
            .goto(req._parsedUrl.query)
            .wait(100)
            .click('li > div[data-rel="phone"]')
            .wait(280)
            .evaluate(() => {
                return document.querySelector('div[data-rel="phone"] > strong.xx-large').textContent;
            })
            .end()
            .then((data) => {
                console.log('1');
                res.send(JSON.stringify({
                    phone: data
                }));
            })   
            .catch((err) => {
                console.log('0');
                
                res.send(err);
            });                                                        

    });
};
