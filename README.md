# Burger
NU Bootcamp ORM assignment for week 14 using node, MySQL, and handlebars

File Structure

CONFIG
-- connection.js sets up the connection using JAWSDB
-- orm.js uses the helper functions 'printQuestionMarks' to convert arrays of separate strings to single strings to pass to our MySQL commands and 'objToSql' to convert key/value pairs to SQL syntax, and the ORM creates our CRUD operations that our model will use to export to the controller (router).

CONTROLLERS
- burgers_controller.js is our router. It requires our burger.js model file and creates the GET, POST, and PUT routes for the server.js file to use.

DB
- our SCHEMA and SEEDS files.

MODELS
- burger.js requires our ORM mapper and sends the CRUD object to the controller.

PUBLIC
- CSS and IMG files currently empty
- burgers.js is our event handler, capturing the button clicks and form submissions.

VIEWS
- LAYOUTS holds our main.handlebars page, which uses the index file.
- PARTIALS/BURGERS holds the burger-block handlebars file, which mainly handles the toggling functions and the resulting changes to the buttons.
- index.handlebars is our main DOM page.

server.js 
- sets up our express, bodyParser, handlebars dependencies, requires the controller, and starts the listener.
