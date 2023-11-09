import React, { useEffect, useRef, useState } from 'react';
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import { getPageCount } from '../utils/pages';
import FormButton from '../components/UI/button/FormButton';
import Modal from '../components/UI/modal/Modal';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import Loader from '../components/UI/loader/Loader';
import PostList from '../components/PostList';
import { useObserver } from '../hooks/useObserver';
import SortSelect from '../components/UI/select/SortSelect';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();

    const [getPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getALL(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    });

    useEffect(() => {
        getPosts(limit, page)
    }, [page, limit]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <FormButton style={{ marginTop: '30px' }} onClick={() => { setModal(true) }}>
                New post
            </FormButton>
            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </Modal>
            <hr style={{ margin: '15px 0' }} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <SortSelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue='Cout of posts'
                options={[
                    { value: 5, name: '5' },
                    { value: 10, name: '10' },
                    { value: 25, name: '25' },
                    { value: -1, name: 'All posts' }
                ]}
            />
            {postError &&
                <h1>{postError}</h1>
            }
            <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title={'Список постов JavaScript'}
            />
            <div ref={lastElement}></div>
            {isPostsLoading && <Loader />}
        </div >
    );
}

export default Posts;
