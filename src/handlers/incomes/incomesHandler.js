
const {incomes} = require('../../db')

const incomesExample =[
    {
        "user_id": "d41865d3-7835-4a5f-b4b3-207b4e3f9021",
        "mount": 1500,
        "automatized": true,
        "auto_date" : "2023-07-25T15:30:00Z",
        "category_id": 3,
        "method_id": 2
      }
]

const incomesHandler = async(userId) => {
    try {
        
        /* const allIncomes = await incomes.findAll(
            where: {user_id: user_id}
        ); */
        const allIncomes = await incomes.findAll();

        return allIncomes;
    } catch (error) {
        throw Error('incomesHandler:',error) 
        // esto despues lo saco pero es para ver de donde viene error
    }
}


/* Falta descomentar lineas 18-20 para cuando esten todas las tablas andando */

module.exports =  incomesHandler;

