import React, { useEffect, useState } from 'react';
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import { getPageCount } from '../utils/pages';
import FormButton from '../components/UI/button/FormButton';
import Modal from '../components/UI/modal/Modal';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import Loader from '../components/UI/loader/Loader';
import Pagination from '../components/UI/pagination/Pagination';
import PostList from '../components/PostList';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [getPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getALL(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });

    useEffect(() => {
        getPosts(limit, page)
    }, []);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page);
        getPosts(limit, page);
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
            {postError &&
                <h1>{postError}</h1>}
            {isPostsLoading
                ? <Loader />
                : <PostList
                    remove={removePost}
                    posts={sortedAndSearchedPosts}
                    title={'Список постов JavaScript'}
                />
            }
            <Pagination
                page={page}
                totalPages={totalPages}
                changePage={changePage}
            />
        </div>
    );
}

export default Posts;
