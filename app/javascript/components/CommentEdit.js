import React from 'react'

const CommentEdit = (props) => {
    const { topic } = props

    return (
        <div>
            <h1>CommentEdit page</h1>
            <p>Topic id for this comment is {topic.id}</p>
        </div>
    )
}

export default CommentEdit