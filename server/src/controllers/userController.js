const database = require('../database/postgresql')

exports.getAllUsers = async (req, res) => {
    try {
        const result = await database.pool.query('SELECT * FROM users')
        return res.status(200).json(result.rows)
    } catch (err) {
        return res.status(500).json({
            error: err.message,
            status: 500
        })
    }
}
exports.createAccount = async (req, res) => {
    try {
        const existEmail = await database.pool.query({
            text: 'SELECT EXISTS (SELECT * FROM users WHERE email = $1)',
            values: [req.body.email]
        })
        const existUserID = await database.pool.query({
            text: 'SELECT EXISTS (SELECT * FROM users WHERE userid = $1)',
            values: [req.body.userid]
        })
        const existPhone = await database.pool.query({
            text: 'SELECT EXISTS (SELECT * FROM users WHERE phone = $1)',
            values: [req.body.phone]
        })
        if (existEmail.rows[0].exists) {
            return res.status(404).json({
                error: `email`,
                status: 500
            })
        }
        if (existUserID.rows[0].exists) {
            return res.status(404).json({
                error: `userid`,
                status: 500
            })
        }
        if (existPhone.rows[0].exists) {
            return res.status(404).json({
                error: `phone`,
                status: 500
            })
        }
        const result = await database.pool.query({
            text: 'INSERT INTO users (userid,username,email,password,phone) VALUES ($1,$2,$3,$4,$5) RETURNING *',
            values: [req.body.userID, req.body.username, req.body.email,
            req.body.password, req.body.phone]
        })
        return res.status(200).json({
            message: `Created Account`,
            status: 200
        })
        // return res.status(200).json({message: req.body.userID})
    } catch (err) {
        return res.status(500).json({
            error: err.message,
            status: 500
        })
    }
}
exports.login = async (req, res) => {
    try {
        const tel_phone = req.body.phone
        const password = req.body.password
        const existTel_phone = await database.pool.query({
            text: 'SELECT EXISTS (SELECT * FROM users WHERE phone = $1)',
            values: [tel_phone]
        })
        if (!existTel_phone.rows[0].exists) {
            return res.status(500).json({
                error: "telphone not found",
                status: 500
            })
        }
        const password_db = await database.pool.query({
            text: 'SELECT password FROM users WHERE phone = $1',
            values: [tel_phone]
        })
        if (password != password_db) {
            return res.status(500).json({
                error: "Password not matched",
                status: 500
            })
        }
        return res.status(200).json({
            messsage: 'Login Successful',
            status: 200
        })
    } catch (err) {
        res.status(500).json({
            error: err.message,
            status: 500
        })
    }
}