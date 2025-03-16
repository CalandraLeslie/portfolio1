export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

export const validateRequired = (value) => {
    return value.trim() !== '';
};

export const validateForm = (formData) => {
    const errors = {};

    if (!validateRequired(formData.name)) {
        errors.name = 'Name is required';
    }

    if (!validateEmail(formData.email)) {
        errors.email = 'Email is invalid';
    }

    if (!validateRequired(formData.message)) {
        errors.message = 'Message is required';
    }

    return errors;
};