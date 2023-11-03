import React from 'react'
import FormButton from './UI/button/FormButton'

function PostItem(props) {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <FormButton onClick={() => props.remove(props.post)}>
                    Delete
                </FormButton>
            </div>
        </div>
    )
}

export default PostItem
