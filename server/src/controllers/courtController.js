const database = require('../database/postgresql')

exports.getAllCourts = async (req, res) => {
    try {
        const result = await database.pool.query('SELECT * FROM courts')
        return res.status(200).json({
            message: result.rows,
            status: 200
        })
    } catch (err) {
        return res.status(500).json({
            error: err.message,
            status: 500
        })
    }
}
exports.booking = async (req, res) => {
    try {
        const status = 'pending';
        if (req.body.payment_method != "banking") {
            const result = await database.pool.query({
                text: "INSERT INTO bookings(bookingid, courtid, userid, starttime, endtime, bookingdate, payment_method, status)VALUES($1, $2,$3, $4, $5, $6, $7, $8)",
                values: [req.body.bookingid
                    , req.body.courtid
                    , req.body.userid
                    , req.body.starttime
                    , req.body.endtime
                    , req.body.bookingdate
                    , req.body.payment_method
                    , status]
            })
            res.status(200).json({
                message: 'booking_completed',
                status: 200
            })
        }
        if (true == true) { //Banking Payment Checking
            status = 'confirmed'
            const result = await database.pool.query({
                text: "INSERT INTO bookings(bookingid, courtid, userid, starttime, endtime, bookingdate, payment_method, status)VALUES($1, $2,$3, $4, $5, $6, $7, $8)",
                values: [req.body.bookingid
                    , req.body.courtid
                    , req.body.userid
                    , req.body.starttime
                    , req.body.endtime
                    , req.body.bookingdate
                    , req.body.payment_method
                    , status]
            })
            res.status(200).json({
                message: 'booking_completed',
                status: 200
            })
        }
    } catch (err) {
        res.status(500).json({
            error: err.message,
            status: 500
        })
    }
}