import React, { useContext, useState, useEffect } from 'react';
import UsersContext from './UsersContext';
import { getUsers } from './api';

const Post = ({ title, body, userId }) => {
    const userContext = useContext(UsersContext);
    const [myUser, setMyUser] = useState();

    const getUserByID = async () => {
        const usr = await userContext.find( user => user.id == userId);
        setMyUser(usr);
    }

    useEffect(()=>{
        getUserByID();
    },[userContext])

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{body}</p>
                <p className="blockquote-footer">{myUser && myUser.email}</p>
            </div>
        </div>
    );
};

export default Post;