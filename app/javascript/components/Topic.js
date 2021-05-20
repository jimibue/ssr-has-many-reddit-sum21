import React from 'react'

const Topic = (props) => {
    const { sub, topic, comments } = props
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
    return(
        <div>
            <h1>Topic Page</h1>
            <p>Sub is {sub.name}</p>
            <p>Sub id is {sub.id}</p>

            <h1>Topic Info</h1>
            <h1>{topic.name}</h1>
            <p>{topic.body}</p>

            <h1>Comments</h1>
            {renderComments()}

            <a href={`/topics/${topic.id}/comments`}>view comments page (ie index)</a>
        </div>
    )
}

export default Topic