import axios from 'axios'
var request = require('request').defaults({ encoding: null });

export const get = async () => {
    const url = 'https://api.jonathanczyzyk.com/api/v1/images/small';
    const headers = { 'x-api-key': "api-key-20b5ec06-2e0e-4978-b910-0fe9e6ee50fc" };

    const { data } = await axios.get(url, { headers: headers });

    data.map(x => {
        request.get(x.url, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                x.image = "data:" + response.headers["content-type"] + ";base64," + Buffer.from(body).toString('base64');
            }
        })
    });

    return data;
}