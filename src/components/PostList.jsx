import NewPost from './NewPost';
import Post from './Post';
import styles from './PostList.module.css';
import Modal from './Modal';
import PropTypes from 'prop-types';
import { useState } from 'react';

const PostList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map(({ author, text }) => (
            <Post author={author} text={text} key={text} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

PostList.propTypes = {
  isPosting: PropTypes.bool,
  onStopPosting: PropTypes.func,
};

export default PostList;
