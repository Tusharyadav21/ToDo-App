import React, { useContext } from "react";
import { List } from "../Context";
import styles from "../App.module.css";
import check from "../assets/check.svg";
import notStarted from "../assets/Not started.svg";
import trash from "../assets/trash.svg";

export const AllTab = () => {
	const { todo, setModal, setModalData, handleCheckboxChange, handleRemoveTask } = useContext(List);

	return (
		<div className={styles.list_container}>
			{todo === null || todo?.length === 0 ? (
				<h4>No Items</h4>
			) : (
				todo
					?.slice(0)
					?.reverse()
					?.map((el) => (
						<div key={el.id} className={styles.list_items}>
							<div onClick={() => handleCheckboxChange(el)}>
								{el.checked ? (
									<img src={check} alt='Completed Button' />
								) : (
									<img src={notStarted} alt='Not Completed Button' />
								)}
							</div>
							<h3
								className={`${el.checked ? styles.checked : ""}`}
								onClick={() => {
									setModalData(el);
									setModal(true);
								}}
							>
								{el.task}
							</h3>
							<div onClick={() => handleRemoveTask(el)}>
								<img src={trash} alt='Delete Task Button' />
							</div>
						</div>
					))
			)}
		</div>
	);
};

export const ActiveTab = () => {
	const { todo, setModal, setModalData, handleCheckboxChange, handleRemoveTask } = useContext(List);

	return (
		<div>
			{todo === null || todo?.length === 0 ? (
				<h4>No Items</h4>
			) : (
				todo
					.filter((el) => el.checked === false)
					.map((el) => (
						<div key={el.id} className={styles.list_items}>
							<div onClick={() => handleCheckboxChange(el)}>
								{el.checked ? (
									<img src={check} alt='Completed Button' />
								) : (
									<img src={notStarted} alt='Not Completed Button' />
								)}
							</div>
							<h3
								className={`${el.checked ? styles.checked : ""}`}
								onClick={() => {
									setModalData(el);
									setModal(true);
								}}
							>
								{el.task}
							</h3>
							<div onClick={() => handleRemoveTask(el)}>
								<img src={trash} alt='Delete Task Button' />
							</div>
						</div>
					))
			)}
		</div>
	);
};

export const CompletedTab = () => {
	const { todo, setModal, setModalData, handleCheckboxChange, handleRemoveTask } = useContext(List);

	return (
		<div>
			{todo === null || todo?.length === 0 ? (
				<h4>No Items</h4>
			) : (
				todo
					.filter((el) => el.checked === true)
					.map((el) => (
						<div key={el.id} className={styles.list_items}>
							<div onClick={() => handleCheckboxChange(el)}>
								{el.checked ? (
									<img src={check} alt='Completed Button' />
								) : (
									<img src={notStarted} alt='Not Completed Button' />
								)}
							</div>
							<h3
								className={`${el.checked ? styles.checked : ""}`}
								onClick={() => {
									setModalData(el);
									setModal(true);
								}}
							>
								{el.task}
							</h3>
							<div onClick={() => handleRemoveTask(el)}>
								<img src={trash} alt='Delete Task Button' />
							</div>
						</div>
					))
			)}
		</div>
	);
};
