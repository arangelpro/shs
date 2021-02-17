import React from 'react';
import Hero from '@components/Hero/Hero';
import Service from '@components/Service/Service';
import About from '@components/About/About';
import Contact from '@components/Contact/Contact';
import styles from '@styles/pages/Home.module.scss';

const Home = () => {
	return (
		<main className={styles["Home"]}>
			<Hero />
			<section id="services" className={styles["Home-services"]}>
				<div className="container">
					<h2 className="section-title">Servicios</h2>
					<div className={styles["Home-services-content"]}>
						<Service positionServiceImageLeft={false}/>
						<Service positionServiceImageLeft={true}/>
						<Service positionServiceImageLeft={false}/>
						<Service positionServiceImageLeft={true}/>
					</div>
				</div>
			</section>
			<About />
			<Contact />
		</main>
	);
};

export default Home;