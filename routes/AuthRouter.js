const router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

router.post('/login', controller.Login)
router.post('/register', controller.Register)
router.put(
  '/profile',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)

module.exports = router