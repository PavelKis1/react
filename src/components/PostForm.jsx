import React, { useState } from 'react'
import FormInput from './UI/input/FormInput'
import FormButton from './UI/button/FormButton';

function PostForm({ create }) {
    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({ title: '', body: '' });
    }

    return (
        <form>
            <FormInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type='text'
                placeholder='Name post'
            />
            <FormInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type='text'
                placeholder='Description'
            />
            <FormButton onClick={addNewPost} >Create Post</FormButton>
        </form>
    )
}

export default PostForm