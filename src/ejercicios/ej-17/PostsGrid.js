import React, { useContext } from 'react';
import PostsContext from './PostsContext';
import Post from './Post';
import UsersContext from './UsersContext';

const PostsGrid = () => {
    const postsContext = useContext(PostsContext);
    const userContext = useContext(UsersContext);
    
    console.log(userContext);
    return (
        <div className="alert alert-primary">
            {postsContext.map(({ title, body, userId }) => <Post title={title} body={body} userId={userId}/>)}
        </div>
    );
};


export default PostsGrid;