const express = require('express');
const { getProfile } = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Get user profile
 *     responses:
 *       200:
 *         description: User profile retrieved
 */
router.get('/profile', authMiddleware, getProfile);

module.exports = router;
