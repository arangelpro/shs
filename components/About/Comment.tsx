import React from 'react';
import styles from '@styles/components/Comment.module.scss';

const Comment = () => {
	return (
		<div className={styles["Comment"]}>
			<div className={styles["Comment-image"]}>
				<div></div>
				<small>Anthony Rangel</small>
			</div>
			<p className={styles["Comment-description"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam perspiciatis inventore quo incidunt maxime temporibus, sit assumenda quisquam omnis odit qui, error doloremque quae asperiores enim veniam cum ex.</p>
		</div>
	);
};

export default Comment;