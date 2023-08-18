const express = require('express');
const banUser = require('../../controllers/dashboard/banUser');
const unbanUser = require('../../controllers/dashboard/unbanUser');
const getBannedUsers = require('../../controllers/dashboard/getBannedUsers');
const getAllUsers = require('../../controllers/dashboard/getAllUsers');
const getbasicUsers = require('../../controllers/dashboard/getbasicUsers');
const getproUsers = require('../../controllers/dashboard/getproUsers');
const isAdmin = require('../../utils/middlewares/adminMiddleware');
const getTableUsers = require('../../controllers/dashboard/getTableUsers');
const getUserDetail = require('../../controllers/dashboard/getUserDetail');

const router = express.Router();

// Banear un usario
router.delete('/ban/:id', isAdmin, banUser);

// Desbanear un usario
router.get('/unban/:id', isAdmin, unbanUser);

// numero de usuarios totales
router.get('/allusers', isAdmin, getAllUsers);

// numero de usuarios basicos
router.get('/basicusers', isAdmin, getbasicUsers);

// numero de usuarios pro
router.get('/prousers', isAdmin, getproUsers);

// numero de usuarios baneados
router.get('/bannedusers', isAdmin, getBannedUsers);

// get de la table
router.get('/tableusers', isAdmin, getTableUsers);

// get detail
router.get('/detail/:id', isAdmin, getUserDetail);

module.exports = router;
