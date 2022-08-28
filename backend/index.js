require('dotenv').config();
const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const { parse } = require('rss-to-json');

// content:
const talks = require('./content/talks')
const extraBlogs = require('./content/extraBlogs')
const aboutContent = require('./content/about.json')

const rssURL = 'https://medium.com/feed/@abby-mitchell'

const app = express();

app.use(cors());

// extract the entire body portion of an incoming request stream and exposes it on req. body
app.use(bodyParser.json())


app.get('/', function (req, res) {
    console.log('default api route')
});

app.get('/api/about', (req, res) => {
    res.send(aboutContent)
});

app.get('/api/talks', async (req, res) => {
    const sortedTalks = talks.sort(function (a, b) {
        return b.published - a.published;
    });
    res.send(sortedTalks)
})

app.get('/api/blogs', async (req, res) => {
    let allBlogs
    try {
        blogs = await parse(rssURL)

        if (blogs) {
            blogItems = blogs.items.map(obj => {
                // fix buggy title
                if (obj.title == '⟨∈||0⟩†|*⟩?') {
                    return {
                        ...obj,
                        title: '⟨𝑎𝑟∈|𝑌|0⟩𝑈†|𝑐𝑜𝑛𝜓𝑢𝑠𝑒𝑑*⟩? — A Beginner’s Guide to Quantum Computing Literature & Notation',
                        type: "author"
                    }
                }
                return { ...obj, type: "author" }
            })

            allBlogs = [
                ...blogItems,
                ...extraBlogs
            ]
        }
    }
    catch (err) {
        console.log(err.message)
    }

    const sortedBlogs = allBlogs.sort(function (a, b) {
        return b.published - a.published;
    });

    res.send(sortedBlogs)
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

// Export the Express API for vercel serverless function
module.exports = app;