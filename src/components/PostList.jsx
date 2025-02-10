import NewPost from './NewPost';
import Post from './Post';
import styles from './PostList.module.css';
import Modal from './Modal';
import PropTypes from 'prop-types';

const PostList = ({ isPosting, onStopPosting }) => {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post author='Max Smith' text='NextJS is awesome!' />
      </ul>
    </>
  );
};

PostList.propTypes = {
  isPosting: PropTypes.bool,
  onStopPosting: PropTypes.func,
};

export default PostList;
