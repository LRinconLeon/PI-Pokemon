const { Router } = require('express');
const getAllTypes = require('../controllers/typeController');

const typeRouter = Router();

typeRouter.get('/', getAllTypes);

module.exports = typeRouter;