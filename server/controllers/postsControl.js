module.exports = {
    getUser: async (req, res) => {
        let db = req.app.get('db')
        const { user_id, username } = req.body
        console.log('username: ', username)
        console.log('')
        const userDisplay = await db.find_one_user([user_id])
        console.log("userDisplay: ", userDisplay)
        console.log('')
        res.status(200).send(userDisplay)
    }
    //         let db = req.app.get('db')
    // let house = await db.get_houses()
    // res.status(200).send(house)
    // getPosts: ,
    // addPost:
}