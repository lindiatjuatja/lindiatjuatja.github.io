---
layout: page
permalink: /publications/
title: publications
description: plural in progress. for a full list of publications, see my Google Scholar.
order: 1
years: [2025, 2024, 2023, 2021]
nav: true
---

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
