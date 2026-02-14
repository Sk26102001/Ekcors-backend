const { Router } = require('express');
const machineryController = require('../controllers/machineryController');
const authController = require('../controllers/authController');
const { createUploader } = require("../middleware/upload");
const uploadMachineryImages = createUploader("machinery");

const machineryRouter = Router();

machineryRouter
    .get('/me', authController.protect, machineryController.getCurrentUserMachinery)

machineryRouter
    .route('/')
    .get(machineryController.getAllMachinery)
    .post(
        authController.protect,
        uploadMachineryImages.array('images'),
        machineryController.addMachinery
    );

machineryRouter
    .route('/:id')
    .get(machineryController.getMachinery)
    .patch(
        authController.protect,
        authController.restrictTo('admin'),
        machineryController.editMachinery
    );


module.exports = machineryRouter