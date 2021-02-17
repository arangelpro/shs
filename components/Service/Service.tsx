import React, {useState} from 'react';
import styles from '@styles/components/Service.module.scss';
type ServiceProps = {
	positionServiceImageLeft: Boolean
}
const Service = ({positionServiceImageLeft}:ServiceProps) => {
	return (
		<section className={styles["Service"]}>
			<div className={`${styles["Service-image"]} ${positionServiceImageLeft ? styles["Service-image-left"] + " flex-order" : styles["Service-image-right"]}`}>
				<div className={styles["Service-image-wrapper"]}><p>IMAGEN</p></div>
			</div>

			<div className={`${styles["Service-info"]}`}>
				<div className={styles["Service-info-wrapper"]}>
					<div className={styles["Service-info-icon"]}>
						<p>ICON</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Service;