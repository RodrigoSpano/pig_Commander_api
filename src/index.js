require('dotenv/config');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const passport = require('passport');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const session = require('express-session');

const swaggerSetup = require('./utils/docs/swagger');
const indexRouter = require('./routes/index.routes');
const JWTstrategy = require('./services/passport/passportJwt');
const GoogleStrategy = require('./services/passport/passportGoogle');

const app = express();

app.use(
  session({
    secret: `${process.env.SESSION_SECRET}`,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

app.use('/api/documentation', swaggerUi.serve, swaggerUi.setup(swaggerSetup));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(passport.session());
app.use(passport.initialize());
passport.use(JWTstrategy);
passport.use(GoogleStrategy);

app.use('/api', indexRouter);
module.exports = app;
