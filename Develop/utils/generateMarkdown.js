// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") return "";
  const badge = {
    MIT: "![License: MIT](https://img.shields.io/badge/MIT-red)",
    GPLv3: "![License: GPL v3](https://img.shields.io/badge/GPLv3-blue)",
    "Apache 2.0": "![License](https://img.shields.io/badge/Apache_2.0-purple)",
    "BSD 3-Clause": "![License](https://img.shields.io/badge/BSD_3--Clause-gold)",
  };
  return badge[license] || "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    const link = {
      MIT: "https://opensource.org/licenses/MIT",
      GPLv3: "https://www.gnu.org/licenses/gpl-3.0",
      "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
      "BSD 3-Clause": "https://opensource.org/licenses/BSD-3-Clause",
    };
    return link[license];
  } else return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None")
    return `## License
This project is licensed under ${renderLicenseBadge(license)} ${renderLicenseLink(license)}.`;
  else return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Table of Contents
1. Installation
2. Usage
3. License
4. Tests
5. Guidelines
6. License
7. Contact
## Installation
${data.install} 
## Usage
${data.usage}
## Tests
${data.testing}
## Guidelines
${data.guidelines}
${renderLicenseSection(data.licensing)}
## Contact Info for Inquiries
Github: ${data.github}\nEmail: ${data.email} 
`;
}

module.exports = generateMarkdown;
