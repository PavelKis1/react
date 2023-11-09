import About from "../pages/About";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import PostsPage from "../pages/PostsPage";

export const privateRouts = [
    { path: '/about', component: <About />, exact: true },
    { path: '/posts', component: <Posts />, exact: true },
    { path: '/posts/:id', component: <PostsPage />, exact: true }
]

export const publicRouts = [
    { path: '/login', component: <Login />, exact: true }
]