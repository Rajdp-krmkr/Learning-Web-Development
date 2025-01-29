# CSS Animation Properties

CSS animations allow you to animate transitions between CSS states over a period of time. This note covers key animation properties, animation-fill-mode, and creating multiple animations.

---

## **animation-name**
Specifies the name of the keyframes to bind to the selector.

### Syntax:
```css
animation-name: keyframe-name;
```

### Example:
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.element {
  animation-name: fadeIn;
}
```

---

## **animation-duration**
Specifies the duration of the animation.

### Syntax:
```css
animation-duration: time;
```

### Example:
```css
.element {
  animation-duration: 2s; /* 2 seconds */
}
```

---

## **animation-timing-function**
Specifies the speed curve of the animation.

### Syntax:
```css
animation-timing-function: linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(n,n,n,n);
```

### Example:
```css
.element {
  animation-timing-function: ease-in-out;
}
```

---

## **animation-delay**
Specifies a delay before the animation starts.

### Syntax:
```css
animation-delay: time;
```

### Example:
```css
.element {
  animation-delay: 1s; /* 1 second */
}
```

---

## **animation-iteration-count**
Defines the number of times an animation should run.

### Syntax:
```css
animation-iteration-count: number | infinite;
```

### Example:
```css
.element {
  animation-iteration-count: infinite; /* Runs forever */
}
```

---

## **animation-direction**
Specifies whether the animation should play in reverse or alternate directions.

### Syntax:
```css
animation-direction: normal | reverse | alternate | alternate-reverse;
```

### Example:
```css
.element {
  animation-direction: alternate; /* Alternates between normal and reverse */
}
```

---

## **animation-fill-mode**
Defines how the animation applies styles to its target before and after execution.

### Syntax:
```css
animation-fill-mode: none | forwards | backwards | both;
```

### Values:
- **none**: Default, no styles applied outside the animation.
- **forwards**: Retains the styles from the last keyframe after the animation ends.
- **backwards**: Applies the styles of the first keyframe before the animation starts.
- **both**: Applies both forwards and backwards rules.

### Example:
```css
.element {
  animation-fill-mode: forwards; /* Retains end styles */
}
```

---

## **animation shorthand property**
Combines multiple animation properties into one declaration.

### Syntax:
```css
animation: name duration timing-function delay iteration-count direction fill-mode;
```

### Example:
```css
.element {
  animation: fadeIn 2s ease-in 1s infinite alternate forwards;
}
```

---

## **Keyframe Example**
A keyframe defines the stages of an animation.

### Example:
```css
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.element {
  animation: bounce 1s infinite;
}
```

---

## **Multiple Animations**
You can apply multiple animations to an element by separating them with commas.

### Example:
```css
@keyframes move {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}

@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

.element {
  animation: move 2s linear, fade 2s ease-in;
}
```

---

With these properties, you can create highly dynamic and engaging animations to enhance user interfaces.
