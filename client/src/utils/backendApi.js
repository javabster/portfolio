const axios = require('axios');

const baseURL = 'http://localhost:5000/';

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

export const getSkills = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: `${baseURL}api/skills`,
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

export const getTitles = async (lang) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${baseURL}api/titles/${lang}`
        });
        if(response.data) {
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
        if(response.data) {
            return response.data
        }
        return []
    }
    catch (err) {
        console.log(err.message)
    }
}
