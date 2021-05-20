import React from 'react'

const CommentNew = (props) => {
    const { topic } = props

    return (
        <div>
            <h1>CommentNew page</h1>
            <p>Topic id for this comment is {topic.id}</p>
            <form action={`/topics/${topic.id}/comments`} method='post'>
              <input placeholder='body' name='comment[body]'/>
              <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default CommentNew