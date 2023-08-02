require('dotenv/config');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSetup = require('./utils/docs/swagger');
const indexRouter = require('./routes/index.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

app.use('/api/documentation', swaggerUi.serve, swaggerUi.setup(swaggerSetup));
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(indexRouter);
module.exports = app;