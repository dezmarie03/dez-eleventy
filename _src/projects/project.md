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

<div class="masthead">

# {{ project.title }}

## {{ project.seoMeta.description }}

</div>

<div class="readable">
  <div class="project-cover">
    <picture>
      <source media="(min-width: 18em)" srcset="{{ project.coverImg.responsiveImage.srcSet }}">
      <img src="{{ project.coverImg.responsiveImage.src }} " alt="{{ project.coverImg.alt }}" style="width: auto;" lazy="true">
    </picture>
  </div>

{{ project.roleResponsibilities | safe }}

{{ project.body | safe }}

</div>
