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
${data.title} is licensed with ${data.license}
[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)]

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
