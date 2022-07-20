import React from "react";
import styles from "./modal.module.css";

const Modal = ({ setModal }) => {
	return (
		<div className={styles.modalBackground}>
			<div className={styles.modalContainer}>
				<div className={styles.CloseBtn}>
					<button
						onClick={() => {
							setModal(false);
						}}
					>
						X
					</button>
				</div>
				<div className={styles.modalBody}>Modal Body</div>
			</div>
		</div>
	);
};

export default Modal;
