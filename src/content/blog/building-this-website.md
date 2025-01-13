---
title: "Building a Terminal-Themed Portfolio with Astro and Tailwind"
date: "2024-03-20"
author: "Jord"
category: "Web Development"
tags: ["astro", "tailwind", "javascript", "tutorial"]
description: "A detailed guide on how I built this website using Astro and Tailwind CSS, featuring a retro terminal theme and modern functionality."
---

# Building a Terminal-Themed Portfolio with Astro and Tailwind

As a developer who appreciates both retro aesthetics and modern web technologies, I decided to build my portfolio website combining the classic terminal look with contemporary web development tools. In this post, I'll walk you through how I built this website using Astro and Tailwind CSS.

## Tech Stack

- **Astro**: For static site generation and optimal performance
- **Tailwind CSS**: For styling and responsive design
- **JavaScript**: For interactive terminal effects
- **Kode Mono Font**: For that authentic terminal feel

## Getting Started

First, let's create a new Astro project with Tailwind CSS:

```bash
# Create new Astro project
npm create astro@latest

# Add Tailwind CSS integration
npm install -D tailwindcss @astrojs/tailwind

# Install typography plugin for blog posts
npm install -D @tailwindcss/typography
```

## Setting Up the Terminal Theme

The key to achieving the terminal look is using the right colors and animations. Here's how I implemented the terminal theme:

```css
:root {
  --terminal-green: #00ff00;
  --terminal-green-dim: rgba(0, 255, 0, 0.7);
  --terminal-background: #000000;
}

body {
  background-color: var(--terminal-background);
  color: var(--terminal-green);
  font-family: 'Kode Mono', monospace;
}
```

## Creating Terminal-Style Components

### The Header Component

The header features a terminal-style navigation bar:

```astro
<header class="terminal-header">
  <nav>
    <a href="/" class="site-title">jordisbored.xyz</a>
    <div class="nav-links">
      <a href="/blog">blog</a>
      <a href="/projects">projects</a>
      <a href="/about">about</a>
    </div>
  </nav>
</header>
```

### Project Cards

Each project is displayed as a terminal window:

```astro
<article class="project-card">
  <div class="terminal-bar">
    <div class="terminal-buttons">
      <span class="terminal-button close"></span>
      <span class="terminal-button minimize"></span>
      <span class="terminal-button maximize"></span>
    </div>
    <div class="terminal-title">project.sh</div>
  </div>
  <!-- Project content -->
</article>
```

## Adding Terminal Animations

The typing effect is achieved using JavaScript:

```javascript
function typeText(element, text, index) {
  if (index < text.length) {
    element.textContent = text.substring(0, index + 1);
    setTimeout(() => typeText(element, text, index + 1), 50);
  }
}
```

## Interactive Elements

To make the site feel more dynamic, I added various hover effects:

```css
.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%,
    var(--terminal-green) 50%,
    transparent 100%
  );
  transform: translateX(-100%);
  opacity: 0;
  transition: all 0.5s ease;
}

.project-card:hover::before {
  transform: translateX(100%);
  opacity: 1;
}
```

## Blog Implementation

For the blog, I used Astro's content collections and the Tailwind Typography plugin:

```javascript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      date: z.string(),
      author: z.string(),
      category: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
    }),
  }),
};
```

## Performance Optimizations

To ensure fast loading times, I:
1. Used Astro's static site generation
2. Optimized images with `astro:assets`
3. Minimized JavaScript usage
4. Implemented lazy loading for blog posts

## Responsive Design

The site is fully responsive thanks to Tailwind's utility classes:

```astro
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Content -->
</div>
```

## Challenges and Solutions

### Challenge 1: Terminal Authenticity
To make the terminal theme feel authentic, I needed to balance between a realistic terminal look and modern web usability. The solution was to use subtle animations and familiar terminal commands while maintaining clear navigation.

### Challenge 2: Typography
Finding the right font that worked both for terminal-style elements and readable blog posts was crucial. The Kode Mono font provided the perfect balance.

## Future Improvements

Some features I'm planning to add:
- Interactive terminal commands
- More terminal-style animations
- Dark/light theme toggle (matrix green/amber)
- Command history navigation

## Conclusion

Building this website was a fun exercise in combining retro aesthetics with modern web development practices. The key was finding the right balance between the terminal theme and user experience.

Feel free to check out the [source code](https://github.com/lordbord/jordisbored.xyz) and use it as inspiration for your own projects!

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Kode Mono Font](https://fonts.google.com/specimen/Kode+Mono)
- [Terminal CSS Examples](https://terminalcss.xyz/) 