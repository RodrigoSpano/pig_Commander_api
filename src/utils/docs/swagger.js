const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'Back-end Documentation',
    version: '1.0.0', // version nuestra (se puede ir modificando a gusto)
  },
  servers: [
    {
      url: 'http://localhost:8080',
    },
  ],
  components: {
    schemas: {
      userLogin: {
        type: 'object',
        required: ['password', 'email'],
        properties: {
          password: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
        },
      },
      userSignup: {
        type: 'object',
        required: ['password', 'email', 'name', 'lastname', 'email'],
        properties: {
          name: {
            type: 'string'
          },
          lastname: {
            type: 'string'
          },
          email: {
            type: 'string'
          },
          password: {
            type: 'string',
          }
        },
      },
      methods: {
        type: 'object',
        required: ['id', 'name'],
        properties: {
          id: {
            type: 'number',
          },
          name: {
            type: 'string',
        },
      },},
      example: {
        type: 'object',
        required: ['id', 'mount', 'automatized', 'auto_date'],
        properties: {
          id: {
            type: 'string',
          },
          mount: {
            type: 'string',
          },
          automatized: {
            type: 'boolean',
          },
          auto_date: {
            type: 'string',
            format: 'date',
          },
        },
      },
    },
  },
};
const swaggerOptions = {
  swaggerDefinition,
  apis: ['./src/routes/subRoutes/*.js'], //! todos los archivos que terminan en ts
};

module.exports = swaggerJSDoc(swaggerOptions);
