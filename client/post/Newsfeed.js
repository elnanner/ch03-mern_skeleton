import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card'
import { Divider } from '@material-ui/core'
import Typography  from '@material-ui/core/Typography'
import PostList from './PostList'
import auth from '../auth/auth-helper'
import listNewsFeed from '../post/api-post'

export const Newsfeed = () => {
    const jwt = auth.isAuthenticated()
    const [posts, setPosts] = useState([])

    const addPost = (post) => {
        const updatedPosts = [...posts]
        updatedPosts.unshift(post)
        setPosts(updatedPosts)
    }

    const removePost = (post) => {
        const updatedPosts = [...posts]
        const index = updatedPosts.indexOf(post)
        updatedPosts.splice(index, 1)
        setPosts(updatedPosts)
    }

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        if (jwt) {
            listNewsFeed({ userId: jwt.user._id }, { t: jwt.token }, signal)
                .then((data) => {
                    if (data && data.error) {
                        console.log(data.error)
                    } else {
                        setPosts(data)
                    }
                })
            return function cleanup() {
                abortController.abort()
            }
        }
    }, [])
    return (
        <>
            <Card>
                <Typography>
                    <Divider />
                    {/* new post */}
                    <Divider />
                    <PostList posts={posts} removeUpdate={removePost} />
                </Typography>
            </Card>
        </>
    )
}
