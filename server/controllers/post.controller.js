import formidable from "formidable"
import errorHandler from "../helpers/dbErrorHandler"
import Post from '../models/post.model'

const listNewsFeed = async (req, res) => {
    let following = req.profile.following
    following.push(req.profile._id)
    try {
        let posts = await Post.find({ postedBy: { $in: req.profile.following } })
            .populate('comments.postedBy', '_id name')
            .populate('postedBy', '_id name')
            .sort('-created')
            .exec()
        res.json(posts)
    } catch (err) {
        return res.status(400).send({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const listByUser = async (req, res) => {
    try {
        let posts = await Post.find({ postedBy: req.profile._id })
            .populate('comments.postedBy', '_id name')
            .populate('postedBy', '_id name')
            .sort('-created')
            .exec()
        res.json(posts)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const create = async (req, res, next) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        } else {
            let post = new Post(fiels)
            post.postedBy = req.profile
            if (files.photo) {
                post.photo.data = fs.readFileSync(files.photo.path)
                post.photo.contentType = files.photo.type
            }
            try {
                let result = await post.save()
                res.json(result)
            } catch (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            }
        }
    })
}

const postById = async (req, res, next, id) => {
    try {
        let post = await Post.findById(id)
            .populate('postedBy', '_id name')
            .exec()
        if (!post) {
            return res.status(400).json({
                error: 'Post not found'
            })
        }
        req.post = postnext()
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const photo = async (req, res, next) => {
    res.set("Content-Type", req.post.photo.contentType)
    return res.send(req.post.photo.data)
}

export default { listNewsFeed, listByUser, create, postById, photo }