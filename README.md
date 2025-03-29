# Lumma Challenge

Project created for the Luma Challenge, this project have test automations made with Cypress, a tool made for test web applications.

## Menu 🚀

- [About the project](#about-the-project)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [How to run the tests](#how-to-run-the-tests)
- [Test Reports](#test-reports)
  
## About the project

The project have some features as:

- Easy to start sctructure
- Integration with GitHub Actions for CI/CD
- Automated reports using MochaAwsome even on the pipeline

## Prerequisites

Before run anything, make sure that you have the following installed:

- Node.js
- NPM or Yarn

## Installation

To install the project and its dependencies, run the following commands:

```bash
# Clone the repository
git clone https://github.com/thyagosassosheldon/luma_challenge.git

# Navigate to the project directory
cd luma_challenge

# Install dependencies
npm install
or
yarn install
```

## How to run the tests

Cypress can be run both in UI or Headless mode with the following commands:

```bash
#Headless mode
npx cypress run

#UI mode
npx cypress open
```
* Reports are only generated in headless mode and you can find it on cypress/reports/html

## Test Reports

Reports are made using Mochawesome-Reporter and its avaiable after any headless run, even on CI( In this case the report are going be avaiable as an artifact at the summary).

---
