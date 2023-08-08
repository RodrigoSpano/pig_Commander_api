const { Router } = require('express');
const getAllCategories = require('../../controllers/category/getAllCategories');
const createCategory = require('../../controllers/category/createCategory');
const deleteCategory = require('../../controllers/category/deleteCategory');
const {
  categoryExist,
  postCategoriesMiddleware,
} = require('../../utils/middlewares/categoryMiddleware');

const router = Router();

router.get('/', getAllCategories);

router.post('/', postCategoriesMiddleware, createCategory);

router.delete('/:idCategory', categoryExist, deleteCategory);

module.exports = router;
