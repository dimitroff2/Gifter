import React, { useState } from "react";

export const UserContext = React.createContext();


export const UserProvider = (props) => {
    const [user, setUser] = useState([]);
    

  const getAllUsers = () => {
    return fetch("/api/UserProfile")
      .then((res) => res.json())
      .then(setUser);
  };

  const addUser = (user) => {
    return fetch("/api/UserProfile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  const getUser = (id) => {
    return fetch(`/api/UserProfile/${id}`).then((res) => res.json());
};

const getPostByUsers = (id) => {
return fetch(`https://localhost:5001/api/UserProfile/UserPosts/${id}`).then((res) => res.json());
};

  return (
    <UserContext.Provider value={{ user, getAllUsers, addUser, getUser, getPostByUsers }}>
      {props.children}
    </UserContext.Provider>
  );

}