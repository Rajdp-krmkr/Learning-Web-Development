# HTML Notes: `img` Tag and List Tags (`ul`, `ol`, `dl`)

# 1. HTML `img` Tag

The `img` tag in HTML is used to embed images in a webpage. It is an empty tag, meaning it does not have a closing tag. Images make content visually engaging and can help convey information more effectively.

### Syntax

```html
<img src="image.jpg" alt="description of image" />
```

## 2. Attributes of the img Tag

### (i) `src` (source):

Specifies the URL of the image file. This attribute is required.

```html
<img src="path/to/image.jpg" />
```

### (ii) `alt` (Alternative Text):

Provides alternative text for the image if it fails to load. It also improves accessibility and SEO (Search Engine Optimization).

```html
<img src="image.jpg" alt="Description of the image" />
```

### (iii) `width` and `height`:

Set the width and height of the image (in pixels or percentage).

```html
<img src="image.jpg" alt="description" width="200" height="100" />
```

### (iv) `title`:

Set the width and height of the image (in pixels or percentage).

```html
<img src="image.jpg" alt="description" width="200" height="100" />
```

## Example

```html
<img
  src="https://example.com/logo.png"
  alt="Example Company Logo"
  width="300"
  height="200"
/>
```

# 2. HTML `List` Tag

Lists help structure content in a more organized way. HTML provides different list tags depending on the type of list you want to create.

### Types of List Tags

there are 3 types of list tags in HTML

## 2.1 Unordered List (`ul`)

An unordered list displays items in a bullet format. It's useful for lists without a specific order, like menus or feature lists.

#### Syntax

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Attributes of `ul`

type: Specifies the bullet style. Possible values are:

    disc (default)
    circle
    square

Example

```html
<ul type="circle">
  <li>Feature 1</li>
  <li>Feature 2</li>
</ul>
```

## 2.2 Ordered List (`ol`)

An ordered list displays items in a numbered format, useful for lists where order matters, such as instructions or steps

#### Syntax

```html
<ol>
  <li>Step 1</li>
  <li>Step 2</li>
  <li>Step 3</li>
</ol>
```

### Attributes of `ol`

`type` : Specifies the numbering style. Options are:

- `1` for numbers (default)

- `A`for uppercase letters

- `a` for lowercase letters

- `I` for uppercase Roman numerals

- `i` for lowercase Roman numerals

`start` : Sets the starting number of the list.

```html
<ol type="A" start="3">
  <li>Option C</li>
  <li>Option D</li>
</ol>
```

Example

```html
<ol type="I" start="5">
  <li>Phase V</li>
  <li>Phase VI</li>
</ol>
```

## 2.3 Description List (`dl`)

A description list is used to define terms or concepts, commonly seen in glossaries or Q&A formats.

#### Syntax

```html
<dl>
  <dt>Term 1</dt>
  <dd>Description for Term 1</dd>
  <dt>Term 2</dt>
  <dd>Description for Term 2</dd>
</dl>
```

### Attributes of `dl`

- The dl tag itself has no specific attributes. Each term (dt) and description (dd) can be styled individually using CSS.

```html
<dl>
  <dt>HTML</dt>
  <dd>
    HyperText Markup Language, the standard markup language for documents
    designed to be displayed in a web browser.
  </dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets, used to style and layout web pages.</dd>
</dl>
```

# Importance of List Tags in Web Development
### Unordered Lists (`ul`):
 Ideal for grouping related items in no specific order. Commonly used for navigation menus, lists of features, and more, improving readability and organization.

### Ordered Lists (`ol`):
 Essential for ordered steps, such as tutorials or sequential instructions. Users can follow a specific order, ensuring better understanding and task completion.

### Description Lists (`dl`):
 Perfect for glossary terms, question-answer sections, or defining items and their descriptions. They add clarity to content that has paired data or definitions.

Lists not only make content easier to read but also improve accessibility and SEO. Screen readers interpret lists well, allowing visually impaired users to navigate content easily. Additionally, search engines use list structures to better understand and rank the content on your page.
