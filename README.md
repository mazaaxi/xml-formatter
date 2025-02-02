# xml-formatter

  Converts XML into a human readable format (pretty print) while respecting the xml:space attribute.
  
  This module can also be used on the browser using the browserified version with a small footprint (8KB file size).

## Installation

```
$ npm install https://github.com/mazaaxi/xml-formatter.git
```

## Example

 JavaScript:

```js
var format = require('xml-formatter');
var xml = '<root><content><p xml:space="preserve">This is <b>some</b> content.</content></p>';

var formattedXml = format(xml);
console.log(formattedXml);
```

Output:

```xml
<root>
    <content>
        <p xml:space="preserve">This is <b>some</b> content.</p>
    </content>
</root>
```

## Options

 JavaScript:
 
```js
var format = require('xml-formatter');
var xml = '<root><!-- content --><content><p>This is <b>some</b> content.</content></p>';

var formattedXml = format(xml, {
    indentation: '  ', 
    filter: (node) => node.type !== 'Comment', 
    collapseContent: true, 
    lineSeparator: '\n',
    attrLineSeparator: '&#10;',
});

console.log(formattedXml);
```

Output:

```xml
<root>
  <content>
    <p>This is <b>some</b> content.</p>
  </content>
</root>
```

- `filter` (function(node)) Function to filter out unwanted nodes by returning false.
- `indentation` (String, default=`'    '`) The value used for indentation.
- `collapseContent` (Boolean, default=`false`] True to keep content in the same line as the element. Only works if element contains at least one text node
- `lineSeparator` (String, default=`\r\n`) Specify the line separator to use
- `whiteSpaceAtEndOfSelfclosingTag` (Boolean, default=false) to either end ad self closing tag with `<tag/>` or `<tag />`
- `attrLineSeparator` (String, default=`\r\n`) Specify the attribute line separator to use


## On The Browser

 Page:
 
```html
<script type="text/javascript" src="xml-formatter.js"></script>
```

 Usage:
 
```js
var format = require('xml-formatter');
var xml = '<root><content><p xml:space="preserve">This is <b>some</b> content.</content></p>';

var formattedXml = format(xml);
console.log(formattedXml);
```

Output:

```xml
<root>
    <content>
        <p xml:space="preserve">This is <b>some</b> content.</p>
    </content>
</root>
```

# License

  MIT
