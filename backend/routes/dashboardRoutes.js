const express = require('express');
const { getDashboardInfo } = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /dashboard:
 *   get:
 *     summary: Get dashboard info
 *     responses:
 *       200:
 *         description: Dashboard info retrieved
 */
router.get('/dashboard', authMiddleware, getDashboardInfo);

module.exports = router;
