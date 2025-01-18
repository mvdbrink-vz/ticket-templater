// Validation rules for specific fields
const validationRules = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^[0-9\s\-+()]{10,}$/,
    macAddress: /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
    ipAddress: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    zipCode: /^\d{4}\s?[A-Za-z]{2}$/  // Dutch postal code format
};

export function validateForm(inputs) {
    let isValid = true;
    const errors = [];
    const errorFields = [];

    inputs.forEach(input => {
        const label = input.getAttribute('data-label');
        const value = input.value.trim();
        
        // Required field validation
        if (!value) {
            isValid = false;
            const message = `${label} is required`;
            errors.push(message);
            errorFields.push({ field: input, message });
            return;
        }

        let errorMessage = null;

        // Email validation
        if (label.toLowerCase().includes('e-mail') && !validationRules.email.test(value)) {
            errorMessage = 'Please enter a valid email address';
        }
        // Phone validation
        else if (label.toLowerCase().includes('phone') && !validationRules.phone.test(value)) {
            errorMessage = 'Please enter a valid phone number (min. 10 digits)';
        }
        // MAC address validation
        else if (label.toLowerCase().includes('mac') && !validationRules.macAddress.test(value)) {
            errorMessage = 'Please enter a valid MAC address (XX:XX:XX:XX:XX:XX)';
        }
        // IP address validation
        else if ((label.toLowerCase().includes('ip') || label === 'Gateway:' || label === 'Subnetmasker:') 
            && !validationRules.ipAddress.test(value)) {
            errorMessage = 'Please enter a valid IP address';
        }
        // ZIP code validation
        else if (label === 'ZIP code:' && !validationRules.zipCode.test(value)) {
            errorMessage = 'Please enter a valid postal code (1234 AB)';
        }

        if (errorMessage) {
            isValid = false;
            errors.push(`${label}: ${errorMessage}`);
            errorFields.push({ field: input, message: errorMessage });
        }
    });

    // Add additional validation rules
    const additionalRules = {
        accessId: /^[A-Z0-9]{8,}$/i,  // Alphanumeric, min 8 chars
        sipeu: /^[A-Z0-9-]{6,}$/i,    // Alphanumeric with hyphens
        vtp: /^[0-9]{4,6}$/,          // 4-6 digit number
    };

    // Add specific field validations
    inputs.forEach(input => {
        const label = input.getAttribute('data-label').toLowerCase();
        const value = input.value.trim();

        // Add specific validations for technical fields
        if (label.includes('access id') && !additionalRules.accessId.test(value)) {
            errorFields.push({ field: input, message: 'Please enter a valid Access ID' });
        }
        if (label.includes('sipeu') && !additionalRules.sipeu.test(value)) {
            errorFields.push({ field: input, message: 'Please enter a valid SIPEU ID' });
        }
        if (label.includes('vtp') && !additionalRules.vtp.test(value)) {
            errorFields.push({ field: input, message: 'Please enter a valid VTP number' });
        }
    });

    return { isValid, errors, errorFields };
}
