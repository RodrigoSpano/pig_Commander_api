const {incomes} = require('../../db')

// esto crea un ingreso
const createIncome = async (req,res) => {
    
    try {
        const {user_id,mount,automatized,auto_date,category_id,method_id} = req.body;
        
        //if(!user_id || !mount || !automatized || !auto_date || !category_id || !method_id) throw Error('Faltan datos');
        
        console.log('entre',{user_id,mount,automatized,auto_date,category_id,method_id})
        //Creacion o busqueda
        const newIncome = await incomes.create({
            //user_id,
            mount,
            automatized,
            auto_date: automatized ? auto_date : null, // Establecer auto_date si automatized es true, de lo contrario, establecer en null
            //category_id,
            //method_id
        })
        console.log('createIncomes:',newIncome)
        return res.status(200).json(newIncome)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = createIncome

/* 
    En esta ruta, se reciben los valores necesarios para crear un 'income'.
    En especial, los valores 'method_id' y 'category_id' serviran para que se cree la relacion
     en la base de datos.
     Los valores user_id,category_id,method_id estan comentados porque necesitamos de las demas tablas
*/