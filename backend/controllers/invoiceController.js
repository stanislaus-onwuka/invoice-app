const Invoice = require('../models/Invoice');

const createInvoice = async (req, res) => {
  const { description, amount, status } = req.body;
  const newInvoice = new Invoice({
    userId: req.userId,
    description,
    amount,
    status
  });
  await newInvoice.save();
  res.status(201).json(newInvoice);
};

const updateInvoice = async (req, res) => {
  const { id } = req.params;
  const updatedInvoice = await Invoice.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedInvoice);
};

const sendInvoice = async (req, res) => {
  // Logic to send invoice (e.g., via email)
  res.json({ message: 'Invoice sent' });
};

const getInvoices = async (req, res) => {
  const invoices = await Invoice.find({ userId: req.userId });
  res.json(invoices);
};

module.exports = { createInvoice, updateInvoice, sendInvoice, getInvoices };
