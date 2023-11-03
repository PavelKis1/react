import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import SortSelect from './components/UI/select/SortSelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript2', body: 'Description' },
    { id: 3, title: 'JavaScript3', body: 'Description' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <SortSelect
          defaultValue={'Sort by'}
          options={[
            { value: 'title', name: 'Title' },
            { value: 'body', name: 'Descr' }
          ]}
        />
      </div>
      {posts.length
        ? <PostList remove={removePost} posts={posts} title={'Список постов JavaScript'} />
        : <h1 style={{ textAlign: 'center' }}>Posts is not defined</h1>
      }
    </div>
  );
}

export default App;
