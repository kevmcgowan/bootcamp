// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  [Description](#description)
  ${data.description}

`;
}

module.exports = generateMarkdown;



// use axios to store github license
// castify to record