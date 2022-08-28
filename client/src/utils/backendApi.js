const axios = require('axios');

// for running locally:
const baseURL = 'http://localhost:5000/';

// for production:
// const baseURL = 'https://javabster-portfolio-backend.herokuapp.com/';

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
