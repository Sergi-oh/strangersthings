import { useParams, Link,} from 'react-router-dom';
import { useState, useEffect } from 'react';

const Post = ({ posts, auth, editPost })=> {
  const { id } = useParams();
  const post = posts.find(post => post._id === id);
  if(!post){
    return null;
  }

  return (
    <>
    <div>
      <h1>{ post.title }</h1>
      <h3>Posted by: {post.author.username}</h3>
      <p>Description: { post.description }</p>
      <p>Location: { post.location }</p>
      <form>
        <input/>
        <button>Update</button>
      </form>
      {auth._id === post.author._id ? <button>x</button>: ''}
    </div>
    <div>
      <Link to='/'>Return Home</Link>
    </div>
    </>
  );
};

export default Post;
