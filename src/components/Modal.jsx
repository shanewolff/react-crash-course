import PropTypes from "prop-types";
import styles from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
	return (
		<>
			<div className={styles.backdrop} onClick={onClose} />
			<dialog open className={styles.modal}>
				{children}
			</dialog>
		</>
	);
};

Modal.propTypes = {
	children: PropTypes.children,
	onClose: PropTypes.func,
};

export default Modal;
