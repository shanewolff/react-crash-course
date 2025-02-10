import { MdPostAdd, MdMessage } from "react-icons/md";
import styles from "./MainHeader.module.css";
import PropTypes from "prop-types";

const MainHeader = ({ onCreatePost }) => {
	return (
		<header className={styles.header}>
			<h1 className={styles.logo}>
				<MdMessage />
				React Poster
			</h1>
			<p>
				<button type="button" className={styles.button} onClick={onCreatePost}>
					<MdPostAdd size={18} />
					New Post
				</button>
			</p>
		</header>
	);
};

MainHeader.propTypes = {
	onCreatePost: PropTypes.func,
};

export default MainHeader;
