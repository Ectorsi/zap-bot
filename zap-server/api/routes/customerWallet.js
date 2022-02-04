module.exports = app => {
    const controller = require('../controllers/customer-wallet')();

    app.route('/api/v1/customer-wallet')
        .get(controller.listCustomerWallet);
}