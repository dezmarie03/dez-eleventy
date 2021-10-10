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

<div class="masthead">

# {{ post.title }}

Published {{ post.date | readableDate }}

</div>

<div class="readable">

{{ post.body | safe }}

</div>
