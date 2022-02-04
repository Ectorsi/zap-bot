module.exports = () => {
    const customerWalletDB = require('../data/customer-wallet.json');
    const controller = {};

    controller.listCustomerWallet = (req, res) => res.status(200).json(customerWalletDB);

    return controller;
}