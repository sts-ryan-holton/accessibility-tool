# :mag: jQuery Accessibility Tool Plugin

This is a lightweight, modern jQuery plugin that aids with the accessibility of a website.

#### Features:

- Lightweight **less than 5kb** minified JS.
- Options to customise the plugin.
- Works with modern browsers.
- Easy to use.

#### Requirements

- This accessibility plugin requires you to be using **REM** values for font sizes throughout your website. You must also be using an up-to-date, modern browser. We currently **do not support Internet Explorer** due to partial support with [LET](https://caniuse.com/#feat=let) and no support for [CSS filters.](https://caniuse.com/#feat=css-filters&search=filter)

- This tool also utilises WebStorage (localstorage), please check your [browser support](https://caniuse.com/#feat=namevalue-storage) for this.

#### Browser Support

We aim to support most **modern browsers***. However, we currently have little/no support for the following browsers:

- Internet Explorer: `<=` **10** _(not supported)_
- Internet Explorer: `==` **11** _(little/no support)_
- Edge: `==` **17** _(little/no support)_

For Front-End CSS/styling, we aim to support the following as listed in our **gulpfile.js**

```
browsers: [
  "last 2 versions",
  ">= 0.2%",
  "Chrome >= 55",
  "Firefox >= 54",
  "iOS >= 10",
  "Safari >= 10",
  "Android >= 4.4"
]
```

## Installation

You can install either through NPM or by Downloading, unzipping and including the relevant files:

#### NPM

``` bash
# installation
$ npm install accessibility-tool --save
```

#### Download the .zip

[Download the latest version of the Accessibility Tool](https://github.com/sts-ryan-holton/accessibility-tool/releases) plugin from our Github repository.

## Setup

After installing the plugin, simply include jQuery, our CSS and our minified JS:

#### CSS

```
<link rel="stylesheet" href="dist/css/accessibility-tool.css">
```

#### JS

We use the Slim build of jQuery 3.x to exclude certain features that aren't needed for this project. You don't have to use the Slim build.

```
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="dist/js/accessiblity-tool.min.js"></script>
```

#### Include the markup

```
<!-- Accessibility Tool Markup -->
<div id="accessibility-tool" class="accessibility-tool">
  <button class="btn-toggler toggler" type="button" role="button">
    <i class="icon icon-toggler"></i>
  </button>
  <div class="controls">
    <ul>
      <li>
        <button type="button" role="button" class="btn-control" data-font-size="increase">
          <i class="icon icon-increase"></i>
          Increase Font
        </button>
      </li>
      <li>
        <button type="button" role="button" class="btn-control" data-font-size="decrease">
          <i class="icon icon-decrease"></i>
          Decrease Font
        </button>
      </li>
      <li>
        <button type="button" role="button" class="btn-control" data-grayscale-toggler="toggle">
          <i class="icon icon-dark"></i>
          Black &amp; White
        </button>
      </li>
      <li>
        <button type="button" role="button" class="btn-control" data-inverse-toggler="toggle">
          <i class="icon icon-inverse"></i>
          Inverse Colours
        </button>
      </li>
      <li>
        <button type="button" role="button" class="btn-control" data-links-toggler="toggle">
          <i class="icon icon-links"></i>
          Highlight Links
        </button>
      </li>
      <li>
        <button type="button" role="button" class="btn-control" data-reset-toggler="reset">
          <i class="icon icon-reset"></i>
          Reset Filters
        </button>
      </li>
    </ul>
  </div>
</div>
```

#### Initialise the plugin

```
<script>
  $(function() {
    $('#accessibility-tool').accessibilityTool()
  })
</script>
```

## Starter template

Use this starter template to get started. Or, simply copy the relevant components from below.

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Accessibility Tool CSS -->
    <link rel="stylesheet" href="src/dist/css/accessibility-tool.css">

    <title>Accessibility Tool</title>
  </head>
  <body>
    <!-- Your Page Here -->
    ...

    <!-- Accessibility Tool Markup -->
    <div id="accessibility-tool" class="accessibility-tool">
      <button class="btn-toggler toggler" type="button" role="button">
        <i class="icon icon-toggler"></i>
      </button>
      <div class="controls">
        <ul>
          <li>
            <button type="button" role="button" class="btn-control" data-font-size="increase">
              <i class="icon icon-increase"></i>
              Increase Font
            </button>
          </li>
          <li>
            <button type="button" role="button" class="btn-control" data-font-size="decrease">
              <i class="icon icon-decrease"></i>
              Decrease Font
            </button>
          </li>
          <li>
            <button type="button" role="button" class="btn-control" data-grayscale-toggler="toggle">
              <i class="icon icon-dark"></i>
              Black &amp; White
            </button>
          </li>
          <li>
            <button type="button" role="button" class="btn-control" data-inverse-toggler="toggle">
              <i class="icon icon-inverse"></i>
              Inverse Colours
            </button>
          </li>
          <li>
            <button type="button" role="button" class="btn-control" data-links-toggler="toggle">
              <i class="icon icon-links"></i>
              Highlight Links
            </button>
          </li>
          <li>
            <button type="button" role="button" class="btn-control" data-reset-toggler="reset">
              <i class="icon icon-reset"></i>
              Reset Filters
            </button>
          </li>
        </ul>
      </div>
    </div>

    <!-- jQuery 3.x -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

    <!-- Accessibility Tool JS -->
    <script src="dist/js/accessiblity-tool.min.js"></script>

    <!-- Initialise the plugin -->
    <script>
      $(function() {
        $('#accessibility-tool').accessibilityTool()
      })
    </script>
  </body>
</html>
```

## Options

Customise our **default options** from the list below if required:

```
<script>
  $(function() {
    $('#accessibility-tool').accessibilityTool({
      toggler:             '.btn-toggler',  // (string) Button to toggle the tool visibility.
      transitions:         true,            // (boolean) Enable/Disable transitions on the tool.
      transitionSpeed:     500,             // (integer) Transition duration speed in 'ms'.
      dataFontIncrease:    'increase',      // (string) Data attribute value of font increase button.
      dataFontDecrease:    'decrease',      // (string) Data attribute value of font decrease button.
      dataGrayscale:       'toggle',        // (string) Data attribute value of greyscale button.
      dataInverse:         'toggle',        // (string) Data attribute value of inverse colours button.
      dataHighlightLinks:  'toggle',        // (string) Data attribute value of highlight links button.
      dataReset:           'reset'          // (string) Data attribute value of reset filters button.
    })
  })
</script>
```

## Feature / Bug reports

All bug reports must include relevant steps to reproduce along with relevant live examples.

- Submit a [bug report](https://github.com/sts-ryan-holton/accessibility-tool/issues/new?template=bug_report.md) using our Github issue creator.
- Submit a [feature request](https://github.com/sts-ryan-holton/accessibility-tool/issues/new?template=feature_request.md) using our Github issue creator.

## License

This project is open source and has been built and developed by our [contributors.](https://github.com/sts-ryan-holton/accessibility-tool/graphs/contributors)
