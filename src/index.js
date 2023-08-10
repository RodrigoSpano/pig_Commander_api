require('dotenv/config');
const express = require('express');
const helmet = require('helmet');
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

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(morgan('dev'));
app.use(helmet());

app.use('/api/documentation', swaggerUi.serve, swaggerUi.setup(swaggerSetup));
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(passport.session());
app.use(passport.initialize());
passport.use(JWTstrategy);
passport.use(GoogleStrategy);

app.use('/api', indexRouter);
module.exports = app;
