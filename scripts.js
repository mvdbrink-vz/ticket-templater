const issueTemplates = {
    "MultiWifi - Hinder": [
        { section: "Customer Details", fields: [
            { label: "Access ID:", type: "input" },
            { label: "MultiWifi ID:", type: "input" },
            { label: "Company name:", type: "input" },
            { label: "Customer ID:", type: "input" },
            { label: "Street Housenumber:", type: "input" },
            { label: "ZIP code:", type: "input" },
            { label: "Technical contact phonenumber:", type: "input" },
            { label: "Technical contact E-mail:", type: "input" }
        ]},
        { section: "Technical Details", fields: [
            { label: "CM MAC:", type: "input" },
            { label: "VTP / KTA:", type: "input" },
            { label: "SSID:", type: "input" }
        ]},
        { section: "Incident Description", fields: [
            { label: "Issue description:", type: "textarea" },
            { label: "Business Impact:", type: "textarea" }
        ]},
        { section: "Additional Comments", fields: [
            { label: "Additional comments & taken actions:", type: "textarea" }
        ]}
    ],
    "MultiWifi - No Connection": [
        { section: "Customer Details", fields: [
            { label: "Access ID:", type: "input" },
            { label: "MultiWifi ID:", type: "input" },
            { label: "Company name:", type: "input" },
            { label: "Customer ID:", type: "input" },
            { label: "Street Housenumber:", type: "input" },
            { label: "ZIP code:", type: "input" },
            { label: "Technical contact phonenumber:", type: "input" },
            { label: "Technical contact E-mail:", type: "input" }
        ]},
        { section: "Technical Details", fields: [
            { label: "CM MAC:", type: "input" },
            { label: "VTP / KTA:", type: "input" }
        ]},
        { section: "Incident Description", fields: [
            { label: "Issue description:", type: "textarea" },
            { label: "Business Impact:", type: "textarea" }
        ]},
        { section: "Additional Comments", fields: [
            { label: "Additional comments & taken actions:", type: "textarea" }
        ]}
    ],
    "Telefonie - Feature Issues": [
        { section: "Customer Details", fields: [
            { label: "SIPEU:", type: "input" },
            { label: "Company name:", type: "input" },
            { label: "Customer ID:", type: "input" },
            { label: "Street Housenumber:", type: "input" },
            { label: "ZIP code:", type: "input" },
            { label: "Technical contact phonenumber:", type: "input" },
            { label: "Technical contact E-mail:", type: "input" }
        ]},
        { section: "Technical Details", fields: [
            { label: "Phonenumber:", type: "input" }
        ]},
        { section: "Incident Description", fields: [
            { label: "Issue description:", type: "textarea" },
            { label: "Business Impact:", type: "textarea" }
        ]},
        { section: "Additional Comments", fields: [
            { label: "Additional comments & taken actions:", type: "textarea" }
        ]}
    ],
    "Telefonie - No in- or outgoing calls": [
        { section: "Customer Details", fields: [
            { label: "SIPEU:", type: "input" },
            { label: "Company name:", type: "input" },
            { label: "Customer ID:", type: "input" },
            { label: "Street Housenumber:", type: "input" },
            { label: "ZIP code:", type: "input" },
            { label: "Technical contact phonenumber:", type: "input" },
            { label: "Technical contact E-mail:", type: "input" }
        ]},
        { section: "Technical Details", fields: [
            { label: "Phonenumber:", type: "input" }
        ]},
        { section: "Incident Description", fields: [
            { label: "Issue description:", type: "textarea" },
            { label: "Business Impact:", type: "textarea" }
        ]},
        { section: "Additional Comments", fields: [
            { label: "Additional comments & taken actions:", type: "textarea" }
        ]}
    ],
    // Other issue types would be similarly structured here
};
    ],
    "Telefonie - One way audio": [
        { label: "SIPEU:", type: "input" },
        { label: "Company name:", type: "input" },
        { label: "Customer ID:", type: "input" },
        { label: "Street Housenumber:", type: "input" },
        { label: "ZIP code:", type: "input" },
        { label: "Technical contact name:", type: "input" },
        { label: "Technical contact phonenumber:", type: "input" },
        { label: "Technical contact E-mail:", type: "input" },
        { label: "Phonenumber:", type: "input" },
        { label: "Issue description:", type: "textarea" },
        { label: "Business Impact:", type: "textarea" },
        { label: "Frequency:", type: "input" },
        { label: "Occurring since:", type: "input" },
        { label: "Additional comments & taken actions:", type: "textarea" }
    ],
    "Telefonie - Quality issues": [
        { label: "SIPEU:", type: "input" },
        { label: "Company name:", type: "input" },
        { label: "Customer ID:", type: "input" },
        { label: "Street Housenumber:", type: "input" },
        { label: "ZIP code:", type: "input" },
        { label: "Technical contact name:", type: "input" },
        { label: "Technical contact phonenumber:", type: "input" },
        { label: "Technical contact E-mail:", type: "input" },
        { label: "CM MAC:", type: "input" },
        { label: "Gateway:", type: "input" },
        { label: "IP Address:", type: "input" },
        { label: "Subnetmasker:", type: "input" },
        { label: "VTP / KTA:", type: "input" },
        { label: "Phonenumber:", type: "input" },
        { label: "Occurring since:", type: "input" },
        { label: "Issue description:", type: "textarea" },
        { label: "Frequency:", type: "input" },
        { label: "The quality issues occur with:", type: "textarea" },
        { label: "Who experiences the quality issues:", type: "textarea" },
        { label: "3 Call examples no older than 48 hours:", type: "textarea" },
        { label: "Additional comments & taken actions:", type: "textarea" }
    ],
    "Data - No Connection": [
        { label: "Access ID:", type: "input" },
        { label: "Company name:", type: "input" },
        { label: "Customer ID:", type: "input" },
        { label: "Street Housenumber:", type: "input" },
        { label: "ZIP code:", type: "input" },
        { label: "Technical contact name:", type: "input" },
        { label: "Technical contact phonenumber:", type: "input" },
        { label: "Technical contact E-mail:", type: "input" },
        { label: "CM MAC:", type: "input" },
        { label: "Gateway:", type: "input" },
        { label: "IP Address:", type: "input" },
        { label: "Subnetmasker:", type: "input" },
        { label: "VTP / KTA:", type: "input" },
        { label: "Issue description:", type: "textarea" },
        { label: "Business Impact:", type: "textarea" },
        { label: "LED status modem:", type: "input" },
        { label: "Frequency:", type: "input" },
        { label: "Occurring since:", type: "input" },
        { label: "Additional comments & taken actions:", type: "textarea" }
    ],
    "Data - Packetloss": [
        { label: "Access ID:", type: "input" },
        { label: "Company name:", type: "input" },
        { label: "Customer ID:", type: "input" },
        { label: "Street Housenumber:", type: "input" },
        { label: "ZIP code:", type: "input" },
        { label: "Technical contact name:", type: "input" },
        { label: "Technical contact phonenumber:", type: "input" },
        { label: "Technical contact E-mail:", type: "input" },
        { label: "CM MAC:", type: "input" },
        { label: "Gateway:", type: "input" },
        { label: "IP Address:", type: "input" },
        { label: "Subnetmasker:", type: "input" },
        { label: "VTP / KTA:", type: "input" },
        { label: "Packetloss description:", type: "textarea" },
        { label: "Business Impact:", type: "textarea" },
        { label: "Occurring since:", type: "input" },
        { label: "Additional comments & taken actions:", type: "textarea" }
    ],
    "Data - Performance Issue": [
        { label: "Access ID:", type: "input" },
        { label: "Company name:", type: "input" },
        { label: "Customer ID:", type: "input" },
        { label: "Street Housenumber:", type: "input" },
        { label: "ZIP code:", type: "input" },
        { label: "Technical contact name:", type: "input" },
        { label: "Technical contact phonenumber:", type: "input" },
        { label: "Technical contact E-mail:", type: "input" },
        { label: "CM MAC:", type: "input" },
        { label: "Gateway:", type: "input" },
        { label: "IP Address:", type: "input" },
        { label: "Performance issue description:", type: "textarea" },
        { label: "Business Impact:", type: "textarea" },
        { label: "Occurring since:", type: "input" },
        { label: "Additional comments & taken actions:", type: "textarea" }
    ],
    "Data - Speed Issues": [
        { label: "Access ID:", type: "input" },
        { label: "Company name:", type: "input" },
        { label: "Customer ID:", type: "input" },
        { label: "Street Housenumber:", type: "input" },
        { label: "ZIP code:", type: "input" },
        { label: "Technical contact name:", type: "input" },
        { label: "Technical contact phonenumber:", type: "input" },
        { label: "Technical contact E-mail:", type: "input" },
        { label: "CM MAC:", type: "input" },
        { label: "Gateway:", type: "input" },
        { label: "IP Address:", type: "input" },
        { label: "Subnetmasker:", type: "input" },
        { label: "VTP / KTA:", type: "input" },
        { label: "Measured speed:", type: "input" },
        { label: "Expected speed:", type: "input" },
        { label: "Business Impact:", type: "textarea" },
        { label: "LED status modem:", type: "input" },
        { label: "Frequency:", type: "input" },
        { label: "Occurring since:", type: "input" },
        { label: "Additional comments & taken actions:", type: "textarea" }
    ],
    "Data - Reachability IP": [
        { label: "Access ID:", type: "input" },
        { label: "Company name:", type: "input" },
        { label: "Customer ID:", type: "input" },
        { label: "Street Housenumber:", type: "input" },
        { label: "ZIP code:", type: "input" },
        { label: "Technical contact name:", type: "input" },
        { label: "Technical contact phonenumber:", type: "input" },
        { label: "Technical contact E-mail:", type: "input" },
        { label: "IP address impacted:", type: "input" },
        { label: "Reachability issue description:", type: "textarea" },
        { label: "Business Impact:", type: "textarea" },
        { label: "Occurring since:", type: "input" },
        { label: "Additional comments & taken actions:", type: "textarea" }
    ]
};

