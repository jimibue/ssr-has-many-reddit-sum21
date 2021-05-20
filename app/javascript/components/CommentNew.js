import React from 'react'

const CommentNew = (props) => {
    const { topic } = props

    return (
        <div>
            <h1>CommentNew page</h1>
            <p>Topic id for this comment is {topic.id}</p>
        </div>
    )
}

export default CommentNew