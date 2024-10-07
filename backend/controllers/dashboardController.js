const Invoice = require('../models/Invoice');

const getDashboardInfo = async (req, res) => {
  const userId = req.userId;
  const invoices = await Invoice.find({ userId });
  res.json(invoices);
};

module.exports = { getDashboardInfo };
