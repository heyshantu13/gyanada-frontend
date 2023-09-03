// validationUtils.js
export const validateField = (fieldName, value) => {
    if (fieldName === 'email') {
      if (!value || !value.trim()) {
        return 'Email field is required.';
      }
      // You can add more advanced email validation here if needed
    }
  
    if (fieldName === 'password') {
      if (!value || !value.trim()) {
        return 'Password field is required.';
      }
    }
  
    return '';
  };
  