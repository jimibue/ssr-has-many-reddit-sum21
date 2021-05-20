import React from 'react'

const Comment = (props) => {
    const { comments, topics, subs } = props

    const renderSubs = () => {
        // this return returns the array at end of map
        return subs.map( sub => {
            // this returns the jsx for each sub
            return (
                <div>
                    <h1>{sub.name}</h1>
                    {/* this hits subs#show */}
                    <a href={`/subs/${sub.id}`}>show sub</a> 
                    {/* this hits topics#index */}
                    <a href={`/subs/${sub.id}/topics`}>show sub and Topic</a>
                    <a href={`/subs/${sub.id}/edit`}>edit</a>
                    <a href={`/subs/${sub.id}`} data-method='delete'>delete</a>
                </div>
            )
        })
    } 

    const renderComments = ()=>{
        return comments.map( comment=>{
            return (
                <div>
                    <p>{comment.body}</p>

                </div>
            )
        })
    }

    const renderTopics = ()=> {
        return topics.map(topic => {
            return(
                <div>
                    <h1>{topic.name}</h1>
                </div>
            )
        })
    }

    return (
        <div>
           <h1>All Subs</h1>
           {renderSubs()}
           <hr />
           <h1>All Topics</h1>
           {renderTopics()}
           <hr />
           <h1>All COmments</h1>
           {renderComments()}
        </div>
    )
}

export default Comment