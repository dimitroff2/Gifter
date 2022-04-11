import React from "react";
import { Routes, Route } from "react-router-dom";
import PostList from "./posts/PostList";
import  PostForm  from "./posts/PostForm";
import  PostDetails  from "./posts/PostDetails";
import { PostProvider } from "../providers/PostProvider";
import { UserProvider } from "../providers/UserProvider";
import UserPosts from "../components/user/UserPosts";


 const ApplicationViews = () => {
  return (
  <PostProvider>
    <UserProvider>
    <Routes>
      
      <Route path="/" element= {<PostList />} />

      <Route path="/posts/add" element={<PostForm />} />

      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/user/:id" element={<UserPosts />} />
    </Routes>
    </UserProvider>
    </PostProvider>
  );
};

export default ApplicationViews;


