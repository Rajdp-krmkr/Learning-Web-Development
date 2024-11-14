# Preload attribute

The `preload` attribute is available in both `<audio>` and `<video>` tags in HTML. It controls how much data the browser should preload when the page loads. This can improve user experience by reducing buffering but can also affect page load times and data usage. Here’s how to use it:

---

### Audio Tag with `preload` Attribute

The `<audio>` tag can have the `preload` attribute with values to control how the audio file is loaded before playback.

```html
<audio src="audio-file.mp3" controls preload="auto"></audio>
```

#### `preload` Values for `<audio>`:

1. **`auto`**: The browser loads the entire audio file, allowing for smooth playback.
2. **`metadata`**: Only loads metadata (like duration), not the actual audio content.
3. **`none`**: The audio doesn’t load until the user presses play, saving data.

---

### Video Tag with `preload` Attribute

The `<video>` tag also supports the `preload` attribute, functioning similarly to audio.

```html
<video
  src="video-file.mp4"
  controls
  preload="metadata"
  width="320"
  height="240"
></video>
```

#### `preload` Values for `<video>`:

1. **`auto`**: Loads the entire video when the page loads, enabling quick playback.
2. **`metadata`**: Only loads metadata (like duration, dimensions).
3. **`none`**: No part of the video loads until play is pressed.

---

### Choosing `preload` Values

Use `auto` if immediate playback is important, `metadata` for minimal data use while still accessing info, and `none` to delay loading until the user initiates playback.
