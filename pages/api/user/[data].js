import users from '../../../data/index'

export default function handler(req, res) {
    const {
        data
    } = req.query
    res.status(200).json(users)
}