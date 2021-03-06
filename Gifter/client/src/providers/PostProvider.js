import React, { useState, useContext } from "react";
import { UserContext } from "./UserProvider";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);
  // const { user, setUser } = useContext(UserContext);

  const getAllPosts = () => {
    return fetch("/api/Post")
      .then((res) => res.json())
      .then(setPosts);
  };

  const addPost = (post) => {
    return fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  };

  const getPost = (id) => {
    return fetch(`/api/post/${id}`).then((res) => res.json());
};




  return (
    <PostContext.Provider value={{ posts, getAllPosts, addPost, getPost }}>
      {props.children}
    </PostContext.Provider>
  );
};