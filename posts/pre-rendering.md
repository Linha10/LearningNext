---
title: 'Pre-rendering >>next.js可讓開發者自行決定在什麼頁面使用static gen或SSR
'
date: '2022/4/20'
---
next.js可讓開發者自行決定在什麼頁面使用static gen或SSR
Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.