# react-redux-laravel-soup

Intention behind this repo is to jump start with developing single page applications using laravel as backend and react-redux and redux-sagas in frontend.


# Soup webapp

## Setting up the repository

- Clone the repository.
- `cd` to webapp directory.
- Assuming that npm and nodejs is installed, run "npm install -g yarn"
- Run `yarn install` to install the dependencies.
- Run `npm start` to run the dev server.

## To run the app via laravel

- Inside webapp directory, run `npm run build`, theis will create a production build for webapp and place the `bundle.js` inside laravel applications public folder.
- `cd` to server directory.
- run `php artisan serve`
- And your laravel application now hosts reactJS application.

## DevTools

####The following chrome plugins will come handy in development.
- [React Detector](https://chrome.google.com/webstore/detail/react-detector/jaaklebbenondhkanegppccanebkdjlh)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
