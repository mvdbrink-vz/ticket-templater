// Helper function to create input fields
function createInputField(label, type = "input") {
    const div = document.createElement("div");
    div.classList.add("form-group");

    const labelElement = document.createElement("label");
    labelElement.textContent = label;

    let inputElement;
    if (type === "textarea") {
        inputElement = document.createElement("textarea");
        inputElement.rows = 4;
        inputElement.style.resize = "both";
        inputElement.style.minHeight = "80px";
    } else {
        inputElement = document.createElement("input");
        inputElement.type = "text";
    }

    inputElement.setAttribute("label", label);
    inputElement.placeholder = `Enter ${label.toLowerCase()}`;

    div.appendChild(labelElement);
    div.appendChild(inputElement);

    return div;
}

// Helper function to create dropdown menus
function createDropdown(label, options) {
    const div = document.createElement("div");
    div.classList.add("form-group");

    const labelElement = document.createElement("label");
    labelElement.textContent = label;

    const selectElement = document.createElement("select");
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Select --";
    selectElement.appendChild(defaultOption);

    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
    });

    div.appendChild(labelElement);
    div.appendChild(selectElement);

    return div;
}

// Dynamically generate fields based on issue type
function generateFields(issueType) {
    dynamicFieldsDiv.innerHTML = ""; // Clear previous fields

    if (issueTemplates[issueType]) {
        issueTemplates[issueType].forEach(field => {
            const inputField = createInputField(field.label, field.type);
            dynamicFieldsDiv.appendChild(inputField);
        });
    }
}

// Event listeners
const dynamicFieldsDiv = document.getElementById("dynamic-fields");
const issueTypeSelect = document.getElementById("issue-type");

issueTypeSelect.addEventListener("change", function () {
    const issueType = this.value;
    generateFields(issueType);
});

// Add priority dropdown when page loads
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkModeToggle");
    const label = document.getElementById("darkModeLabel");

    // Load dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggle.checked = true;
        label.textContent = "Disable Dark Mode";
    }

    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
            label.textContent = "Disable Dark Mode";
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
            label.textContent = "Enable Dark Mode";
        }
    });

    // Add the priority dropdown
    if (!document.querySelector("select[label='Priority']")) {
        const priorityDropdown = createDropdown("Priority", ["P1", "P2", "P3", "P4"]);
        document.querySelector(".top-bar").appendChild(priorityDropdown);
    }
});
// Form submission logic
const form = document.getElementById("template-form");
const templateOutput = document.getElementById("template-output");
const summaryOutput = document.getElementById("summary-output");
const summaryBar = document.getElementById("summary-bar");

document.getElementById("issue-type").addEventListener("change", updateSummary);
document.getElementById("priority").addEventListener("change", updateSummary);

function updateSummary() {
    const priority = document.getElementById("priority").value;
    const issueType = document.getElementById("issue-type").value;
    const customer = dynamicFieldsDiv.querySelector("input[label='Company name:']")?.value || "Customer";
    let accessID = dynamicFieldsDiv.querySelector("input[label='Access ID:']")?.value;

    if (!accessID && (issueType.startsWith("Telefonie"))) {
        accessID = dynamicFieldsDiv.querySelector("input[label='SIPEU:']")?.value || "SIPEU";
    }

    summaryBar.value = `${priority || "Priority"} || ${customer} || ${accessID || "Access ID"} || ${issueType || "Issue Type"}`;
    summaryOutput.textContent = `${priority || "Priority"} || ${customer} || ${accessID || "Access ID"} || ${issueType || "Issue Type"}`;
}

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Voorkomt dat het formulier de pagina herlaadt

    // Verwijder eerdere foutmeldingen
    dynamicFieldsDiv.querySelectorAll(".error").forEach(err => err.remove());
    let hasError = false;

    const priority = document.getElementById("priority").value;
    const issueType = document.getElementById("issue-type").value;
    const inputs = dynamicFieldsDiv.querySelectorAll("input, textarea");

    // Check dat verplichte velden zijn ingevuld
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
            input.style.borderColor = ""; // Verwijder error styling
        }
    });

    if (hasError) return;

    // Genereer template
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

    // Toon gegenereerd template
    templateOutput.textContent = generatedTemplate;
});

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
