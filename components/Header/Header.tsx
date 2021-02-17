import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/components/Header.module.scss';


const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	const mediaQuery = (event: MediaQueryListEvent) => {
		if (!event.matches) {
			setShowMenu(false);
		}
	}
	
	useEffect(() => {
		const ipad = window.matchMedia('screen and (max-width: 991px)');
		ipad.addEventListener("change", mediaQuery);
		return () => {
		  ipad.removeEventListener('change', mediaQuery);
		};
	}, []);
	return (		
		<header className={styles["Header"]}>
			<div className={styles["Header-menu-burger"]} onClick={() => setShowMenu(!showMenu)}>
				<i className="fas fa-bars"></i>
			</div>
			<nav className={styles["Header-nav"]}>
				<div className={styles["Header-nav-logo"]}>
					<Image
						src="/logo.png"
						alt="SHS Servicios Integrales"
						width={79}
						height={60}
					/>
				</div>
				<ul className={`${styles["Header-nav-menu"]} ${showMenu ? styles["Header-nav-menu-show"] : ''}`}>
					<li className="active">
						<Link href="#home"><a>Inicio</a></Link>
					</li>
					<li>
						<Link href="#services"><a>Servicios</a></Link>
					</li>
					<li>
						<Link href="#about"><a>Nosotros</a></Link>
					</li>
					<li>
						<Link href="#contact"><a>Contáctanos</a></Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;