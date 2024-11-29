# CSS Cascade Algorithm and Specificity

## CSS Cascade Algorithm

The CSS Cascade Algorithm determines which styles are applied to an element when multiple conflicting rules target the same element. The process follows three main principles:

1. **Importance**:

   - Styles marked with `!important` take the highest priority and override other rules.
   - Inline styles with `!important` override all other styles.

2. **Specificity**:

   - The specificity of a selector determines its priority in the cascade.
   - More specific selectors override less specific ones.

3. **Source Order/ order of appearance**:
   - If specificity and importance are equal, the style declared later in the source order will take precedence.

---

## Specificity

Specificity is calculated using a weighted system based on the components of the CSS selector. It is divided into four levels:

1. **Inline styles** (e.g., `style="..."`) – **Score: 1000**
2. **ID selectors** (e.g., `#id`) – **Score: 100**
3. **Class selectors, attributes, and pseudo-classes** (e.g., `.class`, `[attr=value]`, `:hover`) – **Score: 10**
4. **Element selectors and pseudo-elements** (e.g., `div`, `p`, `::before`) – **Score: 1**
5. **Universal selector** (`*`) – **Score: 0**

### Specificity Calculation

To calculate specificity:

- Start with `(A, B, C, D)` where:

  - **A** = Inline styles (0 or 1)
  - **B** = Number of ID selectors
  - **C** = Number of class selectors, attributes, and pseudo-classes
  - **D** = Number of element selectors and pseudo-elements

- Add up each category's value to form the specificity score.

For example:

- Selector: `#header .menu li`
  - **A = 0**, **B = 1** (1 ID), **C = 1** (1 class), **D = 1** (1 element)
  - Specificity: (0, 1, 1, 1)

---

## Exercises

### Exercise 1

Calculate the specificity of the following selectors:

1. `div p span`
2. `#main-content .highlight a`
3. `body header h1`

---

### Exercise 2

Compare the specificity of these two rules:

1. `#sidebar .nav-item.active`
2. `.content-area h2`

---

### Exercise 3

Which rule takes precedence in the following scenario?

1. Inline style: `<p style="color: red;">`
2. External style:
   ```css
   p {
     color: blue;
   }
   ```
