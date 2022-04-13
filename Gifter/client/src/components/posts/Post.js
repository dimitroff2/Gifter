import React, {useContext, useEffect} from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";


const Post = ({ post }) => {
  //  const {user} = useContext(UserContext)
  // put a question mark in front to force it to read null anyway
  const {id} = useParams();
  const { user, getPostByUsers } = useContext(UserContext);
  
    const currentUser = localStorage.getItem("gifterUser");

    useEffect(()=> {
      getPostByUsers(id)
  }, []);
  
    

  return (
    <Card className="m-4">
      
      <p className="text-left px-2">Posted by:<Link to={`/user/${post.userProfileId}`}> {post.userProfile?.name}</Link></p> 
      
      <CardImg top src={post.imageUrl} alt={post.title} />
      <CardBody>
      <Link to={`/posts/${post.id}`}>
            <strong>{post.title}</strong>
            </Link>
        <p>{post.caption}</p>
        { currentUser === post.userProfileId } 
      </CardBody>
    </Card>
  );
};

export default Post;