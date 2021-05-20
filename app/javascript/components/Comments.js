import React from 'react'

const Comments = (props) => {
    const { topic } = props

    return (
        <div>
            <h1>Comments page</h1>
            <p>Topic id for this comment is {topic.id}</p>
        </div>
    )
}

export default Comments