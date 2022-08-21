const axios = require('axios');

// for running locally:
// const baseURL = 'http://localhost:5000/';

// for production:
const baseURL = 'https://javabster-portfolio-backend.herokuapp.com/';

export const getAboutMe = async (lang) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${baseURL}api/aboutMe/${lang}`,
        });
        if (response.data) {
            return response.data
        }
        return []
    }
    catch (err) {
        console.log(err.message)
    }
}

export const getSkills = async (lang) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${baseURL}api/skills/${lang}`,
        });
        if (response.data) {
            return response.data
        }
        return []
    }
    catch (err) {
        console.log(err.message)
    }
}

export const getLegend = async (lang) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${baseURL}api/skills-legend/${lang}`
        });
        if (response.data) {
            return response.data
        }
        return []
    }
    catch (err) {
        console.log(err.message)
    }
}

export const getEducation = async (lang) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${baseURL}api/education/${lang}`
        });
        if (response.data) {
            return response.data
        }
        return []
    }
    catch (err) {
        console.log(err.message)
    }
}

export const getWork = async (lang) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${baseURL}api/work-exp/${lang}`
        });
        if (response.data) {
            return response.data
        }
        return []
    }
    catch (err) {
        console.log(err.message)
    }
}

export const getTalks = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: `${baseURL}api/talks`
        });
        console.log(response)
        if (response.data) {
            return response.data
        }
        return []
    }
    catch (err) {
        console.log(err.message)
    }
}

export const getData = async (type) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${baseURL}api/${type}`
        });
        console.log(response)
        if (response.data) {
            return response.data
        }
        return []
    }
    catch (err) {
        console.log(err.message)
    }
}

export const getButtonDetails = async (lang) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${baseURL}api/buttons/${lang}`
        });
        if (response.data) {
            return response.data
        }
        return []
    }
    catch (err) {
        console.log(err.message)
    }
}

export const sendFeedback = async (feedback) => {
    try {
        const response = await axios({
            method: 'post',
            url: `${baseURL}api/feedback`,
            data: feedback
        });
        if (response.data) {
            return response.data
        }
        return []
    }
    catch (err) {
        console.log(err.message)
    }
}
