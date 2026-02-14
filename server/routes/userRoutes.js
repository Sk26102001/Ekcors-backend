const { Router } = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const { createUploader } = require("../middleware/upload");
const uploadDrivingLicense = createUploader("license");
const uploadProfile = createUploader("profile");

const userRouter = Router();

userRouter
    .get('/me', authController.protect, userController.getCurrentUser)
    .patch('/me', authController.protect, userController.updateCurrentUser)
    .post('/me/upload-image', authController.protect, uploadProfile.single("avatar"), userController.uploadUserImage);

userRouter.post('/register', uploadDrivingLicense.single('drivingLicense'), authController.registerUser);
userRouter.post('/login', authController.loginUser);
userRouter.post('/login-mobile', authController.loginViaMobile);
userRouter.post('/verify-mobile-otp', authController.verifyOtp);
userRouter.post('/update-password', authController.protect, authController.updatePassword);
userRouter.post('/logout', authController.logout);

userRouter.post('/add-driver', authController.protect, authController.restrictTo('vendor'), userController.addDriver);
userRouter.get('/drivers', authController.protect, authController.restrictTo('admin'), userController.getAllDrivers);
userRouter.get('/vendor-drivers', authController.protect, userController.getCurrentVendorDriver);

userRouter.get('/', authController.protect, authController.restrictTo('admin'), userController.getAllUsers);
userRouter
    .route('/:id')
    .get(authController.protect, authController.restrictTo('admin'), userController.getUser)
    .delete(authController.protect, authController.restrictTo('admin'), userController.deleteUser)

// userRouter
//     .route('/driver/:id')
//     .get(authController.protect, authController.restrictTo('admin'), userController.getDriver)
//     .delete(authController.protect, authController.restrictTo('admin'), userController.deleteDriver)

module.exports = userRouter