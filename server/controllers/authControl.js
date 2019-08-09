const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const { user_id, username, password, profile_pic } = req.body
        const user = await db.find_user([username])
        if (user.length > 0) {
            return res.status(400).send({ Register: false })
        }
        console.log('')
        console.log('user: ', user)
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = await db.insert_helo_user(username, password, profile_pic)
        // setting up hash
        db.insert_hash({ hash, user_id: newUser[0].user_id })
            .then(() => {
                req.session.user = newUser[0]
                res.status(200).send({
                    message: 'Logged In',
                    user: req.session.user,
                    loggedIn: true
                })
            }).catch(err => {
                res.status(500).send({ message: 'Failed to register' })
            })
        // When has doens't use this code
        // res.status(200).send({ Register: true })

    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const { username, password } = req.body
        const user = await db.find_user([username, password])
        if (user.length > 0) {
            res.status(200).send({ logIn: true })
        } else {
            res.status(401).send({ loggedIn: false })
        }
    }
}   