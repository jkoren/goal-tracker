
## GOAL-TRACKER

Goal-Tracker is a responsive web application to help people accomplish change and progression in their life by achieving goals. 

Goal-Tracker's front-end is built with JavaScript and React, and the back end is Rails, Ruby and PostgreSQL.  We used Devise for Authentication and Authorization.

[See the deployed application on Heroku](https://tbd.com/)

## Screen shot
# ![SCREENSHOT](app/assets/images/screenshot-placeholder.jpeg)

## Developers
- Ted Francis
- Jeff Korenstein
- Mark Longchamps

## Built with
- [Ruby on Rails](https://guides.rubyonrails.org/v5.2/)
- [React.js](https://reactjs.org/docs/getting-started.html)
- [PostgreSQL](https://www.postgresql.org/docs/13/index.html)
- [Foundation](https://get.foundation/)

## Run Locally
The setup steps expect the following tools/versions:
- Ruby 2.7.1
- Rails 5.2.3
- PostgreSQL 13

###### Clone the Repo
```
git clone 
```
###### Install Dependencies
```
yarn install 
bundle install 
```

###### Create and seed the database
```
bundle exec rake db: migrate
bundle exec rake db: seed
```

###### Run the test suite
```
bundle exec rspec
```
###### Start the Rails server and webpack-dev-server
```
bundle exec rails s
yarn run start
```

###### The application can be accessed locally at <http://localhost:3000>

