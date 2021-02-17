import React from 'react';
import styles from '@styles/components/Contact.module.scss';

const Contact = () => {
	return (
		<section id="contact" className={styles["Contact"]}>
			<div className="section-title">Contáctanos</div>
			<div className={styles["Contact-content"]}>
				<form>
					<div className="form-group col-12 col-md-6">
						<input type="text" className="form-control" placeholder="Nombre" />
					</div>
					<div className="form-group col-12 col-md-6">
						<input type="text" className="form-control" placeholder="Apellido" />
					</div>
					<div className="form-group col-12 col-md-6">
						<input type="text" className="form-control" placeholder="Correo" />
					</div>
					<div className="form-group col-12 col-md-6">
						<input type="text" className="form-control" placeholder="Teléfono" />
					</div>
					<div className="form-group col-12 col-md-6">
						<input type="text" className="form-control" placeholder="Ciudad" />
					</div>
					<div className="form-group col-12 col-md-6">
						<input type="text" className="form-control" placeholder="Servicio Requerido" />
					</div>
					<div className="form-group col-12">
						<input type="text" className="form-control" placeholder="Asunto" />
					</div>
					<div className="form-group col-12">
						<textarea name="comment" id="comment" className="form-control" placeholder="Descríbenos que necesitas"></textarea>
					</div>
					<input type="submit" className="btn" />
				</form>
			</div>
		</section>
	);
};

export default Contact;