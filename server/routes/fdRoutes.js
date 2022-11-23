const express = require('express');
const router = express.Router();
const fdController = require('../controllers/fdController');
const checkLogin = require('../utils/checkLogin');

router.get('/', fdController.homepage);
router.get('/login', fdController.login);
router.post('/login', fdController.loginOnPost);
router.get('/register', fdController.register);
router.post('/register', fdController.registerOnPost);
router.get('/must-login', fdController.mustLogin);

//Shipper router
router.get('/shipper', checkLogin.checkShipper, fdController.client);

//Admin router
router.get(
  '/admin-dashboard',
  checkLogin.checkLogin,
  checkLogin.checkAdmin,
  fdController.adminDashboard
);
router.get('/admin-drinks', checkLogin.checkLogin, checkLogin.checkAdmin, fdController.adminDrinks);
router.get('/admin-foods', checkLogin.checkLogin, checkLogin.checkAdmin, fdController.adminFoods);
router.get('/admin-info', checkLogin.checkLogin, checkLogin.checkAdmin, fdController.adminInfo);

//Client router
router.get('/client', checkLogin.checkLogin, checkLogin.checkClient, fdController.client);
router.get('/info', checkLogin.checkLogin, fdController.clientInfo);

module.exports = router;
