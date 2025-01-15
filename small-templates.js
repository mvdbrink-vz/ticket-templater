const issueTemplates = {
    "MultiWifi - Hinder": [
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
        { label: "LED status modem:", type: "input", section: "Technical Details" },
        { label: "VTP / KTA:", type: "input", section: "Technical Details" },
        { label: "SSID:", type: "input", section: "Technical Details" },
        { label: "Access Points Macs & Models:", type: "input", section: "Technical Details" },
        { label: "Access Points Ruckus status:", type: "input", section: "Technical Details" },
        { label: "LED status Access Points:", type: "input", section: "Technical Details" },
        { label: "Mac address of an impacted device:", type: "input", section: "Technical Details" },
		{ label: "Example timestamp of when the issue occurred:", type: "input", section: "Technical Details" },
        // Incident Description
        { label: "Issue description:", type: "textarea", section: "Incident Description" },
        { label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        // Additional Comments
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
		{ label: "Access ID:", type: "input", section: "Technical Details" },
        { label: "SIPEU:", type: "input", section: "Technical Details" },
        { label: "Customer ID:", type: "input", section: "Technical Details" },
        { label: "What Feature isn't working:", type: "input", section: "Technical Details" },
        // Incident Description
        { label: "Issue description:", type: "textarea", section: "Incident Description" },
		{ label: "Business Impact:", type: "textarea", section: "Incident Description" },
		{ label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
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
		{ label: "Access ID:", type: "input", section: "Technical Details" },
        { label: "SIPEU:", type: "input", section: "Technical Details" },
        { label: "Customer ID:", type: "input", section: "Technical Details" },
        { label: "A -Phonenumber:", type: "input", section: "Technical Details" },
        { label: "B -Phonenumber:", type: "input", section: "Technical Details" },
        { label: "Timestamp of call:", type: "input", section: "Technical Details" },
        { label: "LED status modem:", type: "input", section: "Technical Details" },
        { label: "LED status phone:", type: "input", section: "Technical Details" },
        // Incident Description
        { label: "Issue description:", type: "textarea", section: "Incident Description" },
		{ label: "Business Impact:", type: "textarea", section: "Incident Description" },
		{ label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
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
		{ label: "Access ID:", type: "input", section: "Technical Details" },
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
		{ label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
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
		{ label: "Access ID:", type: "input", section: "Technical Details" },
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
        { label: "Company name:", type: "input", section: "Customer Details" },
        { label: "Customer ID:", type: "input", section: "Customer Details" },
        { label: "Street Housenumber:", type: "input", section: "Customer Details" },
        { label: "ZIP code:", type: "input", section: "Customer Details" },
        { label: "Technical contact name:", type: "input", section: "Customer Details" },
        { label: "Technical contact phonenumber:", type: "input", section: "Customer Details" },
        { label: "Technical contact E-mail:", type: "input", section: "Customer Details" },
        // Technical Details
		{ label: "Access ID:", type: "input", section: "Technical Details" },
        { label: "CM MAC:", type: "input", section: "Technical Details" },
		{ label: "LED status modem:", type: "input", section: "Technical Details" },
        { label: "Gateway:", type: "input", section: "Technical Details" },
        { label: "IP Address:", type: "input", section: "Technical Details" },
        { label: "Subnetmasker:", type: "input", section: "Technical Details" },
        { label: "VTP / KTA:", type: "input", section: "Technical Details" },
        // Incident Description
        { label: "Issue description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        { label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],
    "Data - Packetloss": [
        // Customer Details
        { label: "Company name:", type: "input", section: "Customer Details" },
        { label: "Customer ID:", type: "input", section: "Customer Details" },
        { label: "Street Housenumber:", type: "input", section: "Customer Details" },
        { label: "ZIP code:", type: "input", section: "Customer Details" },
        { label: "Technical contact name:", type: "input", section: "Customer Details" },
        { label: "Technical contact phonenumber:", type: "input", section: "Customer Details" },
        { label: "Technical contact E-mail:", type: "input", section: "Customer Details" },
        // Technical Details
		{ label: "Access ID:", type: "input", section: "Technical Details" },
        { label: "CM MAC or CPE Name:", type: "input", section: "Technical Details" },
        { label: "IP Address:", type: "input", section: "Technical Details" },
		{ label: "Subnetmasker:", type: "input", section: "Technical Details" },
	    { label: "VTP / KTA:", type: "input", section: "Technical Details" },
        { label: "A(from)IP Address:", type: "input", section: "Technical Details" },
		{ label: "B(to)IP Address:", type: "input", section: "Technical Details" },
        // Incident Description
        { label: "Packetloss Issue description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
		{ label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],
    "Data - Performance Issue": [
        // Customer Details
        { label: "Company name:", type: "input", section: "Customer Details" },
        { label: "Customer ID:", type: "input", section: "Customer Details" },
        { label: "Street Housenumber:", type: "input", section: "Customer Details" },
        { label: "ZIP code:", type: "input", section: "Customer Details" },
        { label: "Technical contact name:", type: "input", section: "Customer Details" },
        { label: "Technical contact phonenumber:", type: "input", section: "Customer Details" },
        { label: "Technical contact E-mail:", type: "input", section: "Customer Details" },
        // Technical Details
		{ label: "Access ID:", type: "input", section: "Technical Details" },
        { label: "CM MAC:", type: "input", section: "Technical Details" },
        { label: "Gateway:", type: "input", section: "Technical Details" },
        { label: "IP Address:", type: "input", section: "Technical Details" },
        // Incident Description
        { label: "Performance issue description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
		{ label: "Frequency:", type: "input", section: "Incident Description" },
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
        { label: "LED status modem:", type: "input", section: "Technical Details" },
        // Incident Description
		{ label: "Speed Issue Description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
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
        { label: "Access ID:", type: "input", section: "Technical Details" },
        { label: "Customer ID:", type: "input", section: "Technical Details" },
        { label: "IP address impacted:", type: "input", section: "Technical Details" },
        { label: "Source and Destionantion IP: ", type: "textarea", section: "Technical Details" },
        // Incident Description
        { label: "Reachability issue description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
		{ label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
        ]
};
