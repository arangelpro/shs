import React from 'react';
import Link from 'next/link';
import styles from '@styles/components/Hero.module.scss';

const Hero = () => {
	return (
		<section className={styles["Hero"]}>
			<div className={styles["Hero-image"]}>
				<div className={styles["Hero-image-wrapper"]}><p>IMAGEN</p></div>
			</div>

			<div className={styles["Hero-info"]}>
				<div className={styles["Hero-info-wrapper"]}>
					<h1>Más de 20 años de experiencia a tu servicio</h1>
					<Link href="#contact"><a>Contáctanos</a></Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;