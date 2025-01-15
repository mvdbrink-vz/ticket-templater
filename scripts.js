document.getElementById("department").addEventListener("change", function () {
    const department = this.value;

    // Clear previous Issue Type selections
    const issueTypeDropdown = document.getElementById("issue-type");
    issueTypeDropdown.innerHTML = "<option value=''>-- Select Issue Type --</option>";

    // Load the relevant template file dynamically
    let scriptTag = document.getElementById("template-script");
    if (scriptTag) scriptTag.remove(); // Remove existing script if any

    scriptTag = document.createElement("script");
    scriptTag.id = "template-script";

    if (department === "tech-services-small") {
        scriptTag.src = "small-templates.js";
    } else if (department === "2nd-line-b2b") {
        scriptTag.src = "b2b-templates.js";
    } else {
        return; // Exit if no valid department selected
    }

    scriptTag.onload = () => {
        // Populate Issue Types after script loads
        if (typeof issueTemplates !== "undefined") {
            for (const type in issueTemplates) {
                const option = document.createElement("option");
                option.value = type;
                option.textContent = type;
                issueTypeDropdown.appendChild(option);
            }
        }
    };

    document.body.appendChild(scriptTag);
});

document.getElementById("issue-type").addEventListener("change", function () {
    const issueType = this.value;
    dynamicFieldsDiv.innerHTML = ""; // Clear previous fields

    if (issueTemplates[issueType]) {
        issueTemplates[issueType].forEach(field => {
            const div = document.createElement("div");
            div.classList.add("form-group");

            const label = document.createElement("label");
            label.textContent = field.label;

            let input;
            if (field.type === "textarea") {
                input = document.createElement("textarea");
                input.rows = 4; // Default height
                input.style.resize = "both"; // Allow resizing
                input.style.minHeight = "80px"; // Minimum height
            } else {
                input = document.createElement("input");
                input.type = "text";
            }

            input.setAttribute("label", field.label);
            input.placeholder = `Enter ${field.label.toLowerCase()}`;

            div.appendChild(label);
            div.appendChild(input);
            dynamicFieldsDiv.appendChild(div);
        });
    }
    updateSummary();
});

document.getElementById("template-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Remove previous error messages
    dynamicFieldsDiv.querySelectorAll(".error").forEach(err => err.remove());
    let hasError = false;

    const priority = document.getElementById("priority").value;
    const issueType = document.getElementById("issue-type").value;
    const inputs = dynamicFieldsDiv.querySelectorAll("input, textarea");

    if (!priority || !issueType) {
        alert("Please fill out Priority and Issue Type.");
        return;
    }

    inputs.forEach(input => {
        if (!input.value) {
            hasError = true;
            const errorMessage = document.createElement("div");
            errorMessage.textContent = "This field is required.";
            errorMessage.classList.add("error");
            errorMessage.style.color = "red";
            errorMessage.style.fontSize = "12px";
            input.parentElement.appendChild(errorMessage);
            input.style.borderColor = "red";
        } else {
            input.style.borderColor = ""; // Clear error highlight
        }
    });

    if (hasError) return;

    // Show spinner during generation
    const spinner = document.createElement("div");
    spinner.classList.add("spinner");
    spinner.textContent = "Generating template...";
    document.body.appendChild(spinner);

    setTimeout(() => {
        spinner.remove(); // Remove spinner after 1 second

        let generatedTemplate = `Priority: ${priority}\n\n`;

        generatedTemplate += `--- Customer Details ---\n`;
        inputs.forEach(input => {
            const label = input.previousElementSibling.textContent;
            const value = input.value;

            if (label.toLowerCase().includes('customer') || label.toLowerCase().includes('contact')) {
                generatedTemplate += `${label} ${value}\n`;
            }
        });

        generatedTemplate += `\n--- Technical Details ---\n`;
        inputs.forEach(input => {
            const label = input.previousElementSibling.textContent;
            const value = input.value;

            if (label.toLowerCase().includes('technical') || label.toLowerCase().includes('mac') || label.toLowerCase().includes('gateway')) {
                generatedTemplate += `${label} ${value}\n`;
            }
        });

        generatedTemplate += `\n--- Incident Description ---\n`;
        inputs.forEach(input => {
            const label = input.previousElementSibling.textContent;
            const value = input.value;

            if (label.toLowerCase().includes('issue') || label.toLowerCase().includes('impact')) {
                generatedTemplate += `${label} ${value}\n`;
            }
        });

        generatedTemplate += `\n--- Additional Comments ---\n`;
        inputs.forEach(input => {
            const label = input.previousElementSibling.textContent;
            const value = input.value;

            if (label.toLowerCase().includes('comments')) {
                generatedTemplate += `${label} ${value}\n`;
            }
        });

        templateOutput.textContent = generatedTemplate;

        // Success message
        const successMessage = document.createElement("div");
        successMessage.textContent = "Template generated successfully!";
        successMessage.style.color = "green";
        document.body.appendChild(successMessage);

        setTimeout(() => {
            successMessage.remove();
        }, 3000);

        updateSummary();
    }, 1000);
});
