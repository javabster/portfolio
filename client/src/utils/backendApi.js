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

export const getButtonDetails = async (lang) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${baseURL}api/buttons/${lang}`
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