---
layout: project.njk
pagination:
  data: cms.allProjects
  size: 1
  alias: project
permalink: "projects/{{ project.slug }}/"
eleventyComputed:
  title: "{{ project.title | safe }}"
  description: "{{ project.seoMeta.description | safe }}"
---

<div class="project__masthead">

# {{ project.title }}

</div>

<div class="grid grid--aside">
<aside class="project__details">

{{ project.roleResponsibilities | safe }}

</aside>
<div class="project__body">

<picture>
<source srcset="{{ project.coverImg.responsiveImage.webpSrcSet }}" type="image/webp">
<source srcset="{{ project.coverImg.responsiveImage.srcSet }}">
<img src="{{ project.coverImg.responsiveImage.src }}" alt="{{ project.coverImg.responsiveImage.alt }}" width="{{ project.coverImg.responsiveImage.width }}" height="{{ project.coverImg.responsiveImage.height }}" loading="lazy">
</picture>
<br /><br />

{{ project.body | safe }}

</div>
</div>
