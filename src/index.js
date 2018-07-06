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
                    .goto('https://www.olx.ua/obyavlenie/televizor-samsung-24-dyuyma-samsung-15-17-9-22-32-40-full-hd-t2-IDkL3k.html#cc5c316dc0;promoted')
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
