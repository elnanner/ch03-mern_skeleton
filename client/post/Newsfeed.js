import React from 'react'
import Card from '@material-ui/core/Card'
import { Divider } from '@material-ui/core/Divider'
import { Typography } from '@material-ui/core/Typography'
import PostList from './PostList'

export const Newsfeed = () => {
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

    return (
        <>
            <Card>
                <Typography>
                    <Divider />
                    {/* new post */}
                    <Divider />
                    <PostList posts={posts} removeUpdate={removePost}/>
                </Typography>
            </Card>
        </>
    )
}
