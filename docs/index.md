---
layout: default
---
# Overview

Jsontron is a **Schematron** based **JSON** semantic rules engine. It implements **_phase, pattern, rule, context_** and **_assert_** elements of Schematron. It also provides a detailed reporting mechanism for semantic validation results.

Jsontron module was developed by **Amer Ali** as part of DPS dissertation supervised by **Dr. Lixin Tao** at **School of Computer Science and Information Systems
Pace University, New York**.

Here is an **abstract** from the study:

_JavaScript Object Notation (JSON) has emerged as a popular format for business data exchange. It has a grammar-based schema language called – JSON Schema (IETF draft 7). The JSON Schema provides facilities to specify syntax constraints on the JSON data. There are a number of tools available in a variety of programming languages for JSON Schema validation. However, JSON does not have a standard or a framework to specify the semantic constraints, neither it has any reusable validation tool for semantic rules. In order for JSON data validation to be effective, it needs both syntax and semantic specification standards/frameworks and validation toolset._

_XML is another popular format for business data exchange that preceded JSON. XML has a mature ecosystem for specifying and validating syntax and semantic constraints. It has XML Schema and several other syntax constraints specification standards. It has Schematron as a semantic constraints specification language which is an ISO standard [ISO/IEC 19757-3]._

_This study proposes a framework for specifying semantic constraints for JSON data in JSON format, drawing upon the power, simplicity, and semantics of Schematron standard. A reusable JavaScript/NodeJS based validation tool was also developed to process the JSON semantic rules._

_The framework assumes that due to inherent differences between XML and JSON data formats, not all Schematron concepts will be applicable to this study._

## What Problem Jsontron Solves?

Jsontron - Schematron based JSON semantic validator solves problems similar to one posted on [StackOverflow](https://stackoverflow.com/questions/28629107/json-is-there-an-equivalent-of-schematron-for-json-and-json-schema-that-is-a):

Excerpt from StackOverflow:

<p>Here is a JSON instance showing the start-time and end-time for a meeting:</p>

<pre><code>{
    "start time": "2015-02-19T08:00:00Z",
    "end time": "2015-02-19T09:00:00Z"
}
</code></pre>

<p>I can specify the structure of that instance using JSON Schema: the instance must contain an object with a "start time" property and an "end time" property and each property must be a date-time formatted string. See below for the JSON schema. But what I cannot specify is this: the meeting must start before it ends. That is, the value of "start time" must be less than the value of "end time". Some people call this data dependency a co-constraint. In the XML world there is a wonderful, simple technology for expressing co-constraints: Schematron. I am wondering if there is an equivalent technology in the JSON world?  What would you use to <em>declaratively</em> describe the relationship between the value of "start time" and "end time"?  (Note: writing code in some programming language is <em>not</em> what I mean by "declaratively describe the relationships". I am seeking a declarative means to describe the data dependencies that are present in JSON documents, not procedural code.)</p>

<pre><code>{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "definitions": {
        "meeting": {
            "type": "object",
            "properties": {
                "start time": { "type": "string", "format": "date-time"},
                "end time": { "type": "string", "format": "date-time"}
            },
            "required": [ "start time", "end time" ],
            "additionalProperties": false
        }
    },
    "$ref": "#/definitions/meeting"
}
</code></pre>

Same thread on StackOverflow contains the [solution provided by Jsontron](https://stackoverflow.com/a/52840754/10514417).

# Presentation Deck

Here is a pdf version of [Presentation Deck](./Jsontron-presentation-v1.pdf) that summarizes the study.

**Highlights of Presentation**

* Why Business Data Validation ?
* JSON - JavaScript Object Notation
* Loan Data Example
* Data Validation Analogy
* What is JSON Syntax Validation ?
* What is JSON Semantic Validation ?
* Limitations of Current JSON Data Validation
* What is Schematron ?

# Jsontron Tutorial

Here is the pdf version of the [Jsontron Tutorial](./Jsontron-tutorial-v1.pdf).

**Highlights of Jsontron Tutorial**

- **Introduction**
    - Constraint Specification in Schematron
    - Element schema
    - Element phase
    - Element pattern	
    - Element rule	
    - Element assert or report	
 - **Setting Up and Running Jsontron**	
    - Installing node.js	
    - Installing module jsontron	
    - Module jsontron structure	
    - Test run module  jsontron	
 - **How to Specify a Semantic Rule**	
    - Prerequisites	
    - Data	
    - Simple Example	
    - Adding multiple assert, rule, pattern and phase elements	
    - Loan Data Main Example	
    - Examples for phase, pattern, rule, assert, context, assert and report elements	
    - Stack Overflow Meeting Times Dilemma Example	
 - **IBM Schematron Tutorial**	
    - Prerequisites	
    - Schematron overview and example	
    - Basics of rules, patterns, and assertions	
    - Reports and communications control	
    - Intermediate Schematron features
 - References	

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
