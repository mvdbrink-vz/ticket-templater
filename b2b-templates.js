export const issueTemplates = {
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
        { label: "LED status modem:", type: "input", section: "Technical Details" },
        // Incident Description
		{ label: "Speed Issue Description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        { label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],
};
