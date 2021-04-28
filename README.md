# BDD Framework featuring Visual Regression
 Visual Regression Framework featuring Behavior-Driven-Development (Cucumber BDD Framework) and Webdriver I/O

## Setup
### Recommended:
- Visual Studio Code for plugins and example debug configurations.
### Requirements:
- [Node.js v12.22.1 or higher.](https://nodejs.org/download/release/v12.22.1/)
- [Node Package Manager (npm) v6.14.12 or higher.](https://nodejs.org/download/release/v12.22.1/)
- [Java 8 or higher (For displaying allure reports).](https://www.oracle.com/java/technologies/javase-jre8-downloads.html)
### Features:
- [Webdriver I/O v7.3.1](https://webdriver.io/docs/gettingstarted)
- [Typescript v4.2.4](https://www.typescriptlang.org/download)
- [ESLint (enforcing code style and finding errors on transpilation)](https://eslint.org/docs/user-guide/getting-started)
- [EditorConfig (consistent coding style with ease)](https://editorconfig.org/)
- [Cucumber autocomplete Service (Visual Studio Code only)](https://github.com/alexkrechik/VSCucumberAutoComplete) settings for plugin found on: [settings.json](.vscode/settings.json)
- [gherkin-lint (npm package for linting feature files)](https://www.npmjs.com/package/gherkin-lint)
- [Built-in allure reports (see all docs for more info on displaying the report)](https://www.npmjs.com/package/@wdio/allure-reporter)
§## Getting started
### Installation:
Install the project dependencies by executing the following command: `npm install`
### Configuration:
WebdriverIO configuration file [commons/config/wdio.conf.cjs](commons/config/wdio.conf.cjs) comes configured already with [Visual Regression Testing Service](https://webdriver.io/docs/wdio-image-comparison-service)
<br>
Example debug configuration can be found on [launch.json](.vscode/launch.json)

### Run project:
To see a demo of the project simply execute on command line:
```
$	npm run test:visual-regression
```
Note that in the availble scenarios there's one example that is meant to fail 99.9% since that one of the not so good practices on the visual-regression testing (specificly speaking the "Data" image scenario).

### Run code linters
ToDo...
