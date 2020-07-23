import React, { useEffect, useState, useContext } from 'react';
import { getPosts, getUsers } from "./api";
import PostsContext from "./PostsContext";
import UsersContext from "./UsersContext";
import PostsGrid from './PostsGrid';


const App = () => {

    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getPostsApi();
        getUsersApi();
    }, [])

    const getPostsApi = async () => {
        const posts = await getPosts();
        setPosts(posts);
    }

    const getUsersApi = async () => {
        const users = await getUsers();
        setUsers(users);
    }

    return (
        <div>
            <PostsContext.Provider value={posts}>
                <UsersContext.Provider value={users}>
                    <PostsGrid />
                </UsersContext.Provider>
            </PostsContext.Provider>

        </div>
    );
};

export default App;