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

{{ project.body | safe }}

</div>
</div>
