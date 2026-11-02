---
layout: single
title: "Curriculum vitae"
description: "First-year Ph.D. student at Tsinghua University."
permalink: /cv/
redirect_from:
  - /resume
  - /resume/
  - /cv-json/
  - /resume-json
---

<div class="cv-contact"><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a><a href="https://github.com/{{ site.author.github }}">GitHub</a></div>

## Education

{% include education.html %}

## Research interests

{% for interest in site.data.profile.research %}
### {{ interest.title }}

{{ interest.description }}

{% endfor %}

{% if site.publications.size > 0 %}
## Publications

{% for post in site.publications reversed %}
{% include archive-single-cv.html %}
{% endfor %}
{% endif %}
