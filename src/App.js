import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import FormButton from './components/UI/button/FormButton';
import FormInput from './components/UI/input/FormInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript2', body: 'Description' },
    { id: 3, title: 'JavaScript3', body: 'Description' },
  ])

  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }])
    setPost({ title: '', body: '' })
  }

  return (
    <div className="App">
      <form>
        <FormInput
          value={posts.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
          type='text'
          placeholder='Name post'
        />
        <FormInput
          value={posts.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
          type='text'
          placeholder='Description'
        />
        <FormButton onClick={addNewPost} >Create Post</FormButton>
      </form>
      <PostList posts={posts} title={'Список постов JavaScript'} />
    </div>
  );
}

export default App;
