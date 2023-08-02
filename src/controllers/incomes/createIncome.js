const {incomes} = require('../../db')

// esto crea un ingreso
const createIncome = async (req,res) => {
    try {
        const {id,user_id,mount,category_id,created_at,method_id,automatized,auto_date} = req.body;

        if(!id,user_id,mount,category_id,created_at,method_id,automatized,auto_date) throw Error('Faltan datos');

        //Creacion o busqueda
        const newIncome = await incomes.findOrCreate({
            where: {nombre: nombre}
        })

        return res.status(200).json(newIncome)

    } catch (error) {
        return res.status(500)
    }
}

module.exports = createIncome