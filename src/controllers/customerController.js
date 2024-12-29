const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.json(err);
        }
        conn.query('SELECT * FROM customer', (err, customers) => {
            if (err) {
                return res.json(err);
            }
            res.render('customers', {
                data: customers
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        if (err) {
            return res.json(err);
        }
        conn.query('INSERT INTO customer SET ?', [data], (err, rows) => {
            if (err) {
                return res.json(err);
            }
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        if (err) {
            return res.json(err);
        }
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
            if (err) {
                return res.json(err);
            }
            res.redirect('/');
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        if (err) {
            return res.json(err);
        }
        conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, rows) => {
            if (err) {
                return res.json(err);
            }
            res.render('customer_edit', {
                data: rows[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        if (err) {
            return res.json(err);
        }
        conn.query('UPDATE customer SET ? WHERE id = ?', [newCustomer, id], (err, rows) => {
            if (err) {
                return res.json(err);
            }
            res.redirect('/');
        });
    });
};

module.exports = controller;