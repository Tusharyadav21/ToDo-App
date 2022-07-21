import React, { useContext, useState } from "react";
import { List } from "../../Context";
import styles from "./modal.module.css";
import pen from "../../assets/Casual life 3D - 28.png";

import back from "../../assets/arrow-left.svg";

const Modal = ({ setModal }) => {
	const { modalData, handleEditTask } = useContext(List);
	const [task, setTask] = useState(modalData.task);

	return (
		<div className={styles.modalBackground} onClick={() => setModal(false)}>
			<div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
				<div className={styles.CloseBtn}>
					<button
						onClick={() => {
							setModal(false);
						}}
					>
						<img src={back} alt='Back Button' />
					</button>
				</div>
				<div className={styles.modalBody}>
					<h2>Edit Task</h2>
					<form
						onSubmit={() => {
							handleEditTask(modalData, task);
						}}
					>
						<textarea
							id={styles.modal_task_textarea}
							type='text'
							placeholder='Task'
							value={task}
							onChange={(e) => {
								setTask(e.target.value);
							}}
						/>
						<input id={styles.modal_task_submit} type='submit' value='Add' />
					</form>
				</div>
				<div className={styles.pen_image}>
					<img src={pen} alt='Pen' />
				</div>
			</div>
		</div>
	);
};

export default Modal;
