---
layout: default
---
# Overview

Jsontron is a **Schematron** based **JSON** semantic rules engine. It implements **_phase, pattern, rule, context_** and **_assert_** elements of Schematron. It also provides a detailed reporting mechanism for semantic validation results.

Jsontron module was developed by **Amer Ali** as part of DPS dissertation at **School of Computer Science and Information Systems
Pace University, New York**.

Here is an **abstract** from the study:

_JavaScript Object Notation (JSON) has emerged as a popular format for business data exchange. It has a grammar-based schema language called – JSON Schema (IETF draft 7). The JSON Schema provides facilities to specify syntax constraints on the JSON data. There are a number of tools available in a variety of programming languages for JSON Schema validation. However, JSON does not have a standard or a framework to specify the semantic constraints, neither it has any reusable validation tool for semantic rules. In order for JSON data validation to be effective, it needs both syntax and semantic specification standards/frameworks and validation toolset._

_XML is another popular format for business data exchange that preceded JSON. XML has a mature ecosystem for specifying and validating syntax and semantic constraints. It has XML Schema and several other syntax constraints specification standards. It has Schematron as a semantic constraints specification language which is an ISO standard [ISO/IEC 19757-3]._

_This study proposes a framework for specifying semantic constraints for JSON data in JSON format, drawing upon the power, simplicity, and semantics of Schematron standard. A reusable JavaScript/NodeJS based validation tool was also developed to process the JSON semantic rules._

_The framework assumes that due to inherent differences between XML and JSON data formats, not all Schematron concepts will be applicable to this study._




Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](./another-page.html).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# Header 1

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## Header 2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

### Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://assets-cdn.github.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```
