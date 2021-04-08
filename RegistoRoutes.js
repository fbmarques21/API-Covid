//initialize express router
let router = require('express').Router();

//set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API'
    });
});

//Import Covid Controller
var RegistoController = require('./RegistoController');

// Covid routes
router.route('/covid')
    .get(RegistoController.index)


router.route('/covi/:covi_id')
    .get(RegistoController.view)

//Export API routes
module.exports = router;