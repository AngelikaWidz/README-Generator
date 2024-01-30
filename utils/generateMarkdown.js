// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${answers.title}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description
  ${answers.description}
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  ![License Badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
    
  This project is licensed under the ${answers.license} License - see the [LICENSE.md](LICENSE.md) file for details.
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  If you have any questions, feel free to reach out to me:
  
  GitHub: [${answers.username}](https://github.com/${answers.username})
  
  Email: ${answers.email}

`;
}

module.exports = generateMarkdown;
