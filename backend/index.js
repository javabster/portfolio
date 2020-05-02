const express = require('express');
const path = require('path');
var cors = require('cors');

const app = express();

app.use(cors())

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/api/aboutMe/:lang', (req,res) => {
    var lang = req.params.lang;
    var eng = {
        title: 'About Me',
        body: 'short bio about me'
    };

    var cn = {
        title: '关于我',
        body: '段的信息关于我'
    }
    lang == 'chinese' ? res.send(cn) : res.send(eng)
});

app.get('/api/titles/:lang', (req, res) => {
    var lang = req.params.lang;
    var eng = {
        lightMode: 'Light Mode',
        darkMode: 'Dark Mode',
        skillLegend: 'legend (hover for details）',
        skills: 'Skills',
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
        lightMode: '光模式',
        darkMode: '夜模式',
        skillLegend: '图例 (悬停鼠标为了看信息）',
        skills: '实习',
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
        body: '教育的事情'
    }
    lang == 'chinese' ? res.send(cn) : res.send(eng);
})

app.get('/api/skills', (req, res) => {
    var skills = [
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

    return res.send(skills);
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);