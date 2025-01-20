console.log("b2b-templates.js loaded");

// Define common customer details that will be used across all templates
const commonCustomerDetails = [
    { label: "Access ID:", type: "input", section: "Customer Details" },
    { label: "Company name:", type: "input", section: "Customer Details" },
    { label: "Customer ID:", type: "input", section: "Customer Details" },
    { label: "Street Housenumber:", type: "input", section: "Customer Details" },
    { label: "ZIP code:", type: "input", section: "Customer Details" },
    { label: "Technical contact name:", type: "input", section: "Customer Details" },
    { label: "Technical contact phonenumber:", type: "input", section: "Customer Details" },
    { label: "Technical contact E-mail:", type: "input", section: "Customer Details" }
];

// Define service dropdown
const serviceSection = [
    {
        label: "Service Type:",
        type: "select",
        options: [
            "Carrier Ethernet",
            "Ethernet Link",
            "Ethernet Transport (HFC)",
            "Leased Line",
            "Dark Fiber",
            "MultiWIFI",
            "DTV",
            "Internet Pro",
            "IPVPN",
            "IPVPN (HFC)",
            "Wholesale Voip",
            "SIP/Voip",
            "Hosting"
        ],
        section: "Service"
    }
];

window.issueTemplates = {
    "Data - Connection Down": [
        ...commonCustomerDetails,
        ...serviceSection,
        // Technical Details
        { label: "CM MAC:", type: "input", section: "Technical Details" },
        { label: "Gateway:", type: "input", section: "Technical Details" },
        { label: "IP Address:", type: "input", section: "Technical Details" },
        { label: "Subnetmasker:", type: "input", section: "Technical Details" },
        { label: "VTP / KTA:", type: "input", section: "Technical Details" },
        { label: "LED status modem:", type: "input", section: "Technical Details" },
        // Incident Description
        { label: "Issue Description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        { label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],

    "Data - Performance Issue": [
        ...commonCustomerDetails,
        ...serviceSection,
        // Technical Details
        { label: "CM MAC:", type: "input", section: "Technical Details" },
        { label: "Gateway:", type: "input", section: "Technical Details" },
        { label: "IP Address:", type: "input", section: "Technical Details" },
        { label: "Performance metrics:", type: "textarea", section: "Technical Details" },
        // Incident Description
        { label: "Performance Issue Description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        { label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],

    // Continue with other templates...
    "Voice - Feature Issue": [
        ...commonCustomerDetails,
        ...serviceSection,
        // Technical Details
        { label: "SIPEU:", type: "input", section: "Technical Details" },
        { label: "Feature affected:", type: "input", section: "Technical Details" },
        { label: "Phone number(s) affected:", type: "input", section: "Technical Details" },
        // Incident Description
        { label: "Feature Issue Description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        { label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],

    "Data - Packetloss": [
        ...commonCustomerDetails,
        ...serviceSection,
        // Technical Details
        { label: "CM MAC or CPE Name:", type: "input", section: "Technical Details" },
        { label: "IP Address:", type: "input", section: "Technical Details" },
        { label: "Subnetmasker:", type: "input", section: "Technical Details" },
        { label: "VTP / KTA:", type: "input", section: "Technical Details" },
        { label: "A(from)IP Address:", type: "input", section: "Technical Details" },
        { label: "B(to)IP Address:", type: "input", section: "Technical Details" },
        { label: "MTR results:", type: "textarea", section: "Technical Details" },
        // Incident Description
        { label: "Packetloss Description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        { label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],

    "Data - Reachability IP": [
        ...commonCustomerDetails,
        ...serviceSection,
        // Technical Details
        { label: "IP address impacted:", type: "input", section: "Technical Details" },
        { label: "Source IP:", type: "input", section: "Technical Details" },
        { label: "Destination IP:", type: "input", section: "Technical Details" },
        { label: "Traceroute results:", type: "textarea", section: "Technical Details" },
        // Incident Description
        { label: "Reachability Issue Description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        { label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],

    "Voice - One Way Audio": [
        ...commonCustomerDetails,
        ...serviceSection,
        // Technical Details
        { label: "SIPEU:", type: "input", section: "Technical Details" },
        { label: "A-Number:", type: "input", section: "Technical Details" },
        { label: "B-Number:", type: "input", section: "Technical Details" },
        { label: "Call timestamp:", type: "input", section: "Technical Details" },
        { label: "Direction of audio loss:", type: "input", section: "Technical Details" },
        // Incident Description
        { label: "One Way Audio Description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        { label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],

    "Voice - Quality Issues": [
        ...commonCustomerDetails,
        ...serviceSection,
        // Technical Details
        { label: "SIPEU:", type: "input", section: "Technical Details" },
        { label: "Affected phone numbers:", type: "input", section: "Technical Details" },
        { label: "Quality issue type:", type: "select", section: "Technical Details", options: [
            "Echo",
            "Choppy audio",
            "Delay",
            "Static",
            "Other"
        ]},
        { label: "Example calls (min 3):", type: "textarea", section: "Technical Details" },
        // Incident Description
        { label: "Quality Issue Description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        { label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],

    "Voice - No in- or outgoing calls": [
        ...commonCustomerDetails,
        ...serviceSection,
        // Technical Details
        { label: "SIPEU:", type: "input", section: "Technical Details" },
        { label: "Affected phone numbers:", type: "input", section: "Technical Details" },
        { label: "Call direction affected:", type: "select", section: "Technical Details", options: [
            "Incoming",
            "Outgoing",
            "Both"
        ]},
        { label: "Example failed calls:", type: "textarea", section: "Technical Details" },
        // Incident Description
        { label: "Call Issue Description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        { label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],

    "Voice - Number Porting": [
        ...commonCustomerDetails,
        ...serviceSection,
        // Technical Details
        { label: "SIPEU:", type: "input", section: "Technical Details" },
        { label: "Numbers to port:", type: "textarea", section: "Technical Details" },
        { label: "Current provider:", type: "input", section: "Technical Details" },
        { label: "Porting date:", type: "input", section: "Technical Details" },
        { label: "LoA available:", type: "select", section: "Technical Details", options: ["Yes", "No"]},
        // Incident Description
        { label: "Porting Issue Description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],

    "Voice - CCS": [
        ...commonCustomerDetails,
        ...serviceSection,
        // Technical Details
        { label: "SIPEU:", type: "input", section: "Technical Details" },
        { label: "CCS environment:", type: "input", section: "Technical Details" },
        { label: "CCS username:", type: "input", section: "Technical Details" },
        { label: "Feature affected:", type: "input", section: "Technical Details" },
        // Incident Description
        { label: "CCS Issue Description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        { label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],

    "MultiWifi - No Connection": [
        ...commonCustomerDetails,
        ...serviceSection,
        // Technical Details
        { label: "MultiWifi ID:", type: "input", section: "Technical Details" },
        { label: "CM MAC:", type: "input", section: "Technical Details" },
        { label: "AP MAC addresses:", type: "textarea", section: "Technical Details" },
        { label: "AP LED status:", type: "input", section: "Technical Details" },
        { label: "SSID:", type: "input", section: "Technical Details" },
        // Incident Description
        { label: "Connection Issue Description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        { label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],

    "MultiWifi - Performance Issue": [
        ...commonCustomerDetails,
        ...serviceSection,
        // Technical Details
        { label: "MultiWifi ID:", type: "input", section: "Technical Details" },
        { label: "Affected AP MAC addresses:", type: "textarea", section: "Technical Details" },
        { label: "Client device details:", type: "textarea", section: "Technical Details" },
        { label: "SSID:", type: "input", section: "Technical Details" },
        { label: "Signal strength:", type: "input", section: "Technical Details" },
        // Incident Description
        { label: "Performance Issue Description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        { label: "Frequency:", type: "input", section: "Incident Description" },
        { label: "Occurring since:", type: "input", section: "Incident Description" },
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],

    "MultiWifi - Modifying AP configuration": [
        ...commonCustomerDetails,
        ...serviceSection,
        // Technical Details
        { label: "MultiWifi ID:", type: "input", section: "Technical Details" },
        { label: "AP MAC addresses:", type: "textarea", section: "Technical Details" },
        { label: "Requested changes:", type: "textarea", section: "Technical Details" },
        { label: "Current configuration:", type: "textarea", section: "Technical Details" },
        // Incident Description
        { label: "Configuration Change Description:", type: "textarea", section: "Incident Description" },
        { label: "Business Justification:", type: "textarea", section: "Incident Description" },
        // Additional Comments
        { label: "Additional comments & requirements:", type: "textarea", section: "Additional Comments" }
    ],

    "MultiWifi - Swap AP Hardware": [
        ...commonCustomerDetails,
        ...serviceSection,
        // Technical Details
        { label: "MultiWifi ID:", type: "input", section: "Technical Details" },
        { label: "Faulty AP MAC:", type: "input", section: "Technical Details" },
        { label: "AP Model:", type: "input", section: "Technical Details" },
        { label: "AP Location:", type: "input", section: "Technical Details" },
        { label: "RMA number:", type: "input", section: "Technical Details" },
        // Incident Description
        { label: "Hardware Issue Description:", type: "textarea", section: "Incident Description" },
        { label: "Business Impact:", type: "textarea", section: "Incident Description" },
        // Additional Comments
        { label: "Additional comments & taken actions:", type: "textarea", section: "Additional Comments" }
    ],

    "Problem - New Problem ticket": [
        ...commonCustomerDetails,
        ...serviceSection,
        // Technical Details
        { label: "Related incident tickets:", type: "textarea", section: "Technical Details" },
        { label: "Affected systems:", type: "textarea", section: "Technical Details" },
        { label: "Technical analysis:", type: "textarea", section: "Technical Details" },
        // Problem Description
        { label: "Problem Statement:", type: "textarea", section: "Problem Description" },
        { label: "Impact Analysis:", type: "textarea", section: "Problem Description" },
        { label: "Root Cause Analysis:", type: "textarea", section: "Problem Description" },
        { label: "Proposed Solution:", type: "textarea", section: "Problem Description" },
        // Additional Comments
        { label: "Additional notes:", type: "textarea", section: "Additional Comments" }
    ],

    "Change - New Change Ticket": [
        ...commonCustomerDetails,
        ...serviceSection,
        // Change Details
        { label: "Change type:", type: "select", section: "Change Details", options: [
            "Standard",
            "Normal",
            "Emergency"
        ]},
        { label: "Proposed start date:", type: "input", section: "Change Details" },
        { label: "Proposed end date:", type: "input", section: "Change Details" },
        { label: "Change description:", type: "textarea", section: "Change Details" },
        { label: "Implementation plan:", type: "textarea", section: "Change Details" },
        { label: "Rollback plan:", type: "textarea", section: "Change Details" },
        { label: "Risk assessment:", type: "textarea", section: "Change Details" },
        // Additional Comments
        { label: "Additional requirements:", type: "textarea", section: "Additional Comments" }
    ],

    "Major Incident - New Major Incident": [
        ...commonCustomerDetails,
        ...serviceSection,
        // Incident Details
        { label: "Severity level:", type: "select", section: "Incident Details", options: [
            "Critical",
            "High",
            "Medium",
            "Low"
        ]},
        { label: "Number of affected customers:", type: "input", section: "Incident Details" },
        { label: "Affected services:", type: "textarea", section: "Incident Details" },
        { label: "Initial analysis:", type: "textarea", section: "Incident Details" },
        // Impact Assessment
        { label: "Business Impact:", type: "textarea", section: "Impact Assessment" },
        { label: "Customer Impact:", type: "textarea", section: "Impact Assessment" },
        { label: "Workaround available:", type: "select", section: "Impact Assessment", options: ["Yes", "No"]},
        { label: "Workaround description:", type: "textarea", section: "Impact Assessment" },
        // Additional Comments
        { label: "Additional information:", type: "textarea", section: "Additional Comments" }
    ]
};
