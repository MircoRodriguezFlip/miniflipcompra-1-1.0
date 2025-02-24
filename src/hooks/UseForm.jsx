import { useState } from 'react';

export const UseForm = () => {
    const initialState = {
        nombre: '',
        telefono: '',
        email: '',
        casa: '',
    };

    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const casas = ['Tipo de Casa', 'Vandalizada', 'Hipotecada'];

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'telefono') {
            // Asegura que solo se permitan números, añade prefijo +52 si no está presente
            const cleanValue = value.replace(/\D/g, ''); // Elimina caracteres no numéricos
            const formattedValue = cleanValue.startsWith('52') ? '+' + cleanValue : '+52' + cleanValue;
            setFormData((prev) => ({ ...prev, telefono: formattedValue }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }

        // Limpia errores específicos del campo modificado
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.nombre.trim()) {
            newErrors.nombre = 'Por favor, ingresa tu nombre completo';
        }

        if (!/^\+52\d{10}$/.test(formData.telefono)) {
            newErrors.telefono = 'Por favor, ingresa un número de teléfono válido';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Por favor, ingresa tu correo electrónico';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Por favor, ingresa un correo electrónico válido';
        }

        if (formData.casa === '' || formData.casa === 'Tipo de Casa') {
            newErrors.casa = 'Por favor, selecciona un tipo de casa válido';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const resetForm = () => {
        setFormData(initialState);
        setErrors({});
    };

    return { formData, setFormData, errors, handleChange, validateForm, casas, resetForm };
};
