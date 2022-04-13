// import React, { useState } from "react";

// export const UserContext = React.createContext();


// export const UserProvider = (props) => {
//     const [user, setUser] = useState([]);
    

//   const getAllUsers = () => {
//     return fetch("/api/UserProfile")
//       .then((res) => res.json())
//       .then(setUser);
//   };

//   const addUser = (user) => {
//     return fetch("/api/UserProfile", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     });
//   };



//   return (
//     <UserContext.Provider value={{ user, getAllUsers, addUser, getUser, getPostByUsers }}>
//       {props.children}
//     </UserContext.Provider>
//   );

// }

import React, { useState } from "react";



export const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  



  const login = (userObject) => {
    debugger;
    fetch(`api/userprofile/getbyemail?email=${userObject.email}`)
      .then((r) => r.json())
      .then((userObjFromDB) => {

        localStorage.setItem("gifterUser", JSON.stringify(userObjFromDB));
        setIsLoggedIn(true);
      })
  };

  const register = (userObject) => {
    fetch("/api/userprofile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    })
      .then((response) => response.json())
      .then((userObject) => {
        localStorage.setItem("gifterUser", JSON.stringify(userObject));
      });
  };

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  const getAllUsers = () => {
        return fetch("/api/UserProfile")
          .then((res) => res.json())
          .then(setUser);
      };

  const getUser = (id) => {
        return fetch(`/api/UserProfile/${id}`).then((res) => res.json());
    };
    
  const getPostByUsers = (id) => {
    return fetch(`https://localhost:5001/api/UserProfile/UserPosts/${id}`).then((res) => res.json());
    };

  return (
    <UserContext.Provider
      value={{ getAllUsers, getUser, getPostByUsers, login, register, user, logout }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
