import React, { useEffect, useContext, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { UserContext } from "../../providers/UserProvider";
import { useParams } from "react-router-dom";
import Post from "../posts/Post";
import User from "./User";
// import { PostContext } from "../../providers/PostProvider";

//User from User.js
//user from UserProvider.js


 const UserPosts = () => {
     const{user, getPostByUsers} = useContext(UserContext);
     const [userState, setUserState] = useState({})
  
  const { id } = useParams();

//   useEffect(() => {
//       debugger
//     getUser(id).then(setUser);
//   }, [id]);

  useEffect(() => {
    getPostByUsers(id)
    .then(setUserState);
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
          <p>HIIII</p>
          
            {userState.posts?.map((c) => (
              <Post key={id} post={c} />
            ))}
          
        </div>
      </div>
    </div>
  );
};

export default UserPosts