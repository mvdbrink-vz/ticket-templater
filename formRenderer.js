export function renderFormFields(templates, issueType, container) {
    container.innerHTML = ""; // Clear previous fields

    if (templates[issueType]) {
        const sections = {};

        // Group fields by section
        templates[issueType].forEach(field => {
            if (!sections[field.section]) {
                sections[field.section] = [];
            }
            sections[field.section].push(field);
        });

        // Render grouped sections
        Object.keys(sections).forEach(sectionName => {
            const sectionDiv = document.createElement("div");
            sectionDiv.classList.add("form-section");

            const sectionTitle = document.createElement("h3");
            sectionTitle.textContent = sectionName;
            sectionDiv.appendChild(sectionTitle);

            sections[sectionName].forEach(field => {
                const fieldDiv = document.createElement("div");
                fieldDiv.classList.add("form-group");

                const label = document.createElement("label");
                label.textContent = field.label;
                if (field.required !== false) { // All fields required by default
                    const required = document.createElement("span");
                    required.textContent = " *";
                    required.className = "required";
                    label.appendChild(required);
                }

                let input;
                if (field.type === "textarea") {
                    input = document.createElement("textarea");
                    input.rows = 4;
                    input.style.resize = "both";
                } else if (field.type === "select") {
                    input = document.createElement("select");
                    // Add default empty option
                    const defaultOption = document.createElement("option");
                    defaultOption.value = "";
                    defaultOption.textContent = `-- Select ${field.label.replace(':', '')} --`;
                    input.appendChild(defaultOption);
                    // Add options from field definition
                    field.options.forEach(optionText => {
                        const option = document.createElement("option");
                        option.value = optionText;
                        option.textContent = optionText;
                        input.appendChild(option);
                    });
                } else {
                    input = document.createElement("input");
                    input.type = "text";
                }

                input.setAttribute("data-label", field.label);
                input.setAttribute("data-section", sectionName);
                if (field.type !== "select") {
                    input.placeholder = `Enter ${field.label.toLowerCase()}`;
                }

                fieldDiv.appendChild(label);
                fieldDiv.appendChild(input);
                sectionDiv.appendChild(fieldDiv);
            });

            container.appendChild(sectionDiv);
        });
    }
}

export function showValidationErrors(errorFields) {
    // Remove existing error states
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.error-message').forEach(el => el.remove());

    // Add new error states and messages
    errorFields.forEach(({ field, message }) => {
        field.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        field.parentNode.appendChild(errorDiv);
    });
} 