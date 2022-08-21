require('dotenv').config();
const express = require('express');
var cors = require('cors');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
const { parse } = require('rss-to-json');
const { json } = require('body-parser');

// content:
const [educationList, skillsList, workList] = require('./constants');
const talks = require('./content/talks')
const extraBlogs = require('./content/extraBlogs')

const rssURL = 'https://medium.com/feed/@abby-mitchell'

const app = express();

app.use(cors());

// extract the entire body portion of an incoming request stream and exposes it on req. body
app.use(bodyParser.json())


app.get('/', function(req, res) {
    console.log('default api route')
  });

var transport = {
    host: 'mail.btinternet.com',
    port: 587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

app.post('/api/feedback', (req, res) => {
    var rating = req.body.score;
    var message = req.body.comments;
    var content = `star rating: ${rating}/5 \n comments:\n${message}`

    var mail = {
        from: 'anonymous',
        to: process.env.EMAIL,
        subject: 'New Feedback from Portfolio',
        text: content
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.json({
            status: 'fail'
          })
        } else {
          res.json({
           status: 'success'
          })
        }
      })
})

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
            content: "I am an interdisciplinary individual. I achieved a First Class Honours degree in Arts and Sciences from University College London. While studying I undertook numerous self-learning activities to develop skills in web development. Upon graduating I started working as a Full Stack Web Developer at IBM. One of my passions outside of web development include working to encourage women and girls to enter the technology industry."
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
        body: educationList
    }
    var cn = {
        title: '教育',
        body: [
            {title: '伦敦大学学院 - 最后年',
            date: '九月 2018 - 六月 2019',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {title: '上海交通大学 - 留学生',
            date: '九月 2017 - 七月 2018',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {title: '伦敦大学学院 - 第一个和第二个年',
            date: '九月 2015 - 六月 2017',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {title: 'Beaconsfield 高级中学',
            date: '2008 - 2015',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        ]
    }
    lang == 'chinese' ? res.send(cn) : res.send(eng);
})

app.get('/api/work-exp/:lang', (req, res) => {
    var lang = req.params.lang;
    var eng = {
        title: 'Work Experience',
        body: workList
    }
    var cn = {
        title: '工作经验',
        body: [
            {title: '国际商业机器的电脑业者',
            date: '九月 2019 - ',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {title: 'Repositive 的电脑业者实习',
            date: '七月 - 九月 2018',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {title: 'Fey.org 的手机电脑业者实习（兼职）',
            date: '九月  - 六月 2018',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {title: 'Mandala Group 的手机电脑业者实习（兼职）',
            date: '九月 - 十二月 2017',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
        },
        {title: 'Write Rhythm 的电脑业者实习（兼职）',
            date: '七月 - 八月 2017',
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
           "3: I've used it a few times",
           "4: I'm comfortable with the basics",
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
           '3: 我用了一点',
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
        skillsList: skillsList
    };

    var cn = {
        title: '实习',
        skillsList: eng.skillsList,
    }

    lang == 'chinese' ? res.send(cn) : res.send(eng);
})

app.get('/api/talks', async (req, res) => {
    res.send(talks)
})

app.get('/api/blogs', async (req, res) => {
    let allBlogs
    try {
        blogs = await parse(rssURL)

        if (blogs) {
            blogItems = blogs.items.map(obj => {
                // fix buggy title
                if (obj.title == '⟨∈||0⟩†|*⟩?') {
                    return {...obj, 
                        title: '⟨𝑎𝑟∈|𝑌|0⟩𝑈†|𝑐𝑜𝑛𝜓𝑢𝑠𝑒𝑑*⟩? — A Beginner’s Guide to Quantum Computing Literature & Notation', 
                        type: "author"
                    }
                }
                return {...obj, type: "author"}
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

    const sortedBlogs = allBlogs.sort(function(a,b){
        return b.published - a.published;
      });

    res.send(sortedBlogs)
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);