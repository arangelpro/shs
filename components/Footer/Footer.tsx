import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/components/Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles["Footer"]}>
			<Image
				className={styles["Footer-logo"]}
				src="/logo.png"
				alt="SHS Servicios Integrales"
				width={256}
				height={195}
			/>
			<div className={styles["Footer-info"]}>
				<span>Dirección: <strong>Mi dirección</strong></span>
				<span>Teléfono: <strong>Mi teléfono</strong></span>
				<span>Correo: <strong>Mi correo</strong></span>
			</div>
			<div className={styles["Footer-rrss"]}>
				<Link href="#facebook"><a><i className="fab fa-facebook-f"></i></a></Link>
				<Link href="#twitter"><a><i className="fab fa-twitter"></i></a></Link>
				<Link href="#instagram"><a><i className="fab fa-instagram"></i></a></Link>
			</div>
		</footer>
	);
};

export default Footer;