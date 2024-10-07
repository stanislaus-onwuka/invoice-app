const express = require('express');
const {
  createInvoice,
  updateInvoice,
  sendInvoice,
  getInvoices
} = require('../controllers/invoiceController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

/**
 * @swagger
 * /invoices:
 *   post:
 *     summary: Create a new invoice
 *     responses:
 *       201:
 *         description: Invoice created
 */
router.post('/invoices', authMiddleware, createInvoice);

/**
 * @swagger
 * /invoices/{id}:
 *   put:
 *     summary: Update an invoice
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Invoice ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Invoice updated
 */
router.put('/invoices/:id', authMiddleware, updateInvoice);

/**
 * @swagger
 * /invoices/send:
 *   post:
 *     summary: Send an invoice
 *     responses:
 *       200:
 *         description: Invoice sent
 */
router.post('/invoices/send', authMiddleware, sendInvoice);

/**
 * @swagger
 * /invoices:
 *   get:
 *     summary: Get all invoices
 *     responses:
 *       200:
 *         description: Invoices retrieved
 */
router.get('/invoices', authMiddleware, getInvoices);

module.exports = router;
