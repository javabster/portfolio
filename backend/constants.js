const educationList = [
{
    title: 'University College London (BASc Final Year)',
    date: 'Sept 2018 - Jun 2019',
    content: 'Studied BASc: Arts and Sciences. Arts and Sciences is an interdisciplinary degree course including a wide variety of modules across different departments. \n\nMajor: Sciences and Engineering \nMinor: Societies \nLanguage: Mandarin \n\nFinal Grade; 77% (First Class Honours) \n\nFinal Year Dissertation: The Safer Heritage App - Can Web Development Techniques Assist in the Implementation and Adoption of Heritage Crime Mitigatin Procedures'
},
{
    title: 'Shanghai Jiao Tong University (Study Abroad Year)',
    date: 'Sept 2017 - July 2018',
    content: 'Year abroad exchange as part of UCL BASc: Arts and Sciences degree program. \nHSK4-5 level Intensive Mandarin course'
},
{
    title: 'University College London (BASc First 2 Years)',
    date: 'Sept 2015 - Jun 2017',
    content: 'Studied BASc: Arts and Sciences. Arts and Sciences is an interdisciplinary degree course including a wide variety of modules across different departments. \n\nMajor: Sciences and Engineering \nMinor: Societies \nLanguage: Mandarin'
},
{
    title: 'Beaconsfield High School',
    date: 'Sept 2008 - JuLy 2015',
    content: 'A Level and GCSE qualifications: \n\nA2 Levels:\nChemistry (A*)\nMaths (A)\nHistory (A)\n\nAS Levels: \nChemistry (A)\nMaths (A)\nHistory (A)\nSpanish (A) \n\nGCSEs: 9A*s, 2As'
},
]

const workList = [
    {
        title: 'IBM - Application Developer',
        date: 'Sept 2019 - ',
        content: 'As an Application Developer at IBM CIO London Continuously iterate and develop new features as part of an Agile development team, levereging cutting edge technologies and frameworks, including \bIBM Cloud, \bReact, \bCarbon, \bTravis (Ci/CD) \bWeb \bSockets etc.'
        + 'I also ensure applications are thoroughly tested and work towards increasing resiliency, using a combination \bTDD, \bDB2 high availability database, \bKubernetes and \bOpenShift'
        + 'In also helped found and currently lead a local internal Women in Technology group (events every quarter, online content, review hiring processes etc.)'
    },
    {
        title: 'Repositive - Intern Developer (full time)',
        date: 'July - Sept 2018',
        content: 'Repositive is a startup building online platforms to enable researchers to get better and more efficient access'
        + 'to genomic data. My role as an intern was to manipulate data stored in a \bPostgreSQL database, create visualisations using'
        + ' \bHTML and \bJavascript and integrate into dashboarding software that updates in real time. I collaborated across design, data, '
        + 'development and senior management teams to determine reporting specifications. I also worked on various frontend tasks for the main '
        + 'platform, using \bEmber and \bTypescript, to complete tasks ranging from debugging, to re-structuring error handling to implementing flash messages on 15+ events across the platform.'
    },
    {
        title: 'Fey.org - Intern Developer (part time)',
        date: 'Feb - Jun 2018',
        content: 'Feiy is a Shanghai based startup creating a platform to enable people to discover and support a range of local social entrepreneurship'
        + ' organisations. As an Intern I designed and built a \bWeChat mini program to help Feiy supporters. I built the mini program using \bJavascript, \bWeChat mobile features and a \bLeanCloud database.'
        + ' I communicated with CEO on mini program design specification, UX/UI, as well as advised on potential improvements to the main organisation online platform.'
        + ' Interning in China meant I had to overcame difficulties without English documentation or support forums for Chinese software'
    },
    {
        title: 'Write Rhythm - Intern Mobile Developer (part time)',
        date: 'Sept - Dec 2017',
        content: 'Write Rhythm is a startup dedicated to connecting music labels with new artists. I worked with the CTO to develop my skills in \bJavascript,'
        + ' \bHTML, \bCSS, \bReact framework, \bmySQL and \bgit.'
    },

    ]

const skillsList = [
    {
        name: 'Javascript',
        score: 6
    },
    {
        name: 'Python',
        score: 5
    },
    {
        name: 'Node.js',
        score: 6
    },
    {
        name: 'Typescript',
        score: 3
    },
    {
        name: 'HTML',
        score: 7
    },
    {
        name: 'CSS',
        score: 7
    },
    {
        name: 'Sass',
        score: 5
    },
    {
        name: 'React',
        score: 7
    },
    {
        name: 'Ember',
        score: 3
    },
    {
        name: 'React Styled Components',
        score: 5
    },
    {
        name: 'Mocha/Chai',
        score: 5
    },
    {
        name: 'Jest',
        score: 3
    },
    {
        name: 'React Testing Library',
        score: 6
    },
    {
        name: 'Travis (CI/CD Pipeline)',
        score: 6
    },
    {
        name: 'Git (GitHub)',
        score: 8
    },
    {
        name: 'REST APIs',
        score: 6
    },
    {
        name: 'OpenAPI (Swagger.js)',
        score: 5
    },
    {
        name: 'IAM Authentication',
        score: 4
    },
    {
        name: 'Firebase (database)',
        score: 5
    },
    {
        name: 'DB2 (database',
        score: 4
    },
    {
        name: 'SQL',
        score: 4
    },
    {
        name: 'PostgreSQL',
        score: 3
    },
    {
        name: 'IBM Cloud',
        score: 4
    },
    {
        name: 'AWS',
        score: 3
    },
    {
        name: 'Kubernetes',
        score: 3
    },
    {
        name: 'Docker',
        score: 3
    },
    {
        name: 'WebSockets',
        score: 3
    },
    {
        name: 'Mobile Development (android/ios)',
        score: 5
    },
    {
        name: 'Flutter',
        score: 5
    },
    {
        name: 'WeChart Mini Programs',
        score: 5
    },
    {
        name: 'Sketch',
        score: 6
    },
    {
        name: 'Agile Methodology',
        score: 6
    },
    {
        name: 'Jira',
        score: 5
    },
]

module.exports = [educationList, skillsList, workList];