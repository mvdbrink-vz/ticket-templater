export function loadTemplates(department, callback) {
    console.log("Loading templates for department:", department);
    let scriptTag = document.getElementById("template-script");
    if (scriptTag) {
        console.log("Removing existing script tag");
        scriptTag.remove();
    }

    // If no department is selected, just clear the issue types
    if (!department) {
        callback({});
        return;
    }

    scriptTag = document.createElement("script");
    scriptTag.id = "template-script";

    if (department === "tech-services-small") {
        scriptTag.src = "small-templates.js";
    } else if (department === "2nd-line-b2b") {
        scriptTag.src = "b2b-templates.js";
    } else {
        console.warn("Invalid department selected:", department);
        callback({});
        return;
    }

    console.log(`Loading template file: ${scriptTag.src}`);

    scriptTag.onload = () => {
        console.log("Template file loaded successfully");
        if (typeof window.issueTemplates !== "undefined") {
            callback(window.issueTemplates);
        } else {
            console.error("Failed to load templates - window.issueTemplates is undefined");
            callback({});
        }
    };

    scriptTag.onerror = (error) => {
        console.error(`Failed to load ${scriptTag.src}:`, error);
        callback({});
    };

    document.body.appendChild(scriptTag);
} 