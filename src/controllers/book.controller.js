const Auth = require('../models/auth.model')
const BookErrand = require('../models/book.model');

const bookAnErrand = async (req, res) => {
    const { fullName, phoneNumber, price, address, runners, date, time } = req.body;

    if (!fullName || !phoneNumber || !price || !runners || !date || !time) {
        return res.status(400).json({ message: 'Please provide all fields' });
    }

    try {
        const errand = new BookErrand({
            fullName,
            phoneNumber,
            price,
            address,
            runners,
            date,
            time
        })

        await errand.save()

        return res.status(200).json({ message: 'Errand Booked', success: true, status: 200, data: errand })
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error', success: false, status: 500, error: error.message });
    }
}

module.exports = {
    bookAnErrand
}