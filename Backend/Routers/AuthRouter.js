const { signup,signin } = require('../Controllers/AuthController');
const { signupValidation } = require('../Middlewares/AuthValidation');
const {signinValidation}=require('../Middlewares/AuthValidation')


router.post('/signup',signupValidation,signup);

router.post('/signin',signinValidation,signin);

module.exports=router;