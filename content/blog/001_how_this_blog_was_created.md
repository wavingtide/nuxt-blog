---
title: "How this blog was created"
description: Technical details of how this blog was created
date: 2025-06-06
tags: ["frontend", "nuxt", "nuxt-ui", "tailwindcss"]
draft: false
---

Personal blog is a great beginner project to learn frontend frameworks. This blog is built with [Nuxt](https://nuxt.com) and [Nuxt UI](https://ui.nuxt.com), using [Tailwind CSS](https://tailwindcss.com/) for styling.

## Styling
The blog uses Tailwind CSS for styling, which allows for rapid development of responsive and modern designs. The `prose` class from Tailwind Typography is used to style the blog posts, ensuring they are readable and visually appealing.

## Features
### Overall Features
- **Dark Mode**: The blog supports dark mode, which can be toggled by the user. This is achieved using the `dark` class in Tailwind CSS.
- **Responsive Design**: The blog is fully responsive, ensuring a good user experience on both desktop and mobile devices.
- **SEO Friendly**: The blog is structured to be SEO friendly, with proper use of headings, metadata, and semantic HTML.

### Blog Post Features
- **Date and Author Information**: Each blog post displays the date it was published and the author's name.
- **Tags**: Blog posts can be tagged with relevant keywords, making it easier for users to find related content.
- **Previous and Next Post Navigation**: Users can easily navigate between blog posts using previous and next links.
- **Content Management**: The blog posts are managed using Nuxt Content, allowing for easy creation and editing of posts.
- **Pagination**: The blog supports pagination, allowing users to navigate through multiple pages of posts.

## Libraries and Tools
- [Nuxt](https://nuxt.com): A powerful framework for building Vue.js applications.
- [Nuxt UI](https://ui.nuxt.com): A collection of UI components for Nuxt applications.
- [Nuxt Content](https://content.nuxt.com): A content management system for Nuxt applications, allowing for easy creation and management of blog posts.
- [Nuxt Color Mode](https://color-mode.nuxt.com): A module for managing color modes (light/dark) in Nuxt applications.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
- [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography): A plugin for Tailwind CSS that provides a set of prose classes for styling text content.
- [Inkscape](https://inkscape.org/): A vector graphics editor used to create the blog's logo and other graphics.
