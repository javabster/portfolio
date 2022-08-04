# My Portfolio!

A place for me to put some details about myself and a side project for me to work on to keep my web dev skills sharp.


## To run locally

1. in `client/src/utils/backendApi.js` uncomment the localhost line for the baseUrl
2. open 2 terminals
3. in one terminal cd into backend and run `npm run start`
4. in other terminal cd into client and run `npm run start`

Note: for Mac OSX Monterey disable Airplay Receiver in System Preference > Sharing, as it runs on port 5000 and blocks the backend node app


## Deployment

### client - deployed via github pages

manual deploy from local machine:
- `npm run build` to create build folder before deployment
- `npm run deploy` to push latest website version to `gh-pages` branch
- repo setup to build gh pages from `gh-pages` branch (specified in repo settings)

automated deploy when push to `main` branch:
- does the above steps but handled by github action `deploy frontend` step

### backend - deployed via heroku
- github actions `deploy backend` job
- deploys to `javabster-portfolio-backend` app in heroku (app url: https://javabster-portfolio-backend.herokuapp.com/)