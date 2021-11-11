---
layout: project.njk
eleventyComputed:
  title: "{{ project.seoMeta.title | safe }}"
  description: "{{ project.seoMeta.description | safe }}"
---

{{ project.body | safe }}
