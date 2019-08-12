module.exports = {
    getUser: async (req, res) => {
        let db = req.app.get('db')
        console.log('req.params: ', req.params)
        console.log('')
        const { user_id } = req.params
        // console.log('username: ', username)
        // console.log('')
        console.log('userId: ', user_id)
        console.log('')
        const userDisplay = await db.find_one_user([user_id])
        console.log("userDisplay: ", userDisplay)
        console.log('')
        res.status(200).send(userDisplay)
    }
    // getPosts: ,
    // addPost:
}