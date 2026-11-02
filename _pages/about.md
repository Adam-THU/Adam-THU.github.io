---
layout: default
permalink: /
title: "About"
description: "Zhe Dong (董哲), first-year Ph.D. student at Tsinghua University. Research in on-device AI and SLM for agentic systems."
redirect_from:
  - /about/
  - /about.html
---

<section class="intro" aria-labelledby="intro-title">
  <div class="intro-copy">
    <h1 id="intro-title">Zhe Dong <span lang="zh-Hans">董哲</span></h1>
    <p class="intro-role">First-year Ph.D. student</p>
    <p class="intro-affiliation"><a href="https://www.thss.tsinghua.edu.cn/">School of Software</a>, <a href="https://www.tsinghua.edu.cn/">Tsinghua University</a></p>
    <div class="intro-bio">
      <p>I'm interested in making intelligent systems work on everyday devices. My research focuses on <strong>on-device AI</strong> and <strong>SLM for agentic systems</strong>.</p>
      <p>I received my B.S. dual degree in Mathematics &amp; Physics and Software Engineering from Tsinghua University in 2026.</p>
    </div>
    <div class="contact-links" aria-label="Contact and profile links">
      <a href="mailto:{{ site.author.email }}">Email</a>
      <a href="https://github.com/{{ site.author.github }}">GitHub</a>
      <a href="{{ '/cv/' | relative_url }}">Curriculum vitae</a>
    </div>
  </div>
  <img class="intro-portrait" src="{{ '/images/portrait.webp' | relative_url }}" alt="Zhe Dong in graduation attire at Tsinghua University" width="192" height="192" fetchpriority="high">
</section>

<section class="home-section research-section" aria-labelledby="research-title">
  <div class="section-heading">
    <h2 id="research-title">Research interests</h2>
    <p>Efficient intelligence, from models to systems.</p>
  </div>
  <div class="research-grid">
    {% for interest in site.data.profile.research %}
    <div class="research-area">
      <span class="research-symbol" aria-hidden="true">{% if forloop.first %}{% include research-device.svg %}{% else %}{% include research-agent.svg %}{% endif %}</span>
      <h3>{{ interest.title }}</h3>
      <p>{{ interest.description }}</p>
      <p class="research-topics">{{ interest.topics | join: ' / ' }}</p>
    </div>
    {% endfor %}
  </div>
</section>

<section class="home-section" aria-labelledby="news-title">
  <h2 id="news-title">News</h2>
  <ul class="dated-list news-list">
    <li><time datetime="2026-09">Sep 2026</time><p>Started my Ph.D. at the School of Software, Tsinghua University.</p></li>
    <li><time datetime="2026-06">Jun 2026</time><p>Graduated from Tsinghua University with a dual degree in Mathematics &amp; Physics and Software Engineering.</p></li>
  </ul>
</section>

<section class="home-section" aria-labelledby="education-title">
  <div class="section-heading"><h2 id="education-title">Education</h2><a href="{{ '/cv/' | relative_url }}">Full CV</a></div>
  {% include education.html %}
</section>

<aside class="contact-note">
  <p>I'm always happy to talk about research and new ideas.</p>
  <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>
</aside>
