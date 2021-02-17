import React from 'react';
import Comment from './Comment';
import styles from '@styles/components/About.module.scss';

const About = () => {
	return (
		<section id="about" className={styles["About"]}>
			<h1 className="section-title">Experiencia</h1>
			<div className={styles["About-content"]}>
				<p className={styles["About-description"]}>Más de 20 años de experiencia a tu servicio</p>
				<div className={styles["About-client"]}>
					<h3 className={styles["About-client-title"]}>Clientes que nos avalan</h3>
					<div className={styles["About-comments"]}>
						<div className={styles["About-comments-left"]}><i className="fas fa-caret-left"></i></div>
						<Comment />
						<Comment />
						<Comment />
						<div className={styles["About-comments-right"]}><i className="fas fa-caret-right"></i></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;