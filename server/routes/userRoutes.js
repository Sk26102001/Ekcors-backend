// const { Router } = require('express');
// const userController = require('../controllers/userController');
// const authController = require('../controllers/authController');

// const { createUploader } = require("../middleware/upload");
// const uploadDrivingLicense = createUploader("license");
// const uploadProfile = createUploader("profile");

// const userRouter = Router();

// userRouter
//     .get('/me', authController.protect, userController.getCurrentUser)
//     .patch('/me', authController.protect, userController.updateCurrentUser)
//     .post('/me/upload-image', authController.protect, uploadProfile.single("avatar"), userController.uploadUserImage);

// userRouter.post('/register', uploadDrivingLicense.single('drivingLicense'), authController.registerUser);
// userRouter.post('/login', authController.loginUser);
// userRouter.post('/login-mobile', authController.loginViaMobile);
// userRouter.post('/verify-mobile-otp', authController.verifyOtp);
// userRouter.post('/update-password', authController.protect, authController.updatePassword);
// userRouter.post('/logout', authController.logout);

// userRouter.post('/add-driver', authController.protect, authController.restrictTo('vendor'), userController.addDriver);
// userRouter.get('/drivers', authController.protect, authController.restrictTo('admin'), userController.getAllDrivers);
// userRouter.get('/vendor-drivers', authController.protect, userController.getCurrentVendorDriver);

// userRouter.get('/', authController.protect, authController.restrictTo('admin'), userController.getAllUsers);
// userRouter
//     .route('/:id')
//     .get(authController.protect, authController.restrictTo('admin'), userController.getUser)
//     .delete(authController.protect, authController.restrictTo('admin'), userController.deleteUser)

// // userRouter
// //     .route('/driver/:id')
// //     .get(authController.protect, authController.restrictTo('admin'), userController.getDriver)
// //     .delete(authController.protect, authController.restrictTo('admin'), userController.deleteDriver)





// module.exports = userRouter
const { Router } = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const { createUploader } = require("../middleware/upload");
const uploadDrivingLicense = createUploader("license");
const uploadProfile = createUploader("profile");

const userRouter = Router();

// ========== PUBLIC ROUTES ==========
userRouter.post('/register', uploadDrivingLicense.single('drivingLicense'), authController.registerUser);
userRouter.post('/login', authController.loginUser);
userRouter.post('/login-mobile', authController.loginViaMobile);
userRouter.post('/verify-mobile-otp', authController.verifyOtp);

// ========== PROTECTED ROUTES ==========
userRouter.use(authController.protect);

userRouter.post('/logout', authController.logout);
userRouter.post('/update-password', authController.updatePassword);

// ========== USER PROFILE ROUTES ==========
userRouter
    .get('/me', userController.getCurrentUser)
    .patch('/me', userController.updateCurrentUser)
    .post('/me/upload-image', uploadProfile.single("avatar"), userController.uploadUserImage);

// ========== DRIVER ROUTES (SPECIFIC ROUTES - MUST COME FIRST) ==========
// These are specific routes that need to be defined BEFORE the generic /:id route
userRouter.post('/add-driver', authController.restrictTo('vendor'), userController.addDriver);
userRouter.get('/vendor-drivers', userController.getCurrentVendorDriver);
userRouter.delete('/driver/:driverId', authController.restrictTo('vendor'), userController.deleteDriver);
userRouter.put('/driver/:driverId', authController.restrictTo('vendor'), userController.updateDriver);
userRouter.get('/drivers', authController.restrictTo('admin'), userController.getAllDrivers);

// ========== ADMIN ROUTES (GENERIC - MUST COME LAST) ==========
// The /:id route must be LAST because it's generic and would match ANYTHING
userRouter.get('/', authController.restrictTo('admin'), userController.getAllUsers);
userRouter
    .route('/:id')
    .get(authController.restrictTo('admin'), userController.getUser)
    .delete(authController.restrictTo('admin'), userController.deleteUser);

// Debug: Log all registered routes (remove after testing)
console.log('\n📋 Registered User Routes:');
const logRoutes = (router, prefix = '') => {
    router.stack.forEach((layer) => {
        if (layer.route) {
            const methods = Object.keys(layer.route.methods).join(', ').toUpperCase();
            const path = prefix + layer.route.path;
            console.log(`   ${methods.padEnd(7)} /api/v1/users${path}`);
        } else if (layer.name === 'router' && layer.handle.stack) {
            // Handle nested routers if any
            const nestedPrefix = prefix + (layer.regexp.source.replace(/\\\/?/g, '/').replace(/\^|\?|\/i|\$|\(|\|/g, ''));
            logRoutes(layer.handle, nestedPrefix);
        }
    });
};
logRoutes(userRouter);
console.log('=====================================\n');

module.exports = userRouter;