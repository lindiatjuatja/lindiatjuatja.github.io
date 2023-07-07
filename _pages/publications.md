---
layout: page
permalink: /publications/
title: publications
description: plural in progress
order: 1
years: [2021, 2023]
nav: true
---

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
