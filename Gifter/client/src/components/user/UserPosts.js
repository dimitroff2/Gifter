import React, { useEffect, useContext, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { UserContext } from "../../providers/UserProvider";
import { useParams } from "react-router-dom";


 const UserPosts = () => {
  const [user, setUser] = useState({});
  const { getUser } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
      debugger
    getUser(id).then(setUser);
  }, [id]);

//   if (!user) {
//     return null;
//   }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-6">
          
          <ListGroup>
            {user.comments?.map((c) => (
              <ListGroupItem>{c.message}</ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default UserPosts