# Commbank Super Hero Super Villain Web Automation

## Usage

Open the CommbankWebAutomation folder in Visual Studio Code
Start a new terminal
Run the following commands

    npm install
    npm run test
    npm run test:debug  -- to debug tests
    npm run allure-report -- to view the test result report

## Project with CucumberJS configured with typescript

- Allure Reporter
- Typescript PageObjects
- TypeScript Cucumber step decorators
- Chai For assertions
- Selenium Standalone with chrome and firefox capabilities in headless mode
- Vscode launch configuration to debug tests

## Debugging Tests

- `browser.debug()` statement in code and then: `npm run test:debug` this will enable debug repl in console window
- Add breakpoints in vscode or debugger statement and run launch configuration in vscode.

### Dependencies

Java must be installed to run allure reports
