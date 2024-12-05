
# HTML Basics: `class`, `id`, `video`, `audio`, and `iframe` Tags

This document provides an overview of the essential HTML tags and attributes, including `class`, `id`, `video`, `audio`, and `iframe`. These elements and attributes help in structuring, styling, and enhancing multimedia content on your webpages.

---

## 1. The `class` and `id` Attributes

Both `class` and `id` are attributes used for identifying and styling HTML elements. They play a key role in adding CSS or JavaScript to specific parts of the HTML document.

### `class` Attribute
- Used to apply the same styling to multiple elements.
- Can be assigned to several elements across the page.
- In CSS, classes are selected using a `.` (dot) followed by the class name.

**Example:**
```html
<p class="intro">This is an introductory paragraph.</p>
<p class="intro">This is another paragraph with the same styling as the first.</p>
```

### `id` Attribute
- Used to uniquely identify an element within the HTML document.
- Should be unique; each `id` must appear only once per page.
- In CSS, IDs are selected using `#` followed by the id name.

**Example:**
```html
<p id="main-intro">This paragraph has a unique ID for styling.</p>
```

---

## 2. Multimedia Tags: `video` and `audio`

HTML provides native support for embedding video and audio content directly within your pages, allowing you to enrich the user experience without needing external plugins.

### `video` Tag
The `<video>` tag embeds video content into an HTML document. Various attributes like `controls`, `autoplay`, and `loop` can be used to control playback behavior.

**Example:**
```html
<video src="video.mp4" controls width="600">
  Your browser does not support the video tag.
</video>
```

**Attributes:**
- `src`: URL of the video file.
- `controls`: Adds playback controls (play, pause, etc.).
- `autoplay`: Starts playing the video automatically.
- `loop`: Replays the video once it finishes.
- `muted`: Mutes the audio of the video.

### `audio` Tag
The `<audio>` tag is used to embed audio files. Similar to the `<video>` tag, it supports playback controls and can be customized with various attributes.

**Example:**
```html
<audio src="audio.mp3" controls>
  Your browser does not support the audio tag.
</audio>
```

**Attributes:**
- `src`: URL of the audio file.
- `controls`: Adds audio playback controls.
- `autoplay`: Starts playing the audio automatically.
- `loop`: Replays the audio once it finishes.

---

## 3. Embedding External Content: `iframe`

The `<iframe>` tag allows embedding of external resources such as web pages, videos, or interactive maps directly within the HTML document.

**Example:**
```html
<iframe src="https://www.example.com" width="600" height="400">
  Your browser does not support iframes.
</iframe>
```

**Attributes:**
- `src`: URL of the page to embed.
- `width` & `height`: Specify the dimensions of the iframe.
- `allow`: Grants permissions for the embedded content (e.g., `fullscreen`).
- `frameborder`: Sets the width of the iframe’s border (default is `1`; `0` removes the border).
- `title`: Provides an accessible name for the iframe, helping screen readers identify it.

---

## Summary

- **`class`** and **`id`** are attributes used to style and target HTML elements.
- **`video`** and **`audio`** tags allow embedding of multimedia files directly in HTML with various playback options.
- **`iframe`** is used to embed external content like web pages and maps.

These elements and attributes are fundamental tools for enhancing interactivity, multimedia, and style on your webpages. Practice using them to become proficient in modern web development!