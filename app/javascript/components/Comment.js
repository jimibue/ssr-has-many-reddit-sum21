import React from 'react'

const Comment = (props) => {
    const { topic } = props

    return (
        <div>
            <h1>Comment page</h1>
            <p>Topic id for this comment is {topic.id}</p>
        </div>
    )
}

export default Comment