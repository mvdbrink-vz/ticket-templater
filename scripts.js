// The template file location. This is where the templates can be adjusted in an easy way and keep the JSON clean and compact.
import { issueTemplates } from './templates.js';

const form = document.getElementById("template-form");
const dynamicFieldsDiv = document.getElementById("dynamic-fields");
const templateOutput = document.getElementById("template-output");
const summaryOutput = document.getElementById("summary-output");
const summaryBar = document.getElementById("summary-bar");

// Update summary bar when issue type or priority changes
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
        console.warn("Invalid department selected.");
        return;
    }

    scriptTag.onload = () => {
        if (typeof issueTemplates !== "undefined") {
            // Populate Issue Types
            for (const type in issueTemplates) {
                const option = document.createElement("option");
                option.value = type;
                option.textContent = type;
                issueTypeDropdown.appendChild(option);
            }
        } else {
            console.error("issueTemplates is not defined. Check the template file.");
        }
    };

    scriptTag.onerror = () => {
        console.error(`Failed to load ${scriptTag.src}. Verify the file path.`);
    };

    document.body.appendChild(scriptTag);
});

document.getElementById("priority").addEventListener("change", updateSummary);

function updateSummary() {
    const priority = document.getElementById("priority").value;
    const issueType = document.getElementById("issue-type").value;
    const customer = dynamicFieldsDiv.querySelector("input[data-label='Company name:']")?.value || "Customer";
    let accessID = dynamicFieldsDiv.querySelector("input[data-label='Access ID:']")?.value;

    if (!accessID && (issueType.startsWith("Telefonie"))) {
        accessID = dynamicFieldsDiv.querySelector("input[data-label='SIPEU:']")?.value || "SIPEU";
    }

    const summaryText = `${priority || "Priority"} || ${customer} || ${accessID || "Access ID"} || ${issueType || "Issue Type"}`;
    summaryBar.value = summaryText;
    summaryOutput.textContent = summaryText;
}

// Render dynamic fields based on the selected issue type
document.getElementById("issue-type").addEventListener("change", function () {
    const issueType = this.value;
    dynamicFieldsDiv.innerHTML = ""; // Clear previous fields

    if (issueTemplates[issueType]) {
        const sections = {}; // Group fields by sections

        // Group fields
        issueTemplates[issueType].forEach(field => {
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

                let input;
                if (field.type === "textarea") {
                    input = document.createElement("textarea");
                    input.rows = 4;
                    input.style.resize = "both";
                } else {
                    input = document.createElement("input");
                    input.type = "text";
                }

                input.setAttribute("data-label", field.label);
                input.placeholder = `Enter ${field.label.toLowerCase()}`;

                fieldDiv.appendChild(label);
                fieldDiv.appendChild(input);
                sectionDiv.appendChild(fieldDiv);
            });

            dynamicFieldsDiv.appendChild(sectionDiv); // Add section to form
        });
    }

    updateSummary(); // Update summary bar
});

// Centralize validation using event delegation
dynamicFieldsDiv.addEventListener("input", (event) => {
    if (event.target.matches("input, textarea")) {
        const input = event.target;
        const error = input.parentElement.querySelector(".error");

        // Check if the input is empty
        if (!input.value.trim()) {
            input.style.borderColor = "red";

            // Add error message if not present
            if (!error) {
                const errorMessage = document.createElement("div");
                errorMessage.textContent = "This field is required.";
                errorMessage.style.color = "red";
                errorMessage.classList.add("error");
                input.parentElement.appendChild(errorMessage);
            }
        } else {
            input.style.borderColor = ""; // Remove red border
            if (error) error.remove(); // Remove error message
        }
    }
});

// Handle form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let hasError = false;

    // Validate all inputs again before submission
    dynamicFieldsDiv.querySelectorAll("input, textarea").forEach(input => {
        if (!input.value.trim()) {
            hasError = true;
            input.style.borderColor = "red";
        }
    });

    if (hasError) return; // Stop if there are validation errors

    let generatedTemplate = `Priority: ${document.getElementById("priority").value}\n\n`;

    // Group inputs by sections
    const sections = {};
    dynamicFieldsDiv.querySelectorAll("input, textarea").forEach(input => {
        const section = input.closest(".form-section").querySelector("h3").textContent;
        if (!sections[section]) {
            sections[section] = [];
        }
        const label = input.getAttribute("data-label");
        const value = input.value;
        sections[section].push(`${label} ${value}`);
    });

    // Construct template
    Object.keys(sections).forEach(section => {
        generatedTemplate += `--- ${section} ---\n`;
        generatedTemplate += sections[section].join("\n");
        generatedTemplate += `\n\n`;
    });

    // Display template output
    templateOutput.textContent = generatedTemplate;

    // Display success message
    const successMessage = document.createElement("div");
    successMessage.textContent = "Template generated successfully!";
    successMessage.style.color = "green";
    document.body.appendChild(successMessage);

    setTimeout(() => {
        successMessage.remove();
    }, 3000);
});
