import React, { useContext, useState } from "react";
import { List } from "../../Context";
import styles from "./modal.module.css";

const Modal = ({ setModal }) => {
	const { modalData, handleEditTask } = useContext(List);
	const [task, setTask] = useState(modalData.task);

	return (
		<div className={styles.modalBackground}>
			<div className={styles.modalContainer}>
				<div className={styles.CloseBtn}>
					<button
						onClick={() => {
							setModal(false);
						}}
					>
						<svg
							width='25'
							height='25'
							viewBox='0 0 50 50'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M3 25H48.3125'
								stroke='black'
								strokeWidth='5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M18.75 2.17392L1.5625 25L18.75 47.8261'
								stroke='black'
								strokeWidth='5'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
				</div>
				<div className={styles.modalBody}>
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
			</div>
		</div>
	);
};

export default Modal;
