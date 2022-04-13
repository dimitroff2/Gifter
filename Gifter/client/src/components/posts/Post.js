import React, {useContext} from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";


const Post = ({ post }) => {
  const {user} = useContext(UserContext)
  // put a question mark in front to force it to read null anyway
  return (
    <Card className="m-4">
      
      <p className="text-left px-2">Posted by:<Link to={`/user/${user.id}`}> {post.userProfile?.name}</Link></p> 
      
      <CardImg top src={post.imageUrl} alt={post.title} />
      <CardBody>
      <Link to={`/posts/${post.id}`}>
            <strong>{post.title}</strong>
            </Link>
        <p>{post.caption}</p>
      </CardBody>
    </Card>
  );
};

export default Post;