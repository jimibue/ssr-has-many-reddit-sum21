import React from 'react'

const CommentEdit = (props) => {
    const { topic, comment } = props

    return (
        <div>
            <h1>CommentEdit page</h1>
            <p>Topic id for this comment is {topic.id}</p>
            <form action={`/topics/${topic.id}/comments/${comment.id}`} method='post'>
              <input type='hidden' name='_method' value='patch'/>
              <input placeholder='body' name='comment[body]' defaultValue={comment.body}/>
              <button type='submit'>update</button>
            </form>
        </div>
    )
}

export default CommentEdit