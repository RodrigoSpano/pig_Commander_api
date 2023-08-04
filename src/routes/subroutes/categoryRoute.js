const { Router } = require('express');
const getAllCategories = require('../../controllers/category/getAllCategories');
const createCategory = require('../../controllers/category/createCategory');
const deleteCategory = require('../../controllers/category/deleteCategory');
const {
  categoryExist,
  postCategoriesMiddleware,
} = require('../../utils/middlewares/categoryMiddleware');
const getDefaultCategories = require('../../controllers/category/getDefaultsCategory');

const router = Router();

router.get('/', getAllCategories);
router.get('/defaults', getDefaultCategories);
router.post('/', postCategoriesMiddleware, createCategory);
router.delete('/:idCategory', categoryExist, deleteCategory);

module.exports = router;
