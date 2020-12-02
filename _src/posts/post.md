---
layout: post.njk
pagination:
  data: cms.allPosts
  size: 1
  alias: post
permalink: "posts/{{ post.slug }}/"
eleventyComputed:
  title: "{{ post.title | safe }}"
  description: "{{ post.seoMeta.description | safe }}"
---

# {{ post.title }}

{% if post.description %}## {{ post.description }}{% endif %}

Published {{ post.date | readableDate }}

{{ post.body | safe }}
