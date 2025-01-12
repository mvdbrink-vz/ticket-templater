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
    ]
};

const form = document.getElementById("template-form");
const dynamicFieldsDiv = document.getElementById("dynamic-fields");
const templateOutput = document.getElementById("template-output");
const summaryBar = document.getElementById("summary-bar");

document.getElementById("issue-type").addEventListener("change", function () {
    const issueType = this.value;
    dynamicFieldsDiv.innerHTML = "";

    if (issueTemplates[issueType]) {
        const sections = {};

        issueTemplates[issueType].forEach(field => {
            if (!sections[field.section]) sections[field.section] = [];
            sections[field.section].push(field);
        });

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

                let input = field.type === "textarea" ? document.createElement("textarea") : document.createElement("input");
                input.type = field.type === "textarea" ? "" : "text";
                input.placeholder = `Enter ${field.label.toLowerCase()}`;

                fieldDiv.appendChild(label);
                fieldDiv.appendChild(input);
                sectionDiv.appendChild(fieldDiv);
            });

            dynamicFieldsDiv.appendChild(sectionDiv);
        });
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = dynamicFieldsDiv.querySelectorAll("input, textarea");
    let generatedTemplate = `Priority: ${document.getElementById("priority").value}

`;

    const sections = {};
    inputs.forEach(input => {
        const section = input.closest(".form-section").querySelector("h3").textContent;
        if (!sections[section]) sections[section] = [];
        const label = input.previousElementSibling.textContent;
        const value = input.value;
        sections[section].push(`${label} ${value}`);
    });

    Object.keys(sections).forEach(section => {
        generatedTemplate += `--- ${section} ---
`;
        generatedTemplate += sections[section].join("
");
        generatedTemplate += `

`;
    });

    templateOutput.textContent = generatedTemplate;
});