const express = require('express');
const path = require('path');
var cors = require('cors');

const app = express();

app.use(cors())

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/api/buttons/:lang', (req, res) => {
    var lang = req.params.lang;

    var eng = {
        lightTitle: 'Light Mode',
        darkTitle: 'Dark Mode',
    }

    var cn = {
        lightTitle: '光模式',
        darkTitle: '夜模式',
    }

    lang == 'chinese' ? res.send(cn) : res.send(eng);
})

app.get('/api/aboutMe/:lang', (req,res) => {
    var lang = req.params.lang;
    var eng = {
        title: 'About Me',
        body: {
            title: "Hi, I'm Abby",
            content: "short bio about me"
        }
    };

    var cn = {
        title: '关于我',
        body: {
            title: '你好！我叫Abby',
            content: '段的信息关于我'
    }}
    lang == 'chinese' ? res.send(cn) : res.send(eng)
});

app.get('/api/education/:lang', (req, res) => {
    var lang = req.params.lang;
    var eng = {
        title: 'Education',
        body: [
            {title: 'University College London',
            date: 'Sept 2018 - Jun 2019',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {title: 'University College London',
            date: 'Sept 2018 - Jun 2019',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {title: 'University College London',
            date: 'Sept 2018 - Jun 2019',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        ]
    }
    var cn = {
        title: '教育',
        body: [
            {title: 'University College London',
            date: 'Sept 2018 - Jun 2019',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {title: 'University College London',
            date: 'Sept 2018 - Jun 2019',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {title: 'University College London',
            date: 'Sept 2018 - Jun 2019',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        ]
    }
    lang == 'chinese' ? res.send(cn) : res.send(eng);
})

app.get('/api/skills-legend/:lang', (req, res) => {
    var lang = req.params.lang;
    var eng = {
        title: 'legend (hover for details）',
        bubbleText: [
            '1: Hello World!',
            "2: I'm eager to learn",
           '3: I can make problems',
           "4: I'm confident with the basics",
           '5: I can solve problems',
           '6: People ask me to solve problems',
           '7: I can confidently teach others',
           '8: wizard',
           '9: ninja',
           "10: basically Tim Berners-Lee"
        ]
    };

    var cn = {
        title: '图例 (悬停鼠标为了看信息）',
        bubbleText: [
            '1: 你好世界!',
            "2: 我踊跃想学会",
           '3: 我可能造成问题',
           "4: 我有基础的知识",
           '5: 我有解决问题的能力',
           '6: 其他人问我解决问题',
           '7: 我会自信地教其他人',
           '8: 巫师',
           '9: 忍者',
           "10: 我叫 Tim Berners-Lee"
        ]
    };
    lang == 'chinese' ? res.send(cn) : res.send(eng);

})

app.get('/api/skills/:lang', (req, res) => {
    var lang = req.params.lang
    var eng = {
        title: 'Skills',
        skillsList: [
            {
                name: 'Javascript',
                score: 5
            },
            {
                name: 'HTML',
                score: 7
            },
            {
                name: 'CSS',
                score: 7
            }
        ]
    };

    var cn = {
        title: '实习',
        skillsList: eng.skillsList,
    }

    lang == 'chinese' ? res.send(cn) : res.send(eng);
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);