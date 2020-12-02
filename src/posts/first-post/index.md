---
title: First post
date: 2020-5-2
excerpt: My first post
slug: first
featureImage: carbon.png
---

# h1

## h2

### h3

#### h4

##### h5

###### h6

```js
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}
const container = document.querySelector("#container")
removeAllChildNodes(container)
```

```css
a {
  display: none;
}
```