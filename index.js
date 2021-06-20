const express = require('express')
const app = express()
const port = 3000
 
const axios = require('axios');
const cheerio = require('cheerio');
var id = [];
const findbrod = async (p) => {
    try {
        const { data } = await axios.get(
            'https://www.shopdisney.co.uk/search?q=$p'
        );
        const $ = cheerio.load(data);
        var prod = []; 
        var a = $('.catlisting__product-grid')
        $('.catlisting__product-grid').each((i, el) => {
            var a = $('.catlisting__product-grid')
            const t = $(el)
                .find('.row');
            // console.log(title); 
            const tt = $(el)
                .find('.catlisting__productinfo').data('analytics-id');;
            console.log(tt);
            id.push(tt);
            console.log(id); 
            // console.log($(el).find('.product__linkcontainer').text().trim().replace(/\s\s+/g, '\n'));
            const title = $(el)
                .find('.row')
                .text()
                .replace(/\s\s+/g, ' ');
            // console.log(title);
            prod.push(title);
            prod.push(title.split(" ")); 

        });

        return prod;
    } catch (error) {
        throw error;
    }
};

findbrod('mona').then((prod) => console.log(prod)); 









const addtocard = async (id) => {
    try {
        axios.get(
            ' https://www.shopdisney.co.uk/on/demandware.store/Sites-disneyuk-Site/en_GB/Product-AddedToCart?pid=$id'
        ).then((response) => {
            console.log(response);
        });
    } catch (e) {
        console.log(e)
    }
}

console.log(id[0])








app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})