---
layout: page
title: Recent Skeets
permalink: /pages/skeets/
---

<div class="skeets-section">
  {% assign skeets_array = site.skeets | sort: 'date' | reverse %}
  {% assign limited_skeets = skeets_array | slice: 0, 10 %}
  {% for skeet in limited_skeets %}
    <div class="skeet-item item">
      {% if skeet.avatar %}
        <img src="{{ skeet.avatar }}" alt="Avatar" class="no-center toot-avatar pack-avatar">
      {% endif %}
      {% if skeet.author %}
        {{ skeet.author }}
      {% endif %}
      <br /><br />
      <div>{{ skeet.content | markdownify }}</div>
      <span class="date"><i>published</i> {{ skeet.date | date: '%B %e, %Y' }}</span>
      <div class="syndicate">
        <i class="ph ph-broadcast" title="Syndication"></i>
        {% if skeet.bluesky %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ skeet.bluesky }}" target="_blank">Bluesky</a>
          </span>
        {% endif %}
      </div>
      {% if skeet.tags %}
        <div class="tags">
          {% for tag in skeet.tags %}
            <span>#{{ tag }}</span>
          {% endfor %}
        </div>
      {% endif %}
        <div style="text-align: right;">
        <a href="{{ skeet.url }}" class="small-link">view</a> | 
        <a href="javascript:void(0);" class="small-link" onclick="copyToClipboard('{{ skeet.url }}')">share</a>
      </div>
      <script src="/assets/js/clipboard.js"></script>
    </div>
  {% endfor %}
</div>