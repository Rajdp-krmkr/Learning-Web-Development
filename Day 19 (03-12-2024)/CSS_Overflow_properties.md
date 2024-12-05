# Overflow Property in CSS

## Overview
The `overflow` property in CSS controls how content is displayed when it overflows the dimensions of its container. It can determine whether to clip the content, add scrollbars, or display the overflow content.

## Values of `overflow`
- `visible` (default): The overflow content is not clipped and will render outside the element's box.
- `hidden`: The overflow content is clipped and not visible.
- `scroll`: The overflow content is clipped, but scrollbars are provided to navigate the overflow content.
- `auto`: Scrollbars are added only when the content overflows the element's dimensions.

## `overflow-x` and `overflow-y`
The `overflow` property has two sub-properties to control horizontal and vertical overflow separately:
- **`overflow-x`**: Controls the overflow on the horizontal axis.
  - Values: `visible`, `hidden`, `scroll`, `auto`.
- **`overflow-y`**: Controls the overflow on the vertical axis.
  - Values: `visible`, `hidden`, `scroll`, `auto`.

## Shorthand Property
The shorthand `overflow` can define both `overflow-x` and `overflow-y` in one declaration. For example:
```css
/* Equivalent to overflow-x: hidden; and overflow-y: scroll; */
overflow: hidden scroll;
```

## Examples
```css
/* Separate overflow settings */
div {
  overflow-x: scroll;
  overflow-y: hidden;
}

/* Shorthand */
div {
  overflow: auto hidden;
}
```
