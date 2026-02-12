const express = require("express");
const methodOverride = require('method-override');
const dotenv = require("dotenv");
const database = require("./config/database");
const bodyParser = require('body-parser');
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');

dotenv.config();

database.connect();

const routeAdmin = require("./routes/admin/index.route");
const routeClient = require("./routes/client/index.route");


const app = express();
const port = process.env.PORT;

//flash 
app.use(cookieParser('QubbyucdbsQQJWJEN!3#'));
app.use(session({
  cookie: {
    maxAge: 60000
  }
}));
app.use(flash());
// end flash

app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);


app.use(express.static(`${__dirname}/public`));
app.use(methodOverride('_method'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

routeAdmin(app);
routeClient(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});