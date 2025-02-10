import PropTypes from "prop-types";
import styles from "./Post.module.css";

const Post = ({ author, text }) => {
	return (
		<div className={styles.post}>
			<p className={styles.author}>{author || "\u200B"}</p>
			<p className={styles.text}>{text || "\u200B"}</p>
		</div>
	);
};

Post.propTypes = {
	author: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default Post;
