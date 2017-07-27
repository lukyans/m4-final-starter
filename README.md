# URLockBox

The URLockbox is the project where you can create an account and create a list of your favorite URL's

## Production website

[http://agile-basin-29918.herokuapp.com/]

#### Setup

1. Clone down this repo:

`https://github.com/lukyans/m4-final-starter`

2. Select folder

`$ cd /m4-final-starter`

3. Install gems

`$ bundle install`

4. Create and migrate database

`$ rake db:create`
`$ rake db:migrate`

5. In the file `$ app/javascripts/mark_read.js` and `$ app/javascripts/mark_unread.js` change production url links https://hot-reads-sl.herokuapp.com/api/v1/links to the localhost links http://localhost:3000/api/v1/links

6. Start local server

`$ rails server`

7. In you browser visit this page

`http://localhost:3000`
