// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None'){
    return `## License
    This project is licensed with ${license}.`;
/////switch statement???
  } 
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license !== 'None'){
    return `## License Link
    This project is licensed with ${license}.`;
///switch statement (see bookmark)
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
- [Description](#description)
- [Installation](#installation)
- [Licence](#licence)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## License
${data.license}
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

## Contributors
${data.contributor}

## Tests
${data.test}

## Questions
For any questions feel free to reach out via [email](mailto:${data.email})
or via my [Github](https://www.github.com/${data.github}/)
`;
}

module.exports = generateMarkdown;
