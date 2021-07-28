# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![Desktop view]("./screenshots/Desktop.png")
![Desktop active view]("./screenshots/Desktop-active.png")
![Mobile view]("./screenshots/Mobile.png")
![Mobile active view]("./screenshots/Mobile-active.png")

### Links

- Solution URL: [Frontend Mentor solution](https://www.frontendmentor.io/solutions/simple-sass-and-javascript-BWzrg6B-X)
- Live Site URL: [Preview Site](https://dportillo23.github.io/article-preview-component-master/)

## My process

### Built with

- Semantic HTML5 markup
- Sass
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned

I wanted to make this challenge to learn and practice small, but basic concepts as z-index, make hidden divs and make them appear with JS, and manipulate shapes of divs (triangle to make the share div).

I would like to highlight small snippets of my solution

```css
.share--div {
  position: absolute;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 1em;
  left: 0;
  bottom: 0;
  background-color: $col-dark-gray;
  border-radius: 0 0 10px 10px;
  transform: scale(0);
  opacity: 0;
  transition: transform 0.2s ease-in-out, opacity 0.5s ease-in-out;
  transform-origin: right 2.5rem;

  h2 {
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: $col-gray;
  }

  &.visible {
    transform: scale(1);
    opacity: 1;
  }
}

.social--link {
  cursor: pointer;

  &:hover path {
    fill: $col-dark-blue;
  }
}
```

The JS is very simple but I love how some simple lines can make a nice animation.

```js
const shareBtn = document.getElementById("share");
const shareDiv = document.getElementById("shareDiv")

shareBtn.addEventListener("click", () => {
    shareBtn.classList.toggle("active")
    shareDiv.classList.toggle("visible")
}  
    )
```

### Continued development

I would like to keep practicing and working in the basic concepts of web development so I can continue growing and learning.

### Useful resources

- [CSS-tricks](https://css-tricks.com/snippets/css/css-triangle/) - I learned here how to make the small triangle for the div.
- [MDN Web Docs](https://developer.mozilla.org/) & [W3 Schools](https://www.w3schools.com/)- These two amazing websites always are an incredible source of knowledge. I love them and I really think they a must when you want to learn web development.

## Author

- Website - [Daniel Portillo](https://dportillo23.github.io/My-Personal-Site/)
- Frontend Mentor - [@dportillo23](https://www.frontendmentor.io/profile/dportillo23)
- GitHub- [dportillo23](https://github.com/dportillo23)

