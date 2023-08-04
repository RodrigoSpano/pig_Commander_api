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
            type: 'string',
          },
          lastname: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          password: {
            type: 'string',
          },
        },
      },
      user: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          lastname: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          image: {
            type: 'string',
          },
          premium: {
            type: 'boolean',
          },
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
        },
      },
      savings: {
        type: 'object',
        required: ['id', 'name', 'mount', 'goal', 'createdAt', 'updatedAt'],
        properties: {
          id: {
            type: 'number',
          },
          name: {
            type: 'string',
          },
          mount: {
            type: 'number',
          },
          goal: {
            type: 'number',
          },
          createdAt: {
            type: 'string',
          },
          updatedAt: {
            type: 'string',
          },
        },
      },
      inversions: {
        type: 'object',
        required: ['id','mount', 'earning', 'started_on', 'finish_at'],
        properties: {
          id: {
            type: 'number',
          },
          started_on: {
            type: 'string',
          },
          finish_at: {
            type: 'string',
          },
          mount: {
            type: 'number',
          },
          earning: {
            type: 'number',
          },
          user_id: {
            type: 'string',
          },
        },
      },
      savingPost: {
        type: 'object',
        required: ['name', 'mount', 'goal'],
        properties: {
          name: {
            type: 'string',
          },
          mount: {
            type: 'number',
          },
          goal: {
            type: 'number',
          },
        },
      },
      inversionPost: {
        type: 'object',
        required: ['mount', 'earning','started_on', 'finish_at', 'user_id'],
        properties: {
          mount: {
            type: 'number',
          },
          earning: {
            type: 'number',
          },
          started_on: {
            type: 'string',
          },
          finish_at: {
            type: 'string',
          },
          user_id: {
            type: 'string',
          },

        },
      },
      savingPut: {
        type: 'object',
        required: ['mount', 'goal'],
        properties: {
          mount: {
            type: 'number',
          },
          goal: {
            type: 'number',
          },
        },
      },
     inversionPut: {
        type: 'object',
        required: ['mount', 'earning'],
        properties: {
          mount: {
            type: 'number',
          },
          earning: {
            type: 'number',
          },
        },
      },
      expenses: {
        type: 'object',
        required: ['id', 'mount', 'automatized', 'auto_date'],
        properties: {
          id: {
            type: 'string',
          },
          mount: {
            type: 'number',
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
      incomes: {
        type: 'object',
        required: ['id','mount', 'createdAt', 'updatedAt','method_id','category_id'],
        properties: {
          id: {
            type: 'string',
          },
          mount: {
            type: 'number',
          },
          automatized: {
            type: 'boolean'
          },
          auto_date: {
            type: 'string',
            format: 'date',
          },
          createdAt: {
            type: 'string',
          },
          updatedAt: {
            type: 'string',
          },
          method_id: {
            type: 'number'
          },
          category_id: {
            type: 'number'
          }
        },
      },
      incomesPost: {
        type: 'object',
        required: ['automatized', 'mount', 'auto_date','category_id','method_id'],
        properties: {
          mount: {
            type: 'number',
          },
          automatized: {
            type: 'boolean'
          },
          auto_date: {
            type: 'string',
            format: 'date',
          },
          method_id: {
            type: 'number'
          },
          category_id: {
            type: 'number'
          }
        },
      },
      incomesPut: {
        type: 'object',
        required: ['mount', 'automatized','auto_date'],
        properties: {
          mount: {
            type: 'number',
          },
          automatized: {
            type: 'boolean'
          },
          auto_date: {
            type: 'string',
            format: 'date',
          }
        },
      }
    },
  },
};
const swaggerOptions = {
  swaggerDefinition,
  apis: ['./src/routes/subRoutes/*.js'], //! todos los archivos que terminan en ts
};

module.exports = swaggerJSDoc(swaggerOptions);
