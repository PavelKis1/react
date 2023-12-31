import React from 'react'
import FormButton from './UI/button/FormButton'
import { useNavigate } from 'react-router-dom'
function PostItem(props) {
    const router = useNavigate();
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <FormButton onClick={() => router(`/posts/${props.post.id}`)}>
                    Open
                </FormButton>
                <FormButton onClick={() => props.remove(props.post)}>
                    Delete
                </FormButton>
            </div>
        </div>
    )
}

export default PostItem
