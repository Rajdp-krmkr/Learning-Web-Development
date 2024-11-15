### HTML Entities, `<pre>` Tag, and `<code>` Tag Notes

---

## HTML Entities

HTML entities are special codes used to represent reserved characters, symbols, or non-ASCII characters in an HTML document. These entities ensure that the browser renders the intended characters correctly.

### Common HTML Entities

| Character | Entity Name | Entity Number |
| --------- | ----------- | ------------- |
| `<`       | `&lt;`      | `&#60;`       |
| `>`       | `&gt;`      | `&#62;`       |
| `&`       | `&amp;`     | `&#38;`       |
| `"`       | `&quot;`    | `&#34;`       |
| `'`       | `&apos;`    | `&#39;`       |

### Example: Using Entities in HTML

```html
<p>This is a less-than symbol: &lt;</p>
<p>This is an ampersand: &amp;</p>
```

---

## `<pre>` Tag

The `<pre>` tag is used to display preformatted text. It preserves both spaces and line breaks, displaying the text exactly as it appears in the HTML code.

### Features

- Maintains whitespace and line breaks.
- Typically displayed in a monospace font.

### Example: Preformatted Text

```html
<pre>
  Line 1: This is preformatted text.
  Line 2: Spaces     and line breaks are preserved.
</pre>
```

### Output:

```
  Line 1: This is preformatted text.
  Line 2: Spaces     and line breaks are preserved.
```

---

## `<code>` Tag

The `<code>` tag is used to display a piece of code or programming-related content. It doesn’t preserve line breaks but is often styled with a monospace font for readability.

### Features

- Inline element (can be used within paragraphs).
- Ideal for displaying small code snippets.

### Example: Inline Code

```html
<p>
  Use the <code>console.log()</code> function to print messages in JavaScript.
</p>
```

### Example: Code Block with `<pre>` and `<code>`

For larger blocks of code, combine `<pre>` and `<code>`:

```html
<pre>
<code>
  background-color is used to give a color in a HTML element
</code>
</pre>
```

---

## Differences Between `<pre>` and `<code>`

| Feature        | `<pre>`              | `<code>`             |
| -------------- | -------------------- | -------------------- |
| **Purpose**    | Preformatted text    | Code snippets        |
| **Whitespace** | Preserves whitespace | Does not preserve it |
| **Use Case**   | Large text blocks    | Inline or small code |

---

### Summary

- **HTML Entities**: Represent special characters.
- **`<pre>`**: Preserves spaces and line breaks for preformatted text.
- **`<code>`**: Highlights code snippets.

Use these tags effectively to improve the readability and functionality of your HTML content.
