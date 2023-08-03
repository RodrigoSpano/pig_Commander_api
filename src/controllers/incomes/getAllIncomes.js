const incomesHandler = require('../../handlers/incomes/incomesHandler');


// todos de todos los meses
const getAllIncomes = async (req, res) => {
    try {
        const { id } = req.user.dataValues;
        const allIncomes = await incomesHandler(id);

        return res.status(200).json(allIncomes);
    } catch (error) {
        return res.status(400).send('getAllIncomes:', error);
        // esto despues lo saco pero es para ver de donde viene error
    }
};

module.exports = getAllIncomes;