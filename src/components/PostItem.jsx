import React from 'react'

function PostItem(props) {
    return (
        <div className="post">
            <div className="post__content">
                <strong>1. Javascript</strong>
                <div>
                    JavaScript - язык
                </div>
            </div>
            <div className="post__btns">
                <button>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default PostItem
