// Validation rules for specific fields
export const validationRules = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^[0-9\s\-]+$/,
    macAddress: /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
    ipAddress: /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(\1\.){2}\1$/,
};

// Function to validate a single input
export function validateInput(input) {
    const error = input.parentElement.querySelector(".error");
    let validationType;

    // Determine validation type
    if (input.getAttribute("data-label")?.toLowerCase().includes("email")) {
        validationType = "email";
    } else if (input.getAttribute("data-label")?.toLowerCase().includes("phonenumber")) {
        validationType = "phone";
    } else if (input.getAttribute("data-label")?.toLowerCase().includes("mac")) {
        validationType = "macAddress";
    } else if (input.getAttribute("data-label")?.toLowerCase().includes("ip")) {
        validationType = "ipAddress";
    }

    // Perform validation
    if (validationType && validationRules[validationType]) {
        const isValid = validationRules[validationType].test(input.value);
        if (!isValid) {
            showValidationError(input, "Invalid input format.", error);
        } else {
            clearValidationError(input, error);
        }
    } else if (!input.value.trim()) {
        showValidationError(input, "This field is required.", error);
    } else {
        clearValidationError(input, error);
    }
}

// Function to show validation error
function showValidationError(input, message, error) {
    input.style.borderColor = "red";
    if (!error) {
        const errorMessage = document.createElement("div");
        errorMessage.textContent = message;
        errorMessage.style.color = "red";
        errorMessage.classList.add("error");
        input.parentElement.appendChild(errorMessage);
    }
}

// Function to clear validation error
function clearValidationError(input, error) {
    input.style.borderColor = "";
    if (error) error.remove();
}
