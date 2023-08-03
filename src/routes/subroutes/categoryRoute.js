const { Router } = require('express');
const getAllCategories = require('../../controllers/category/getAllCategories');
const createCategory = require('../../controllers/category/createCategory');
const deleteCategory = require('../../controllers/category/deleteCategory');
const { categoryExist } = require('../../utils/middlewares/categoryMiddleware');
const router = Router();

router.get('/', getAllCategories);
router.post('/', createCategory);
router.delete('/:idCategory', deleteCategory);

module.exports = router;
