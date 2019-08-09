const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const { username, password } = req.body
        console.log('username: ', username)
        console.log('')
        const user = await db.find_user([username])
        if (user.length > 0) {
            return res.status(400).send('Username Taken')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = await db.insert_helo_user(username, password)
        console.log('newUser: ', newUser)
        db.insert_hash({ hash, user_id: newUser[0].user_id })
            .then(() => {
                console.log('hash: ', hash)
                req.session.user = newUser[0]
                res.status(200).send({
                    message: 'Logged In',
                    user: req.session.user,
                    loggedIn: true
                }).catch(err => res.status(500).send({ message: "failed to register" }))
            })
    },
    login: (req, res) => {
        console.log('Attempted Login')
    }
}   