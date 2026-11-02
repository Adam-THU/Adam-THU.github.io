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

## Experience

<ul class="dated-list education-list experience-list">
  {% for entry in site.data.profile.experience %}
  <li>
    <span class="education-period">{{ entry.period }}</span>
    <div>
      <h3>{{ entry.role }}, {{ entry.company }}</h3>
      <p>{{ entry.team }}</p>
      <p class="experience-location">{{ entry.location }}</p>
      <ul class="experience-highlights">
        {% for highlight in entry.highlights %}<li>{{ highlight }}</li>{% endfor %}
      </ul>
    </div>
  </li>
  {% endfor %}
</ul>

## Scholarships

<ul class="dated-list scholarship-list">
  {% for award in site.data.profile.scholarships %}
  <li>
    <time datetime="{{ award.date }}">{{ award.period }}</time>
    <div><p>{{ award.name }}</p><p class="award-original" lang="zh-Hans">{{ award.original_name }}</p></div>
  </li>
  {% endfor %}
</ul>

<p class="scholarship-thanks">I am grateful to the scholarship programs and their donors for supporting my education and research.</p>

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
