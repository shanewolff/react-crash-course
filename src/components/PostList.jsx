import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostList.module.css";
import Modal from "./Modal";
import PropTypes from "prop-types";

const PostList = ({ isPosting, onStopPosting }) => {
	const [text, setText] = useState("");
	const [author, setAuthor] = useState("");

	const textChangeHandler = (event) => {
		setText(event.target.value);
	};

	const authorChangeHandler = (event) => {
		setAuthor(event.target.value);
	};

	return (
		<>
			{isPosting && (
				<Modal onClose={onStopPosting}>
					<NewPost
						onTextChange={textChangeHandler}
						onAuthorChange={authorChangeHandler}
					/>
				</Modal>
			)}
			<ul className={styles.posts}>
				<Post author={author} text={text} />
				<Post author="Max Smith" text="NextJS is awesome!" />
			</ul>
		</>
	);
};

PostList.propTypes = {
	isPosting: PropTypes.bool,
	onStopPosting: PropTypes.func,
};

export default PostList;
