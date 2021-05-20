import React from 'react'

const Topic = (props) => {
    const { sub, topic } = props
    return(
        <div>
            <h1>Topic Page</h1>
            <p>Sub is {sub.name}</p>
            <p>Sub id is {sub.id}</p>

            <h1>Topic Info</h1>
            <h1>{topic.name}</h1>
            <p>{topic.body}</p>

            <a href={`/topics/${topic.id}/comments`}>view comments page (ie index)</a>
        </div>
    )
}

export default Topic