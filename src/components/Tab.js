import React, { useContext } from "react";
import { List } from "../Context";
import styles from "../App.module.css";
// import check from "../assets/check.png";

export const AllTab = () => {
	const { todo, setTodo } = useContext(List);

	const handleCheckboxChange = (el) => {
		el.checked = !el.checked;
		setTodo([...todo]);
	};

	const handleRemoveTask = (el) => {
		const filteredTodo = todo.filter((x) => x.id !== el.id);
		setTodo([...filteredTodo]);
	};

	return (
		<div className={styles.list_container}>
			{todo
				.slice(0)
				.reverse()
				.map((el) => (
					<div key={el.id} className={styles.list_items}>
						<div onClick={() => handleCheckboxChange(el)}>
							<svg
								width='56'
								height='46'
								viewBox='0 0 56 46'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g filter='url(#filter0_d_9_14)'>
									<path
										d='M3 21L19.6667 40L53 2'
										stroke='#3EBB7F'
										strokeWidth='4'
										strokeLinejoin='round'
									/>
								</g>
								<defs>
									<filter
										id='filter0_d_9_14'
										x='-2.50352'
										y='0.681124'
										width='61.007'
										height='49.3189'
										filterUnits='userSpaceOnUse'
										colorInterpolationFilters='sRGB'
									>
										<feFlood floodOpacity='0' result='BackgroundImageFix' />
										<feColorMatrix
											in='SourceAlpha'
											type='matrix'
											values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
											result='hardAlpha'
										/>
										<feOffset dy='4' />
										<feGaussianBlur stdDeviation='2' />
										<feComposite in2='hardAlpha' operator='out' />
										<feColorMatrix
											type='matrix'
											values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
										/>
										<feBlend
											mode='normal'
											in2='BackgroundImageFix'
											result='effect1_dropShadow_9_14'
										/>
										<feBlend
											mode='normal'
											in='SourceGraphic'
											in2='effect1_dropShadow_9_14'
											result='shape'
										/>
									</filter>
								</defs>
							</svg>
						</div>
						<h4 className={`${el.checked ? styles.checked : ""}`}>{el.task}</h4>
						<div onClick={() => handleRemoveTask(el)}>
							<svg
								width='50'
								height='50'
								viewBox='0 0 50 50'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g clipPath='url(#clip0_76_979)'>
									<path
										d='M13.7407 15V39C13.7407 40.1046 14.6362 41 15.7407 41H34.2593C35.3638 41 36.2593 40.1046 36.2593 39V15M9 15H41'
										stroke='black'
										strokeWidth='2'
										strokeLinecap='round'
									/>
									<path
										d='M18 9H32'
										stroke='black'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path d='M21 24V33' stroke='black' strokeWidth='2' strokeLinecap='round' />
									<path d='M29 24V33' stroke='black' strokeWidth='2' strokeLinecap='round' />
								</g>
							</svg>
						</div>
					</div>
				))}
		</div>
	);
};

export const ActiveTab = () => {
	const { todo, setTodo } = useContext(List);

	const handleCheckboxChange = (el) => {
		el.checked = !el.checked;
		setTodo([...todo]);
	};

	const handleRemoveTask = (el) => {
		const filteredTodo = todo.filter((x) => x.id !== el.id);
		setTodo([...filteredTodo]);
	};

	return (
		<div>
			{todo
				.filter((el) => el.checked === false)
				.map((el) => (
					<div key={el.id} className={styles.list_items}>
						<input type='checkbox' checked={el.checked} onChange={() => handleCheckboxChange(el)} />
						<h4 className={`${el.checked ? styles.checked : ""}`}>{el.task}</h4>
						<span onClick={() => handleRemoveTask(el)}>X</span>
					</div>
				))}
		</div>
	);
};

export const CompletedTab = () => {
	const { todo, setTodo } = useContext(List);

	const handleCheckboxChange = (el) => {
		el.checked = !el.checked;
		setTodo([...todo]);
	};

	const handleRemoveTask = (el) => {
		const filteredTodo = todo.filter((x) => x.id !== el.id);
		setTodo([...filteredTodo]);
	};

	return (
		<div>
			{todo
				.filter((el) => el.checked === true)
				.map((el) => (
					<div key={el.id} className={styles.list_items}>
						<input
							id={styles.checkbox}
							type='checkbox'
							checked={el.checked}
							onChange={() => handleCheckboxChange(el)}
						/>
						<h3 className={`${el.checked ? styles.checked : ""}`}>{el.task}</h3>
						<span onClick={() => handleRemoveTask(el)}>X</span>
					</div>
				))}
		</div>
	);
};
