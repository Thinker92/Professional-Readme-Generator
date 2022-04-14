// Function to generate markdown file for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Licensing:
  [![license](https://img.shields.io/badge/license-${data.licensing}-blue)](https://shields.io)

  ## Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contribution](#contribution)
  -[Testing](#testing)
  -[Additional Information](#additional-info)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  ${data.license}

  ## Contribution:
  ${data.contribution}
  

  ## Testing:
  ${data.tests}

  ## Additional Information:
  - GitHub: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email}

  ## Author
  ${data.author}
`;
}

module.exports = generateMarkdown;
