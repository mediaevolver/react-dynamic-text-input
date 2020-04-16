## Descriptions
Create component to edit values inline. This component should appear as a normal text on the page, editable when clicked and displaying result of the action triggered by edit.

## Requirements
* Static text displays current value
* Clicking on static text will make it editable
* Clicking out of the field or pressing Enter will confirm the change
* Status indicator will display beside the text to notify user
    * Loading - change has been submitted
    * Success - change accepted
    * Error - change refused
* On error a message will display under the text

## Running Instructions
* yarn -  add dependencies
* yarn start - run the application
* yarn test a - run the test suite

## Usage Instructions

* To test the "happy" path, click the Hello World message, then type any letters except for letter "z" in the input box, then press Enter, or click outside the input box.
* To test the "error" path, click the Hello World message, then type the letter z in the input box.