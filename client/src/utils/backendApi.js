const axios = require('axios');

const baseURL = 'http://localhost:5000/';

export const getAboutMe = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: `${baseURL}api/aboutMe`,
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

export function getEducation() {};
// function getSkills() {};
// function getExperience() {};

// module.exports = getAboutMe()
    // getEducation,
    // getSkills,
    // getExperience