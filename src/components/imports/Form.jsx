import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { UseForm } from '../../hooks/UseForm';

export const Form = () => {
    const { formData, errors, handleChange, validateForm, casas } = UseForm();
    const [formError, setFormError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setFormError(true);
            return;
        }

        setFormError(false);
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log('Respuesta del backend:', data);

            if (response.ok) {
                Swal.fire({
                    title: 'Excelente',
                    text: 'Datos enviados correctamente',
                    icon: 'success',
                }).then(() => {
                    navigate('/formulario-enviado');
                });
            } else {
                Swal.fire({
                    title: 'Ups',
                    text: 'Hubo un error al enviar los datos',
                    icon: 'error',
                });
            }
        } catch (error) {
            console.error('Error al enviar los datos:', error);

            Swal.fire({
                title: 'Ups',
                text: 'Error al enviar los datos',
                icon: 'error',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form" noValidate>
            <div className="campos-obligatorios">
                <p className="light-text">(*) Campos obligatorios</p>
            </div>

            {/* NOMBRE */}
            <div className="campo-precalificar-form">
                <label htmlFor="nombre" className="light-text" aria-label="Nombre del usuario">
                    *Nombre Completo:
                </label>
                <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
                {errors.nombre && (
                    <small className="text-danger" aria-live="assertive">
                        {errors.nombre}
                    </small>
                )}
            </div>

            {/* TELEFONO */}
            <div className="campo-precalificar-form">
                <label htmlFor="telefono" className="light-text" aria-label="Telefono del usuario">
                    *Teléfono:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    maxLength="13"
                />
                {errors.telefono && (
                    <small className="text-danger" aria-live="assertive">
                        {errors.telefono}
                    </small>
                )}
            </div>

            {/* EMAIL */}
            <div className="campo-precalificar-form">
                <label htmlFor="email" className="light-text" aria-label="email del usuario">
                    *Correo Electronico:
                </label>
                <input type="text" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && (
                    <small className="text-danger" aria-live="assertive">
                        {errors.email}
                    </small>
                )}
            </div>

            {/* TIPOS DE CASA */}
            <div className="campo-precalificar-form">
                <label htmlFor="casa" className="light-text" aria-label="Tipo de casa que quiere vender">
                    *Tipo de casa:
                </label>
                <select className="form-control" id="casa" name="casa" value={formData.casa} onChange={handleChange}>
                    {casas.map((casa) => (
                        <option key={casa} value={casa}>
                            {casa}
                        </option>
                    ))}
                </select>
                {errors.casa && (
                    <small className="text-danger" aria-live="assertive">
                        {errors.casa}
                    </small>
                )}
            </div>

            {/* Contenedor para el botón y spinner */}
            <div className="content-envio">
                <button type="submit" className="botonForm bold-text" title="Haz clic para enviarnos tus datos" disabled={loading}>
                    ENVIAR
                </button>

                {loading && (
                    <div className="spinner-container" aria-live="assertive">
                        <FontAwesomeIcon icon={faSpinner} spin />
                    </div>
                )}
            </div>

            {formError && (
                <div className="form-error" aria-live="assertive">
                    <p className="light-text">Completa el formulario.</p>
                </div>
            )}
        </form>
    );
};
