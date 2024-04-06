# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Github](https://github.com/delroscol98/Interactive-Rating-Component)
- Live Site URL: [Github Pages](https://delroscol98.github.io/Interactive-Rating-Component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

First time using JavaScript without a tutorial... scary, challenging, but a start.

Below is some code snippets I'm proud of:

```html
<ul>
  <li><button type="button">1</button></li>
  <li><button type="button">2</button></li>
  <li><button type="button">3</button></li>
  <li><button type="button">4</button></li>
  <li><button type="button">5</button></li>
</ul>
```

```css
.rating ul li button {
  width: 3.542vw;
  height: 3.542vw;
  border-radius: 50%;
  border: none;
  background: var(--neutral-dark-blue);
  color: var(--neutral-light-grey);
  font-size: 1.4rem;
  transition: 0.3s;
}

.rating ul li button:focus {
  background-color: var(--neutral-medium-grey);
  color: var(--neutral-white);
}

.rating ul li button:hover {
  cursor: pointer;
  background-color: var(--primary);
  color: var(--neutral-white);
}
```

```js
const getRatingNum = (e) => {
  const ratingBtn = e.target;

  // 1. Save the value of the rating buttons into a variable (ratingNum)
  const ratingNum = ratingBtn.innerHTML;

  // 2. Insert ratingNum to change the text between the span tag (id="rating")
  rating.innerHTML = ratingNum;
};
```

### Continued development

Areas to focus on:

1. Separation of Concerns --> Especially with JavaScript
2. Grouping CSS styles into classes to reduce repetition of styles
3. DOM Manipulation
4. Basic JS logic

### Useful resources

- [Youtube Solution](https://www.youtube.com/watch?v=cQnUopEeZgw) - Used at the end of the project to add styling transitions and solutions on hover and focus states.
- [PX to VW Converter](https://www.quick-tools.net/px-to-vw) - Used to convert PX from Figma design to VW units for responsiveness.

## Author

- Frontend Mentor - [@delroscol98](https://www.frontendmentor.io/profile/delroscol98)
