
const {incomes} = require('../../db')

const incomesExample =[
    {
        name: 'pepe',
    },
    {
        name: 'pipo',
    }
]

const incomesHandler = async(userId) => {
    try {
        const incomesAux = await incomes.findAll({
            where: {user_id : userId}
        });

        if(incomesAux.length == 0){
            console.log('no encontre nada')
            await incomes.bulkCreate(incomesExample) // 
        }else{
            throw Error("")
        }

        const allIncomes = await incomes.findAll();

        return allIncomes;
    } catch (error) {
        throw Error('incomesHandler:',error) 
        // esto despues lo saco pero es para ver de donde viene error
    }
}

module.exports =  incomesHandler;