import React from 'react'
import PropTypes from 'prop-types'


const PostList = ({ posts, removeUpdate }) => {
    return (
        <div style={{ marginTop: '24px' }}>
            {posts.map((item, i) =>
                <Post
                    post={item}
                    key={i}
                    onRemove={removeUpdate}
                />
            )}
        </div>
    )
}

PostList.PropTypes = {
    posts: PropTypes.array.isRequired,
    removeUpdate: PropTypes.func.isRequired
}

export default PostList;
