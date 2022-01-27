<div align="center">
  <a href="https://github.com/stuartajd/marketo-template-parser">
    <img src="images/big-icon.png" alt="Logo">
  </a>

  <h3 align="center">Marketo Guided Template Parser</h3>
  <p align="center">
    Preview your Marketo assets directly within your browser, populating the default values for each of the mkto meta tags used during the template building process.
    <br /><br />
    <a href="https://chrome.google.com/webstore/detail/ihlajkedfljcfaeoainegkigenbfdejm/">Chrome Web Store</a>
    ·
    <a href="https://github.com/stuartajd/marketo-template-parser/issues">Report Bug</a>
    ·
    <a href="https://github.com/stuartajd/marketo-template-parser/issues">Request Feature</a>
  </p>
</div>

## How it works

This script can be included within your templates source code or used as a Chrome extension! 

The script will automatically find all `mkto*` meta tags in the head & parse these out to a format it can use. It will then find the matching `${marketo}` variables within your code and update these to match the default provided in the meta tag or the true / false value for Boolean.
 
This'll all happen as soon as the page has loaded so you'll see the changes straight away, useful for checking your template works as you'd expect!

## Usage

There are two ways to use the parser, by URL or via the Chrome Browser Extension.

#### Browser Extension
Install the browser extension on Google Chrome or Microsoft Edge from the [Chrome Web Store](https://chrome.google.com/webstore/detail/ihlajkedfljcfaeoainegkigenbfdejm/)

#### Script
Use the parser script directly by adding the script to the top of your asset.

```html
<script src="https://stuartajd.github.io/marketo-template-parser/parser.js"></script>
```