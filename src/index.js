'use strict';
const Chromeless  = require('chromeless').default;
module.exports = function (app) {
    app.get(`/olxPhone`, async (req, res) => {
        const chromeless = new Chromeless({
                remote: {
                    endpointUrl: 'https://8xziiescfe.execute-api.us-east-1.amazonaws.com/dev/',
                    apiKey: 'h1xms7s5P35qLMfhHNxPO11CpQyxVOaSa3OttC6t',
                },
                scrollBeforeClick: true,
                implicitWait: true
        });
            try {
                const phone = await chromeless
                    .goto(req._parsedUrl.query)
                    .wait(50)
                    .click('li > div[data-rel="phone"]')
                    .wait(300)
                    .evaluate(() => {
                        return document.querySelector('div[data-rel="phone"] > strong.xx-large').textContent;
                    });
        
                res.send(phone);
            } catch (err) {
                res.send(err)
            }
                   
            await chromeless.end();
                                     
    });
};
