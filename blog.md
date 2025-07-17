---
layout: default
title: Blog
permalink: /blog/
---

<h1>Articoli</h1>
<ul>
  {% for post in site.articoli %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> — <time datetime="{{ post.date }}">{{ post.date | date: "%d/%m/%Y" }}</time>
    </li>
  {% endfor %}
</ul>
