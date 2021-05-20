import React from 'react'

const Comments = (props) => {
    const { topic, comments } = props

    const renderComments = ()=>{
        return comments.map( comment=>{
            return (
                <div>
                    <p>{comment.body}</p>
                    <a href={`/topics/${topic.id}/comments/${comment.id}`}>show</a>
                    <a href={`/topics/${topic.id}/comments/${comment.id}/edit`}>edit</a>
                    <a href={`/topics/${topic.id}/comments/${comment.id}`} data-method='delete'>delete</a>
                </div>
            )
        })
    }

    return (
        <div>
            <h1>Comments page</h1>
            <p>Topic id for this comment is {topic.id}</p>
            <a href={`/topics/${topic.id}/comments/new`}>new comment</a>
            {renderComments()}
        </div>
    )
}

export default Comments