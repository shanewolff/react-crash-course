import { useState } from 'react';
import styles from './NewPost.module.css';
import PropTypes from 'prop-types';

const NewPost = ({ onCancel }) => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const postData = {
      text,
      author,
    };

    console.log(postData);
    onCancel();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={textChangeHandler} />
      </p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' required onChange={authorChangeHandler} />
      </p>
      <p className={styles.actions}>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button type='submit'>Submit</button>
      </p>
    </form>
  );
};

NewPost.propTypes = {
  onCancel: PropTypes.func,
};

export default NewPost;
