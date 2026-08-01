const express = require('express');
const router = express.Router();
const requireAuth = require('../middleware/auth');
const { createOrder, getOrders } = require('../controllers/orderController');

router.use(requireAuth);

router.post('/', createOrder);
router.get('/', getOrders);

module.exports = router;
