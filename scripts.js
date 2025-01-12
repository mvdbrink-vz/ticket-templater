const issueTemplates = {
    "MultiWifi - Hinder": [
        { label: "Company name:", type: "input", section: "Customer Details" },
        { label: "Street Name:", type: "input", section: "Customer Details" },
        { label: "Housenumber:", type: "input", section: "Customer Details" },
        { label: "ZIP code:", type: "input", section: "Customer Details" },
        { label: "Technical contact name:", type: "input", section: "Customer Details" },
        { label: "Technical contact phonenumber:", type: "input", section: "Customer Details" },
        { label: "Technical contact E-mail:", type: "input", section: "Customer Details" },

        { label: "Access ID:", type: "input", section: "Technical Details" },
        { label: "MultiWifi ID:", type: "input", section: "Technical Details" },
        { label: "Customer ID:", type: "input", section: "Technical Details" },
        { label: "CM MAC:", type: "input", section: "Technical Details" },
        { label: "LED status modem:", type: "input", section: "Technical Details" },
        { label: "VTP / KTA:", type: "input", section: "Technical Details" },

        { label: "SSID:", type: "input", section: "Technical Details" },
        { label: "Access Points Macs & Models:", type: "input", section: "Technical Details" },
        { label: "Access Points Ruckus status:", type: "input", section: "Technical Details" },
        { label: "LED status Access Points:", type: "input", section: "Technical Details" },
        { label: "Mac address of an impacted device:", type: "input", section: "Technical Details" },
        
        { label: "Issue description:", type: "textarea", section: "Incident Description" },
        { label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
        { label: "Example timestamp of when the issue occurred:", type: "input", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },

        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],
    "MultiWifi - No Connection": [
        // Customer Details
        { label: "Company name:", type: "input", section: "Customer Details" },
        { label: "Street Name:", type: "input", section: "Customer Details" },
        { label: "Housenumber:", type: "input", section: "Customer Details" },
        { label: "ZIP code:", type: "input", section: "Customer Details" },
        { label: "Technical contact name:", type: "input", section: "Customer Details" },
        { label: "Technical contact phonenumber:", type: "input", section: "Customer Details" },
        { label: "Technical contact E-mail:", type: "input", section: "Customer Details" },
    
        // Technical Details
        { label: "Access ID:", type: "input", section: "Technical Details" },
        { label: "MultiWifi ID:", type: "input", section: "Technical Details" },
        { label: "Customer ID:", type: "input", section: "Technical Details" },
        { label: "CM MAC:", type: "input", section: "Technical Details" },
        { label: "VTP / KTA:", type: "input", section: "Technical Details" },
        { label: "LED status modem:", type: "input", section: "Technical Details" },
    
        // Incident Description
        { label: "Issue description:", type: "textarea", section: "Incident Description" },
        { label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
    
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
],
    "Telefonie - Feature Issues": [
        // Customer Details
        { label: "Company name:", type: "input", section: "Customer Details" },
        { label: "Street Name:", type: "input", section: "Customer Details" },
        { label: "Housenumber:", type: "input", section: "Customer Details" },
        { label: "ZIP code:", type: "input", section: "Customer Details" },
        { label: "Technical contact name:", type: "input", section: "Customer Details" },
        { label: "Technical contact phonenumber:", type: "input", section: "Customer Details" },
        { label: "Technical contact E-mail:", type: "input", section: "Customer Details" },
    
        // Technical Details
        { label: "SIPEU:", type: "input", section: "Technical Details" },
        { label: "Customer ID:", type: "input", section: "Technical Details" },
        { label: "What Feature isn't working:", type: "input", section: "Technical Details" },
    
        // Incident Description
        { label: "Issue description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
    
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
],
    "Telefonie - No in- or outgoing calls": [
        // Customer Details
        { label: "Company name:", type: "input", section: "Customer Details" },
        { label: "Street Name:", type: "input", section: "Customer Details" },
        { label: "Housenumber:", type: "input", section: "Customer Details" },
        { label: "ZIP code:", type: "input", section: "Customer Details" },
        { label: "Technical contact name:", type: "input", section: "Customer Details" },
        { label: "Technical contact phonenumber:", type: "input", section: "Customer Details" },
        { label: "Technical contact E-mail:", type: "input", section: "Customer Details" },
    
        // Technical Details
        { label: "SIPEU:", type: "input", section: "Technical Details" },
        { label: "Customer ID:", type: "input", section: "Technical Details" },
        { label: "A -Phonenumber:", type: "input", section: "Technical Details" },
        { label: "B -Phonenumber:", type: "input", section: "Technical Details" },
        { label: "Timestamp of call:", type: "input", section: "Technical Details" },
        { label: "Frequency:", type: "input", section: "Technical Details" },
        { label: "Occurring since:", type: "input", section: "Technical Details" },
        { label: "LED status modem:", type: "input", section: "Technical Details" },
        { label: "LED status phone:", type: "input", section: "Technical Details" },
    
        // Incident Description
        { label: "Issue description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
    
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],
    "Telefonie - One way audio": [
        // Customer Details
        { label: "Company name:", type: "input", section: "Customer Details" },
        { label: "Street Name:", type: "input", section: "Customer Details" },
        { label: "Housenumber:", type: "input", section: "Customer Details" },
        { label: "ZIP code:", type: "input", section: "Customer Details" },
        { label: "Technical contact name:", type: "input", section: "Customer Details" },
        { label: "Technical contact phonenumber:", type: "input", section: "Customer Details" },
        { label: "Technical contact E-mail:", type: "input", section: "Customer Details" },
    
        // Technical Details
        { label: "SIPEU:", type: "input", section: "Technical Details" },
        { label: "Customer ID:", type: "input", section: "Technical Details" },
        { label: "Phonenumber:", type: "input", section: "Technical Details" },
        { label: "A -Phonenumber:", type: "input", section: "Technical Details" },
        { label: "B -Phonenumber:", type: "input", section: "Technical Details" },
        { label: "Timestamp of call:", type: "input", section: "Technical Details" },
        { label: "Frequency:", type: "input", section: "Technical Details" },
        { label: "Occurring since:", type: "input", section: "Technical Details" },
    
        // Incident Description
        { label: "Issue description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
    
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],
    "Telefonie - Quality issues": [
        // Customer Details
        { label: "Company name:", type: "input", section: "Customer Details" },
        { label: "Street Name:", type: "input", section: "Customer Details" },
        { label: "Housenumber:", type: "input", section: "Customer Details" },
        { label: "ZIP code:", type: "input", section: "Customer Details" },
        { label: "Technical contact name:", type: "input", section: "Customer Details" },
        { label: "Technical contact phonenumber:", type: "input", section: "Customer Details" },
        { label: "Technical contact E-mail:", type: "input", section: "Customer Details" },
    
        // Technical Details
        { label: "SIPEU:", type: "input", section: "Technical Details" },
        { label: "Customer ID:", type: "input", section: "Technical Details" },
        { label: "A -Phonenumber:", type: "input", section: "Technical Details" },
        { label: "B -Phonenumber:", type: "input", section: "Technical Details" },
        { label: "Timestamp of call:", type: "input", section: "Technical Details" },
        { label: "Frequency:", type: "input", section: "Technical Details" },
        { label: "CM MAC:", type: "input", section: "Technical Details" },
        { label: "VTP / KTA:", type: "input", section: "Technical Details" },
        { label: "Gateway:", type: "input", section: "Technical Details" },
        { label: "IP Address:", type: "input", section: "Technical Details" },
        { label: "Subnetmasker:", type: "input", section: "Technical Details" },
    
        // Incident Description
        { label: "The quality issues occur with:", type: "textarea", section: "Incident Description" },
        { label: "Who experiences the quality issues:", type: "textarea", section: "Incident Description" },
        { label: "3 Call examples no older than 48 hours:", type: "textarea", section: "Incident Description" },
        { label: "Issue description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
    
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],
    "Data - No Connection": [
        // Customer Details
        { label: "Access ID:", type: "input", section: "Customer Details" },
        { label: "Company name:", type: "input", section: "Customer Details" },
        { label: "Customer ID:", type: "input", section: "Customer Details" },
        { label: "Street Housenumber:", type: "input", section: "Customer Details" },
        { label: "ZIP code:", type: "input", section: "Customer Details" },
        { label: "Technical contact name:", type: "input", section: "Customer Details" },
        { label: "Technical contact phonenumber:", type: "input", section: "Customer Details" },
        { label: "Technical contact E-mail:", type: "input", section: "Customer Details" },
    
        // Technical Details
        { label: "CM MAC:", type: "input", section: "Technical Details" },
        { label: "Gateway:", type: "input", section: "Technical Details" },
        { label: "IP Address:", type: "input", section: "Technical Details" },
        { label: "Subnetmasker:", type: "input", section: "Technical Details" },
        { label: "VTP / KTA:", type: "input", section: "Technical Details" },
    
        // Incident Description
        { label: "Issue description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        { label: "LED status modem:", type: "input", section: "Incident Description" },
        { label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
    
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],
    "Data - Packetloss": [
        // Customer Details
        { label: "Access ID:", type: "input", section: "Customer Details" },
        { label: "Company name:", type: "input", section: "Customer Details" },
        { label: "Customer ID:", type: "input", section: "Customer Details" },
        { label: "Street Housenumber:", type: "input", section: "Customer Details" },
        { label: "ZIP code:", type: "input", section: "Customer Details" },
        { label: "Technical contact name:", type: "input", section: "Customer Details" },
        { label: "Technical contact phonenumber:", type: "input", section: "Customer Details" },
        { label: "Technical contact E-mail:", type: "input", section: "Customer Details" },
    
        // Technical Details
        { label: "CM MAC:", type: "input", section: "Technical Details" },
        { label: "Gateway:", type: "input", section: "Technical Details" },
        { label: "IP Address:", type: "input", section: "Technical Details" },
        { label: "Subnetmasker:", type: "input", section: "Technical Details" },
        { label: "VTP / KTA:", type: "input", section: "Technical Details" },
    
        // Incident Description
        { label: "Packetloss description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
    
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],
    "Data - Performance Issue": [
        // Customer Details
        { label: "Access ID:", type: "input", section: "Customer Details" },
        { label: "Company name:", type: "input", section: "Customer Details" },
        { label: "Customer ID:", type: "input", section: "Customer Details" },
        { label: "Street Housenumber:", type: "input", section: "Customer Details" },
        { label: "ZIP code:", type: "input", section: "Customer Details" },
        { label: "Technical contact name:", type: "input", section: "Customer Details" },
        { label: "Technical contact phonenumber:", type: "input", section: "Customer Details" },
        { label: "Technical contact E-mail:", type: "input", section: "Customer Details" },
    
        // Technical Details
        { label: "CM MAC:", type: "input", section: "Technical Details" },
        { label: "Gateway:", type: "input", section: "Technical Details" },
        { label: "IP Address:", type: "input", section: "Technical Details" },
    
        // Incident Description
        { label: "Performance issue description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
    
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],
    "Data - Speed Issues": [
        // Customer Details
        { label: "Access ID:", type: "input", section: "Customer Details" },
        { label: "Company name:", type: "input", section: "Customer Details" },
        { label: "Customer ID:", type: "input", section: "Customer Details" },
        { label: "Street Housenumber:", type: "input", section: "Customer Details" },
        { label: "ZIP code:", type: "input", section: "Customer Details" },
        { label: "Technical contact name:", type: "input", section: "Customer Details" },
        { label: "Technical contact phonenumber:", type: "input", section: "Customer Details" },
        { label: "Technical contact E-mail:", type: "input", section: "Customer Details" },
    
        // Technical Details
        { label: "CM MAC:", type: "input", section: "Technical Details" },
        { label: "Gateway:", type: "input", section: "Technical Details" },
        { label: "IP Address:", type: "input", section: "Technical Details" },
        { label: "Subnetmasker:", type: "input", section: "Technical Details" },
        { label: "VTP / KTA:", type: "input", section: "Technical Details" },
        { label: "Measured speed:", type: "input", section: "Technical Details" },
        { label: "Expected speed:", type: "input", section: "Technical Details" },
    
        // Incident Description
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        { label: "LED status modem:", type: "input", section: "Incident Description" },
        { label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
    
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],
"Data - Reachability IP": [
        // Customer Details
        { label: "Access ID:", type: "input", section: "Customer Details" },
        { label: "Company name:", type: "input", section: "Customer Details" },
        { label: "Customer ID:", type: "input", section: "Customer Details" },
        { label: "Street Housenumber:", type: "input", section: "Customer Details" },
        { label: "ZIP code:", type: "input", section: "Customer Details" },
        { label: "Technical contact name:", type: "input", section: "Customer Details" },
        { label: "Technical contact phonenumber:", type: "input", section: "Customer Details" },
        { label: "Technical contact E-mail:", type: "input", section: "Customer Details" },
    
        // Technical Details
        { label: "IP address impacted:", type: "input", section: "Technical Details" },
    
        // Incident Description
        { label: "Reachability issue description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
    
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
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
        const sections = {}; // To group fields by sections

        // Group fields by sections
        issueTemplates[issueType].forEach(field => {
            if (!sections[field.section]) {
                sections[field.section] = []; // Initialize section if it doesn't exist
            }
            sections[field.section].push(field);
        });

        // Render each section
        Object.keys(sections).forEach(sectionName => {
            const sectionDiv = document.createElement("div");
            sectionDiv.classList.add("form-section");
            const sectionTitle = document.createElement("h3");
            sectionTitle.textContent = sectionName;
            sectionDiv.appendChild(sectionTitle);

            sections[sectionName].forEach(field => {
                const div = document.createElement("div");
                div.classList.add("form-group");

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

                input.setAttribute("label", field.label);
                input.placeholder = `Enter ${field.label.toLowerCase()}`;

                div.appendChild(label);
                div.appendChild(input);
                sectionDiv.appendChild(div);
            });

            dynamicFieldsDiv.appendChild(sectionDiv); // Add the section to the form
        });
    }

    updateSummary(); // Refresh the summary bar
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let generatedTemplate = `Priority: ${document.getElementById("priority").value}\n\n`;

    // Group inputs by their sections
    const sections = {};
    const inputs = dynamicFieldsDiv.querySelectorAll("input, textarea");

    inputs.forEach(input => {
        const section = input.closest(".form-section").querySelector("h3").textContent;
        if (!sections[section]) {
            sections[section] = [];
        }
        const label = input.previousElementSibling.textContent;
        const value = input.value;
        sections[section].push(`${label} ${value}`);
    });

    // Add each section to the template
    Object.keys(sections).forEach(section => {
        generatedTemplate += `--- ${section} ---\n`;
        generatedTemplate += sections[section].join("\n");
        generatedTemplate += `\n\n`;
    });

    templateOutput.textContent = generatedTemplate; // Display the generated template
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
