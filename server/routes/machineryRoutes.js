const { Router } = require('express');
const machineryController = require('../controllers/machineryController');
const authController = require('../controllers/authController');
const { createUploader } = require("../middleware/upload");
const uploadMachineryImages = createUploader("machinery");

const machineryRouter = Router();

machineryRouter
    .get('/me', authController.protect, machineryController.getCurrentUserMachinery)

machineryRouter
    .get('/', machineryController.getAllMachinery)
    .get('/:id', machineryController.getMachinery)

machineryRouter
    .post('/', authController.protect, uploadMachineryImages.array('images'), machineryController.addMachinery)
    // .delete('/:id', authController.protect, authController.restrictTo('admin'), machineryController.deleteMachinery)
    .patch('/:id', authController.protect, authController.restrictTo('admin'), machineryController.editMachinery)

module.exports = machineryRouter