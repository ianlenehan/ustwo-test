# ustwo Front End Dev Code Test

### Create an HTML form with the specified fields
Complete. The form does nothing with the data. If submitted, it simply prints a message at the bottom of the form.

### Using a CSS pre-processor of your choice (e.g. SASS) write styles to make the form’s layout match the screenshot below, as closely as you can.
SASS was used to write styles. This is compiled using a SASS compiler (node-sass) and watcher (nodemon). These were both generated by npm scripts. In the terminal, run <b>npm run watch-css</b> to run the watcher.

### Using JavaScript, but without using any libraries, add validation to ensure that, if the Celebration type is “Other”, the text input is not empty.
Required booleans have been added in the HTML for the required fields, but the default is over-ridden in JS so that the JS can perform the automation. Any errors are returned as text at the bottom of the form.

----

#### Using any combination of Mocha, Chai, and CasperJS (or equivalent) that you’re comfortable with, write a test for the form’s validation.

This is tested using Mocha & Chai. The testing checks the data that is passed into the validateForm function. Tests can be run by opening test/testrunner.html in the browser.

#### Lint your JavaScript
JavaScript is linted using JSHint. This can be run in the terminal with the command <b>jshint app/form.js</b>.