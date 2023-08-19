const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY; 

const authController = {
    async login(req, res) {
        const { username, password } = req.body;
        if (username === 'admin' && password === 'password') {
            const token = jwt.sign({ userId: 1, username: 'admin' }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    }
}
module.exports = authController;
