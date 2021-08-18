// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None'){
    return `## License
    This project is licensed with ${license}.`;

  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license !== 'None'){
    return `## License Link
    This project is licensed with ${license}.`;

  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //creating my markdown with template strings
}

// TODO: Create a function to generate markdown for README
//CONSTRUCTS ENTIRE README FILE
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Tests](#Tests)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 

## Installation
${data.installation}

## License
${data.license}

## Contributors
${data.contributor}

## Tests
${data.test}

## Repository Link
${data.deployed}
${data.github}
`;
}

module.exports = generateMarkdown;
