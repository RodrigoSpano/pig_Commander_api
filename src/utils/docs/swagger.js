const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'Back-end Documentation',
    version: '1.0.0', // version nuestra (se puede ir modificando a gusto)
    description:
      'En todas las rutas se envia el token mediante la propiedad "Authorization" en el header',
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
          image: {
            type: 'string'
          }
        },
      },
      user: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          googleId: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          lastname: {
            type: 'string',
          },
          password : {
            type: 'string'
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
        required: ['id', 'name', 'amount', 'goal', 'createdAt', 'updatedAt'],
        properties: {
          id: {
            type: 'number',
          },
          name: {
            type: 'string',
          },
          amount: {
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
        required: ['id', 'amount', 'earning', 'started_on', 'finish_at'],
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
          amount: {
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
        required: ['name', 'amount', 'goal'],
        properties: {
          name: {
            type: 'string',
          },
          amount: {
            type: 'number',
          },
          goal: {
            type: 'number',
          },
        },
      },
      inversionPost: {
        type: 'object',
        required: ['amount', 'earning', 'started_on', 'finish_at', 'user_id'],
        properties: {
          amount: {
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
        required: ['amount', 'goal'],
        properties: {
          amount: {
            type: 'number',
          },
          goal: {
            type: 'number',
          },
        },
      },
      inversionPut: {
        type: 'object',
        required: ['amount', 'earning'],
        properties: {
          amount: {
            type: 'number',
          },
          earning: {
            type: 'number',
          },
        },
      },
      expenses: {
        type: 'object',
        required: ['id', 'amount', 'automatized', 'auto_date'],
        properties: {
          id: {
            type: 'string',
          },
          amount: {
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
      Postexpenses: {
        type: 'object',
        required: ['id', 'amount', 'automatized', 'auto_date'],
        properties: {
          name: {
            type: 'string',
          },
          category_id: {
            type: 'number',
          },
          method_id: {
            type: 'number',
          },
          amount: {
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
      incomes: {
        type: 'object',
        required: [
          'id',
          'amount',
          'createdAt',
          'updatedAt',
          'method_id',
          'category_id',
        ],
        properties: {
          id: {
            type: 'string',
          },
          amount: {
            type: 'number',
          },
          automatized: {
            type: 'boolean',
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
            type: 'number',
          },
          category_id: {
            type: 'number',
          },
        },
      },
      incomesPost: {
        type: 'object',
        required: [
          'automatized',
          'amount',
          'auto_date',
          'category_id',
          'method_id',
        ],
        properties: {
          amount: {
            type: 'number',
          },
          automatized: {
            type: 'boolean',
          },
          auto_date: {
            type: 'string',
          },
          category_id: {
            type: 'number',
          },
          method_id: {
            type: 'number',
          },
        },
      },
      maxSpend: {
        type: 'object',
        required: [' amount'],
        properties: {
          amount: {
            type: 'number',
          },
          automatized: {
            type: 'boolean',
          },
          auto_date: {
            type: 'string',
            format: 'date',
          },
          method_id: {
            type: 'number',
          },
          category_id: {
            type: 'number',
          },
        },
      },
      incomesPut: {
        type: 'object',
        required: ['amount', 'automatized', 'auto_date'],
        properties: {
          amount: {
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
      categories: {
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
      categoriesPost: {
        type: 'object',
        required: ['name'],
        properties: {
          name: {
            type: 'string',
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
