import { loadTemplates } from './templateLoader.js';
import { renderFormFields } from './formRenderer.js';
// import { validateForm } from './validation.js';

document.addEventListener("DOMContentLoaded", () => {
    console.log("🚀 Application starting...");
    
    // Get DOM elements and verify they exist
    const form = document.getElementById("template-form");
    const dynamicFieldsDiv = document.getElementById("dynamic-fields");
    const templateOutput = document.getElementById("template-output");
    const summaryOutput = document.getElementById("summary-output");
    const summaryBar = document.getElementById("summary-bar");
    const issueTypeDropdown = document.getElementById("issue-type");
    const departmentSelect = document.getElementById("department");
    const prioritySelect = document.getElementById("priority");

    // Log DOM elements status
    console.log("📝 DOM Elements loaded:", {
        form: !!form,
        dynamicFields: !!dynamicFieldsDiv,
        templateOutput: !!templateOutput,
        summaryOutput: !!summaryOutput,
        summaryBar: !!summaryBar,
        issueType: !!issueTypeDropdown,
        department: !!departmentSelect,
        priority: !!prioritySelect
    });

    let issueTemplates = {};

    // Test each event listener
    departmentSelect.addEventListener("change", function() {
        console.log("🔄 Department changed to:", this.value);
        
        // Clear existing form fields
        dynamicFieldsDiv.innerHTML = '';
        
        // Clear template output
        if (templateOutput) {
            templateOutput.textContent = '';
        }
        
        // Remove existing test button if present
        const existingTestBtn = document.getElementById('fill-test-data');
        if (existingTestBtn) {
            existingTestBtn.remove();
        }

        loadTemplates(this.value, (templates) => {
            console.log("📚 Templates loaded:", Object.keys(templates));
            issueTemplates = templates;
            populateIssueTypes(issueTemplates, issueTypeDropdown);
        });
    });

    // Initialize Issue Type dropdown as empty
    issueTypeDropdown.innerHTML = "<option value=''>-- Select Issue Type --</option>";

    function populateIssueTypes(templates, dropdown) {
        dropdown.innerHTML = "<option value=''>-- Select Issue Type --</option>";
        for (const type in templates) {
            const option = document.createElement("option");
            option.value = type;
            option.textContent = type;
            dropdown.appendChild(option);
        }
    }

    function updateSummary() {
        const priority = document.getElementById("priority").value;
        const issueType = issueTypeDropdown.value;
        const customer = dynamicFieldsDiv.querySelector("input[data-label='Company name:']")?.value || "Customer";
        let accessID = dynamicFieldsDiv.querySelector("input[data-label='Access ID:']")?.value;

        if (!accessID && (issueType.startsWith("Telefonie"))) {
            accessID = dynamicFieldsDiv.querySelector("input[data-label='SIPEU:']")?.value || "SIPEU";
        }

        const summaryText = `${priority || "Priority"} || ${customer} || ${accessID || "Access ID"} || ${issueType || "Issue Type"}`;
        summaryBar.value = summaryText;
        summaryOutput.textContent = summaryText;
    }

    issueTypeDropdown.addEventListener("change", function() {
        const selectedType = this.value;
        if (selectedType) {
            renderFormFields(issueTemplates, selectedType, dynamicFieldsDiv);
            
            // Get service type select after form is rendered
            const serviceTypeSelect = document.getElementById("service-type");
            if (serviceTypeSelect) {
                serviceTypeSelect.addEventListener("change", function() {
                    console.log("Service type changed to:", this.value);
                    updateSummary();
                });
            }
        }
    });

    // Add form submit handler
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Generating...';
        submitBtn.disabled = true;

        try {
            // Group inputs by sections
            const sections = {};
            const inputs = dynamicFieldsDiv.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                const section = input.getAttribute('data-section');
                const label = input.getAttribute('data-label');
                const value = input.value;
                
                if (!sections[section]) {
                    sections[section] = [];
                }
                sections[section].push(`${label} ${value}`);
            });

            // Build the output
            let output = `Priority: ${document.getElementById("priority").value}\n\n`;
            Object.keys(sections).forEach(section => {
                if (sections[section].length > 0) {
                    output += `--- ${section} ---\n`;
                    output += sections[section].join('\n');
                    output += '\n\n';
                }
            });

            // Display the generated template
            templateOutput.textContent = output;
            
            // Add action buttons
            const actionButtons = document.createElement('div');
            actionButtons.classList.add('action-buttons');
            
            // Add copy button
            const copyBtn = document.createElement('button');
            copyBtn.textContent = 'Copy to Clipboard';
            copyBtn.classList.add('copy-btn');
            copyBtn.onclick = async () => {
                try {
                    await navigator.clipboard.writeText(output);
                    copyBtn.textContent = 'Copied!';
                    setTimeout(() => copyBtn.textContent = 'Copy to Clipboard', 2000);
                } catch (err) {
                    console.error('Failed to copy:', err);
                    alert('Failed to copy to clipboard');
                }
            };
            
            // Add save button
            const saveBtn = document.createElement('button');
            saveBtn.textContent = 'Save as .txt';
            saveBtn.classList.add('save-btn');
            saveBtn.onclick = () => {
                const blob = new Blob([output], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'template.txt';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            };
            
            actionButtons.appendChild(copyBtn);
            actionButtons.appendChild(saveBtn);
            templateOutput.parentElement.insertBefore(actionButtons, templateOutput);

        } catch (error) {
            console.error('Error generating template:', error);
        } finally {
            // Reset button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });

    // Update the fillTestData function
    function fillTestData() {
        const inputs = dynamicFieldsDiv.querySelectorAll('input, textarea');
        if (inputs.length === 0) {
            alert('Please select an Issue Type first to generate form fields');
            return;
        }

        inputs.forEach(input => {
            const label = input.getAttribute('data-label');
            if (!label) return; // Skip if no label attribute

            const labelText = label.toLowerCase();
            if (labelText.includes('email')) {
                input.value = 'test@example.com';
            } else if (labelText.includes('phone')) {
                input.value = '0612345678';
            } else if (labelText.includes('mac')) {
                input.value = '00:11:22:33:44:55';
            } else if (labelText.includes('ip')) {
                input.value = '192.168.1.1';
            } else if (labelText.includes('zip')) {
                input.value = '1234 AB';
            } else {
                input.value = 'Test ' + label;
            }
        });

        // Update summary after filling data
        updateSummary();
    }

    // Update the renderFormFields function to add input event listeners
    function renderFormFields(templates, issueType, container) {
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
                    input.setAttribute("data-section", sectionName);
                    input.placeholder = `Enter ${field.label.toLowerCase()}`;

                    // Add input event listener to update summary
                    input.addEventListener('input', updateSummary);

                    fieldDiv.appendChild(label);
                    fieldDiv.appendChild(input);
                    sectionDiv.appendChild(fieldDiv);
                });

                container.appendChild(sectionDiv);
            });
        }
    }

    prioritySelect.addEventListener('change', updateSummary);

    function exportTemplate(format, content) {
        const timestamp = new Date().toISOString().slice(0, 19).replace(/[:]/g, '-');
        let blob, filename, type;

        switch(format) {
            case 'txt':
                blob = new Blob([content], { type: 'text/plain' });
                filename = `template_${timestamp}.txt`;
                break;
            case 'pdf':
                // Would need to add PDF library like pdfmake
                // This is a placeholder for PDF generation
                break;
            case 'json':
                const jsonContent = {
                    timestamp: new Date().toISOString(),
                    department: document.getElementById('department').value,
                    issueType: document.getElementById('issue-type').value,
                    priority: document.getElementById('priority').value,
                    fields: {} // Add logic to collect all field values
                };
                blob = new Blob([JSON.stringify(jsonContent, null, 2)], { type: 'application/json' });
                filename = `template_${timestamp}.json`;
                break;
        }

        if (blob && filename) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
    }

    // Add export buttons to the template output section
    const exportButtons = document.createElement('div');
    exportButtons.classList.add('export-buttons');
    exportButtons.innerHTML = `
        <button onclick="exportTemplate('txt', templateOutput.textContent)">Export as TXT</button>
        <button onclick="exportTemplate('json', templateOutput.textContent)">Export as JSON</button>
    `;
    templateOutput.parentElement.appendChild(exportButtons);
});
