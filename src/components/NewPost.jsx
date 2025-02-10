import styles from "./NewPost.module.css";
import PropTypes from "prop-types";

const NewPost = ({ onTextChange, onAuthorChange }) => {
	return (
		<form className={styles.form}>
			<p>
				<label htmlFor="body">Text</label>
				<textarea id="body" required rows={3} onChange={onTextChange} />
			</p>
			<p>
				<label htmlFor="name">Your name</label>
				<input type="text" id="name" required onChange={onAuthorChange} />
			</p>
		</form>
	);
};

NewPost.propTypes = {
	onTextChange: PropTypes.func.isRequired,
	onAuthorChange: PropTypes.func.isRequired,
};

export default NewPost;
