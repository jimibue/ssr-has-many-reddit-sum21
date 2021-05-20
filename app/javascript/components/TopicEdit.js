import React from 'react'

const TopicEdit = (props) => {
    const { sub, topic } = props
    return(
        <div>
            <h1>TopicEdit Page</h1>
            <form action={`/subs/${sub.id}/topics/${topic.id}`} method='post'>
                <input type='hidden' name='_method' value='patch'/>
                <p>body</p>
                <input defaultValue={topic.body} name='topic[body]' />
                <p>name</p>
                <input defaultValue={topic.name} name='topic[name]' />
                <button type='submit'>add</button>
            </form>
        </div>
    )
}

export default TopicEdit