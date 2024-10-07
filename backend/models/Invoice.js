const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
