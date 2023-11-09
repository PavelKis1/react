import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';

function PostsPage() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    })
    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, [])
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h1>Page post ID = {params.id}</h1>
            {isLoading
                ? <Loader />
                : <h2>
                    {post.id}. {post.title}
                </h2>
            }
            <h3>
                Комментарии
            </h3>
            {isComLoading
                ? <Loader />
                : <div style={{
                    padding: '50px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}>
                    {comments.map(comm =>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            border: '1px solid teal',
                            padding: '20px',

                        }}>
                            <h4>{comm.email}</h4>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default PostsPage