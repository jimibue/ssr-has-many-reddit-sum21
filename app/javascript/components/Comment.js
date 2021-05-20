import React from 'react'

const Comment = (props) => {
    const { topic, comment } = props

    return (
        <div>
            <h1>{comment.body}</h1>
            <a href={`/topics/${topic.id}/comments`}>go back</a>
            <a href={`/`}>home</a>
            <p>Topic id for this comment is {topic.id}</p>
        </div>
    )
}

export default Comment