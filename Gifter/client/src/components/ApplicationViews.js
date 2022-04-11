import React from "react";
import { Routes, Route } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { PostProvider } from "./providers/PostProvider";


const ApplicationViews = () => {
  return (
  <PostProvider>
    <Routes>
      <Route path="/" element= {<PostList />} />

      <Route path="/posts/add" element={<PostForm />} />

      <Route path="/posts/:id" element={/* TODO: Post Details Component */} />
    </Routes>
    </PostProvider>
  );
};

export default ApplicationViews;
