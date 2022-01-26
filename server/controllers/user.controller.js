import User from '../models/user.model'
import extend from 'lodash/extend'
import errorHandler from '../helpers/dbErrorHandler'
import formidable from 'formidable'
import fs from 'fs'
import profileImage from './../../client/assets/images/profile-pic.png'

const create = async (req, res, next) => {
    const user = new User(req.body)
    try {
        await user.save()
        return res.status(200).json({
            message: 'Successfully signed up!'
        })
    } catch (error) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(error)
        })
    }
}

const list = async (req, res) => {
    try {
        let users = await User.find().select('name email updated created')
        res.json(users)
    } catch (error) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(error)
        })
    }
}

const userByID = async (req, res, next, id) => {
    try {
        let user = await User.findById(id)
            .populate('following', '_id name')
            .populate('followers', '_id name')
            .exec()
        if (!user)
            return res.status(400).json({
                error: 'User not found'
            })
        req.profile = user
        next()
    } catch (error) {
        res.status(400).json({
            error: 'Could not retrieve user'
        })
    }
}

const read = (req, res) => {
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)
}

const update = async (req, res) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Photo could not uploaded"
            })
        }
        let user = req.profile
        user = extend(user, fields)
        user.updated = Date.now()
        if (files.photo) {
            user.photo.data = fs.readFileSync(files.photo.path)
            user.photo.contentType = files.photo.type
        }

        try {
            await user.save()
            user.hashed_password = undefined
            user.salt = undefined
            res.json(user)
        } catch (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
    })
}

const remove = async (req, res, next) => {
    try {
        let user = req.profile
        let deletedUser = await user.remove()
        deletedUser.hashed_password = undefined
        deletedUser.salt = undefined
        res.json(deletedUser)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const photo = async (req, res, next) => {
    if (req.profile.photo.data) {
        res.set("Content-Type", req.profile.photo.contentType)
        return res.send(req.profile.photo.data)
    }
    next()
}

const defaultPhoto = (req, res) => {
    return res.sendFile(process.cwd() + profileImage)
}

// follow/unfollow
const addFollowing = (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.body.userId, { $push: { following: req.body.followId } })
        next()
    } catch (err) {
        return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
    }
}

const addFollower = (req, res) => {
    try {
        let result = await User.findByIdAndUpdate(req.body.followId, { $push: { followers: req.body.userId } }, { new: true })
            .populate('following', '_id name')
            .populate('followers', '_id name')
            .exec()
        result.hashed_password = undefined
        result.salt = undefined
        res.json(result)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const removeFollowing = (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.body.userId, { $pull: { following: req.body.unfollowId } })
        next()
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const removeFollower = (req, res) => {
    try {
        await User.findByIdAndUpdate(req.body.unfollowId, { $pull: { followers: req.body.userId } }, { new: true })
            .populate('following', '_id name')
            .populate('followers', '_id name')
            .exec()
        result.hashed_password = undefined
        result.salt = undefined
        res.json(result)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

export default { create, list, userByID, read, update, remove, photo, defaultPhoto, addFollowing, addFollower, removeFollowing, removeFollower }