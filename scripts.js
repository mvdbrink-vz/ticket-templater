const issueTemplates = {
    "MultiWifi - Hinder": [
        { label: "Access ID:", type: "input", placeholder: "Enter Access ID" },
        { label: "MultiWifi ID:", type: "input", placeholder: "Enter MultiWifi ID" },
        { label: "Company name:", type: "input", placeholder: "Enter Company Name" },
        { label: "Customer ID:", type: "input", placeholder: "Enter Customer ID" },
        { label: "Street Housenumber:", type: "input", placeholder: "Enter Street and Housenumber" },
        { label: "ZIP code:", type: "input", placeholder: "Enter ZIP Code" },
        { label: "Technical contact name:", type: "input", placeholder: "Enter Technical Contact Name" },
        { label: "Technical contact phonenumber:", type: "input", placeholder: "Enter Technical Contact Phone Number" },
        { label: "Technical contact E-mail:", type: "input", placeholder: "Enter Technical Contact Email" },
        { label: "CM MAC:", type: "input", placeholder: "Enter CM MAC" },
        { label: "VTP / KTA:", type: "input", placeholder: "Enter VTP / KTA" },
        { label: "SSID:", type: "input", placeholder: "Enter SSID" },
        { label: "Access Points Macs & Models:", type: "input", placeholder: "Enter Access Points Macs & Models" },
        { label: "Access Points Ruckus status:", type: "input", placeholder: "Enter Access Points Ruckus Status" },
        { label: "Mac address of an impacted device:", type: "input", placeholder: "Enter Mac Address of Impacted Device" },
        { label: "LED status modem:", type: "input", placeholder: "Enter LED Status of Modem" },
        { label: "LED status Access Points:", type: "input", placeholder: "Enter LED Status of Access Points" },
        { label: "Issue description:", type: "textarea", placeholder: "Describe the issue in detail" },
        { label: "Business Impact:", type: "textarea", placeholder: "Describe the business impact" },
        { label: "Frequency:", type: "input", placeholder: "Enter the frequency of occurrence" },
        { label: "Occurring since:", type: "input", placeholder: "Enter the starting date of the issue" },
        { label: "Example timestamp of when the issue occurred:", type: "input", placeholder: "Enter an example timestamp" },
        { label: "Additional comments & taken actions:", type: "textarea", placeholder: "Add comments and actions taken" }
    ],
    "MultiWifi - No Connection": [
        { label: "Access ID:", type: "input", placeholder: "Enter Access ID" },
        { label: "MultiWifi ID:", type: "input", placeholder: "Enter MultiWifi ID" },
        { label: "Company name:", type: "input", placeholder: "Enter Company Name" },
        { label: "Customer ID:", type: "input", placeholder: "Enter Customer ID" },
        { label: "Street Housenumber:", type: "input", placeholder: "Enter Street and Housenumber" },
        { label: "ZIP code:", type: "input", placeholder: "Enter ZIP Code" },
        { label: "Technical contact name:", type: "input", placeholder: "Enter Technical Contact Name" },
        { label: "Technical contact phonenumber:", type: "input", placeholder: "Enter Technical Contact Phone Number" },
        { label: "Technical contact E-mail:", type: "input", placeholder: "Enter Technical Contact Email" },
        { label: "CM MAC:", type: "input", placeholder: "Enter CM MAC" },
        { label: "VTP / KTA:", type: "input", placeholder: "Enter VTP / KTA" },
        { label: "Issue description:", type: "textarea", placeholder: "Describe the issue in detail" },
        { label: "Business Impact:", type: "textarea", placeholder: "Describe the business impact" },
        { label: "LED status modem:", type: "input", placeholder: "Enter LED Status of Modem" },
        { label: "Frequency:", type: "input", placeholder: "Enter the frequency of occurrence" },
        { label: "Occurring since:", type: "input", placeholder: "Enter the starting date of the issue" },
        { label: "Additional comments & taken actions:", type: "textarea", placeholder: "Add comments and actions taken" }
    ],
    "Telefonie - Feature Issues": [
        { label: "SIPEU:", type: "input", placeholder: "Enter SIPEU" },
        { label: "Company name:", type: "input", placeholder: "Enter Company Name" },
        { label: "Customer ID:", type: "input", placeholder: "Enter Customer ID" },
        { label: "Street Housenumber:", type: "input", placeholder: "Enter Street and Housenumber" },
        { label: "ZIP code:", type: "input", placeholder: "Enter ZIP Code" },
        { label: "Technical contact name:", type: "input", placeholder: "Enter Technical Contact Name" },
        { label: "Technical contact phonenumber:", type: "input", placeholder: "Enter Technical Contact Phone Number" },
        { label: "Technical contact E-mail:", type: "input", placeholder: "Enter Technical Contact Email" },
        { label: "Which feature does not work:", type: "textarea", placeholder: "Describe the non-working feature" },
        { label: "What happens instead:", type: "textarea", placeholder: "Explain what happens instead" },
        { label: "Business Impact:", type: "textarea", placeholder: "Describe the business impact" },
        { label: "Frequency:", type: "input", placeholder: "How often does this occur?" },
        { label: "3 Call examples no older than 48 hours:", type: "textarea", placeholder: "Provide call examples" },
        { label: "Additional comments & taken actions:", type: "textarea", placeholder: "Add comments and actions taken" }
    ],
    "Telefonie - No in- or outgoing calls": [
        { label: "SIPEU:", type: "input", placeholder: "Enter SIPEU" },
        { label: "Company name:", type: "input", placeholder: "Enter Company Name" },
        { label: "Customer ID:", type: "input", placeholder: "Enter Customer ID" },
        { label: "Street Housenumber:", type: "input", placeholder: "Enter Street and Housenumber" },
        { label: "ZIP code:", type: "input", placeholder: "Enter ZIP Code" },
        { label: "Technical contact name:", type: "input", placeholder: "Enter Technical Contact Name" },
        { label: "Technical contact phonenumber:", type: "input", placeholder: "Enter Technical Contact Phone Number" },
        { label: "Technical contact E-mail:", type: "input", placeholder: "Enter Technical Contact Email" },
        { label: "Phone number:", type: "input", placeholder: "Enter Phone Number" },
        { label: "Which devices have been rebooted:", type: "textarea", placeholder: "List rebooted devices" },
        { label: "Which devices have been reset:", type: "textarea", placeholder: "List reset devices" },
        { label: "Frequency:", type: "input", placeholder: "Frequency of the issue" },
        { label: "Additional comments & taken actions:", type: "textarea", placeholder: "Add comments and actions taken" }
    ],
    "Telefonie - One way audio": [
        { label: "SIPEU:", type: "input", placeholder: "Enter SIPEU" },
        { label: "Company Name:", type: "input", placeholder: "Enter Company Name" },
        { label: "Customer ID:", type: "input", placeholder: "Enter Customer ID" },
        { label: "Street & House Number:", type: "input", placeholder: "Enter Street and House Number" },
        { label: "ZIP Code:", type: "input", placeholder: "Enter ZIP Code" },
        { label: "Technical Contact Name:", type: "input", placeholder: "Enter Technical Contact Name" },
        { label: "Technical Contact Phone Number:", type: "input", placeholder: "Enter Technical Contact Phone Number" },
        { label: "Technical Contact Email:", type: "input", placeholder: "Enter Technical Contact Email" },
        { label: "Phone Number:", type: "input", placeholder: "Enter Phone Number" },
        { label: "Issue Description:", type: "textarea", placeholder: "Describe the issue" },
        { label: "Business Impact:", type: "textarea", placeholder: "Describe the business impact" },
        { label: "Frequency:", type: "input", placeholder: "Enter frequency of the issue" },
        { label: "Occurring Since:", type: "input", placeholder: "Enter the date/time the issue started" },
        { label: "Additional Comments & Actions Taken:", type: "textarea", placeholder: "Add any additional comments or actions taken" }
    ],
    "Telefonie - Quality issues": [
        { label: "SIPEU:", type: "input", placeholder: "Enter SIPEU" },
        { label: "Company Name:", type: "input", placeholder: "Enter Company Name" },
        { label: "Customer ID:", type: "input", placeholder: "Enter Customer ID" },
        { label: "Street & House Number:", type: "input", placeholder: "Enter Street and House Number" },
        { label: "ZIP Code:", type: "input", placeholder: "Enter ZIP Code" },
        { label: "Technical Contact Name:", type: "input", placeholder: "Enter Technical Contact Name" },
        { label: "Technical Contact Phone Number:", type: "input", placeholder: "Enter Technical Contact Phone Number" },
        { label: "Technical Contact Email:", type: "input", placeholder: "Enter Technical Contact Email" },
        { label: "CM MAC Address:", type: "input", placeholder: "Enter CM MAC Address" },
        { label: "Gateway:", type: "input", placeholder: "Enter Gateway Address" },
        { label: "IP Address:", type: "input", placeholder: "Enter IP Address" },
        { label: "Subnet Mask:", type: "input", placeholder: "Enter Subnet Mask" },
        { label: "VTP / KTA:", type: "input", placeholder: "Enter VTP / KTA" },
        { label: "Phone Number:", type: "input", placeholder: "Enter Phone Number" },
        { label: "Occurring Since:", type: "input", placeholder: "Enter the date/time the issue started" },
        { label: "Issue Description:", type: "textarea", placeholder: "Describe the issue" },
        { label: "Frequency:", type: "input", placeholder: "Enter frequency of the issue" },
        { label: "The Quality Issues Occur With:", type: "textarea", placeholder: "Describe who or what is experiencing the issue" },
        { label: "Who Experiences the Quality Issues:", type: "textarea", placeholder: "List impacted users or systems" },
        { label: "3 Call Examples (last 48 hours):", type: "textarea", placeholder: "Provide call examples within the last 48 hours" },
        { label: "Additional Comments & Actions Taken:", type: "textarea", placeholder: "Add any additional comments or actions taken" }
    ],
    "Data - No Connection": [
        { label: "Access ID:", type: "input", placeholder: "Enter Access ID" },
        { label: "Company Name:", type: "input", placeholder: "Enter Company Name" },
        { label: "Customer ID:", type: "input", placeholder: "Enter Customer ID" },
        { label: "Street & House Number:", type: "input", placeholder: "Enter Street and House Number" },
        { label: "ZIP Code:", type: "input", placeholder: "Enter ZIP Code" },
        { label: "Technical Contact Name:", type: "input", placeholder: "Enter Technical Contact Name" },
        { label: "Technical Contact Phone Number:", type: "input", placeholder: "Enter Technical Contact Phone Number" },
        { label: "Technical Contact Email:", type: "input", placeholder: "Enter Technical Contact Email" },
        { label: "CM MAC Address:", type: "input", placeholder: "Enter CM MAC Address" },
        { label: "Gateway:", type: "input", placeholder: "Enter Gateway Address" },
        { label: "IP Address:", type: "input", placeholder: "Enter IP Address" },
        { label: "Subnet Mask:", type: "input", placeholder: "Enter Subnet Mask" },
        { label: "VTP / KTA:", type: "input", placeholder: "Enter VTP / KTA" },
        { label: "Issue Description:", type: "textarea", placeholder: "Describe the issue" },
        { label: "Business Impact:", type: "textarea", placeholder: "Describe the business impact" },
        { label: "LED Status (Modem):", type: "input", placeholder: "Enter Modem LED Status" },
        { label: "Frequency:", type: "input", placeholder: "Enter frequency of the issue" },
        { label: "Occurring Since:", type: "input", placeholder: "Enter the date/time the issue started" },
        { label: "Additional Comments & Actions Taken:", type: "textarea", placeholder: "Add any additional comments or actions taken" }
    ],
    "Data - Packetloss": [
        { label: "Access ID:", type: "input", placeholder: "Enter Access ID" },
        { label: "Company Name:", type: "input", placeholder: "Enter Company Name" },
        { label: "Customer ID:", type: "input", placeholder: "Enter Customer ID" },
        { label: "Street & House Number:", type: "input", placeholder: "Enter Street and House Number" },
        { label: "ZIP Code:", type: "input", placeholder: "Enter ZIP Code" },
        { label: "Technical Contact Name:", type: "input", placeholder: "Enter Technical Contact Name" },
        { label: "Technical Contact Phone Number:", type: "input", placeholder: "Enter Technical Contact Phone Number" },
        { label: "Technical Contact Email:", type: "input", placeholder: "Enter Technical Contact Email" },
        { label: "CM MAC Address:", type: "input", placeholder: "Enter CM MAC Address" },
        { label: "Gateway:", type: "input", placeholder: "Enter Gateway Address" },
        { label: "IP Address:", type: "input", placeholder: "Enter IP Address" },
        { label: "Subnet Mask:", type: "input", placeholder: "Enter Subnet Mask" },
        { label: "VTP / KTA:", type: "input", placeholder: "Enter VTP / KTA" },
        { label: "Packetloss Description:", type: "textarea", placeholder: "Describe the packet loss issue" },
        { label: "Business Impact:", type: "textarea", placeholder: "Describe the business impact" },
        { label: "Occurring Since:", type: "input", placeholder: "Enter the date/time the issue started" },
        { label: "Additional Comments & Actions Taken:", type: "textarea", placeholder: "Add any additional comments or actions taken" }
    ],
    "Data - Performance Issue": [
        { label: "Access ID:", type: "input", placeholder: "Enter Access ID" },
        { label: "Company Name:", type: "input", placeholder: "Enter Company Name" },
        { label: "Customer ID:", type: "input", placeholder: "Enter Customer ID" },
        { label: "Street & House Number:", type: "input", placeholder: "Enter Street and House Number" },
        { label: "ZIP Code:", type: "input", placeholder: "Enter ZIP Code" },
        { label: "Technical Contact Name:", type: "input", placeholder: "Enter Technical Contact Name" },
        { label: "Technical Contact Phone Number:", type: "input", placeholder: "Enter Technical Contact Phone Number" },
        { label: "Technical Contact Email:", type: "input", placeholder: "Enter Technical Contact Email" },
        { label: "CM MAC Address:", type: "input", placeholder: "Enter CM MAC Address" },
        { label: "Gateway:", type: "input", placeholder: "Enter Gateway Address" },
        { label: "IP Address:", type: "input", placeholder: "Enter IP Address" },
        { label: "Performance Issue Description:", type: "textarea", placeholder: "Describe the performance issue" },
        { label: "Business Impact:", type: "textarea", placeholder: "Describe the business impact" },
        { label: "Occurring Since:", type: "input", placeholder: "Enter the date/time the issue started" },
        { label: "Additional Comments & Actions Taken:", type: "textarea", placeholder: "Add any additional comments or actions taken" }
    ],
    "Data - Speed Issues": [
        { label: "Access ID:", type: "input", placeholder: "Enter Access ID" },
        { label: "Company Name:", type: "input", placeholder: "Enter Company Name" },
        { label: "Customer ID:", type: "input", placeholder: "Enter Customer ID" },
        { label: "Street & House Number:", type: "input", placeholder: "Enter Street and House Number" },
        { label: "ZIP Code:", type: "input", placeholder: "Enter ZIP Code" },
        { label: "Technical Contact Name:", type: "input", placeholder: "Enter Technical Contact Name" },
        { label: "Technical Contact Phone Number:", type: "input", placeholder: "Enter Technical Contact Phone Number" },
        { label: "Technical Contact Email:", type: "input", placeholder: "Enter Technical Contact Email" },
        { label: "CM MAC Address:", type: "input", placeholder: "Enter CM MAC Address" },
        { label: "Gateway:", type: "input", placeholder: "Enter Gateway Address" },
        { label: "IP Address:", type: "input", placeholder: "Enter IP Address" },
        { label: "Subnet Mask:", type: "input", placeholder: "Enter Subnet Mask" },
        { label: "VTP / KTA:", type: "input", placeholder: "Enter VTP / KTA" },
        { label: "Measured Speed:", type: "input", placeholder: "Enter Measured Speed" },
        { label: "Expected Speed:", type: "input", placeholder: "Enter Expected Speed" },
        { label: "Business Impact:", type: "textarea", placeholder: "Describe the business impact" },
        { label: "LED Status (Modem):", type: "input", placeholder: "Enter Modem LED Status" },
        { label: "Frequency:", type: "input", placeholder: "Enter frequency of the issue" },
        { label: "Occurring Since:", type: "input", placeholder: "Enter the date/time the issue started" },
        { label: "Additional Comments & Actions Taken:", type: "textarea", placeholder: "Add any additional comments or actions taken" }
    ],
    "Data - Reachability IP": [
        { label: "Access ID:", type: "input", placeholder: "Enter Access ID" },
        { label: "Company Name:", type: "input", placeholder: "Enter Company Name" },
        { label: "Customer ID:", type: "input", placeholder: "Enter Customer ID" },
        { label: "Street & House Number:", type: "input", placeholder: "Enter Street and House Number" },
        { label: "ZIP Code:", type: "input", placeholder: "Enter ZIP Code" },
        { label: "Technical Contact Name:", type: "input", placeholder: "Enter Technical Contact Name" },
        { label: "Technical Contact Phone Number:", type: "input", placeholder: "Enter Technical Contact Phone Number" },
        { label: "Technical Contact Email:", type: "input", placeholder: "Enter Technical Contact Email" },
        { label: "Impacted IP Address:", type: "input", placeholder: "Enter the impacted IP address" },
        { label: "Reachability Issue Description:", type: "textarea", placeholder: "Describe the reachability issue" },
        { label: "Business Impact:", type: "textarea", placeholder: "Describe the business impact" },
        { label: "Occurring Since:", type: "input", placeholder: "Enter the date/time the issue started" },
        { label: "Additional Comments & Actions Taken:", type: "textarea", placeholder: "Add any additional comments or actions taken" }
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