const form = document.getElementById("template-form");
const dynamicFieldsDiv = document.getElementById("dynamic-fields");
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

form.addEventListener("submit", (e) => {
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
////// added
const form = document.getElementById("template-form");
const dynamicFieldsDiv = document.getElementById("dynamic-fields");
const templateOutput = document.getElementById("template-output");
const issueTypeSelector = document.getElementById("issue-type");
const prioritySelector = document.getElementById("priority");

issueTypeSelector.addEventListener("change", function () {
    const issueType = this.value;
    dynamicFieldsDiv.innerHTML = ""; // Clear existing fields

    if (issueTemplates[issueType]) {
        issueTemplates[issueType].forEach(section => {
            const sectionDiv = document.createElement("div");
            sectionDiv.classList.add("section");

            const sectionTitle = document.createElement("h3");
            sectionTitle.textContent = section.section;
            sectionDiv.appendChild(sectionTitle);

            section.fields.forEach(field => {
                const fieldDiv = document.createElement("div");
                fieldDiv.classList.add("form-group");

                const label = document.createElement("label");
                label.textContent = field.label;
                fieldDiv.appendChild(label);

                let input;
                if (field.type === "textarea") {
                    input = document.createElement("textarea");
                } else {
                    input = document.createElement("input");
                    input.type = "text";
                }

                input.placeholder = `Enter ${field.label.toLowerCase()}`;
                fieldDiv.appendChild(input);
                sectionDiv.appendChild(fieldDiv);
            });

            dynamicFieldsDiv.appendChild(sectionDiv);
        });
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const issueType = issueTypeSelector.value;
    const priority = prioritySelector.value;
    const sections = dynamicFieldsDiv.querySelectorAll(".section");

    if (!issueType || !priority) {
        alert("Please select both an issue type and a priority.");
        return;
    }

    let generatedTemplate = `Priority: ${priority}\nIssue Type: ${issueType}\n\n`;

    sections.forEach(section => {
        const sectionTitle = section.querySelector("h3").textContent;
        generatedTemplate += `--- ${sectionTitle} ---\n`;

        const fields = section.querySelectorAll(".form-group");
        fields.forEach(field => {
            const label = field.querySelector("label").textContent;
            const input = field.querySelector("input, textarea").value;
            generatedTemplate += `${label} ${input}\n`;
        });
        generatedTemplate += "\n";
    });
////// added
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
