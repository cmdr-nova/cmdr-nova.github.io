---
layout: page
title: Recent Logs
permalink: /pages/log/
---

<div class="logs-section">
  {% assign logs_array = site.logs | sort: 'date' | reverse %}
  {% assign limited_logs = logs_array | slice: 0, 10 %}
  {% for log in limited_logs %}
    <div class="logs-item item">
      {% if log.avatar %}
        <img src="{{ log.avatar }}" alt="Avatar" class="no-center toot-avatar pack-avatar">
      {% endif %}
      {% if log.author %}
        {{ log.author }}
      {% endif %}
      <br /><br />
      <div>{{ log.content }}</div>
      <span class="date"><i>published</i> {{ log.date | date: '%B %e, %Y' }}</span>
      <div class="syndicate">
        <i class="ph ph-broadcast" title="Syndication"></i>
        {% if log.akkoma %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ log.akkoma }}" target="_blank">Akkoma</a>
          </span>
        {% endif %}
        {% if log.bluesky %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ log.bluesky }}" target="_blank">Bluesky</a>
          </span>
        {% endif %}
        {% if log.wafrn %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ log.wafrn }}" target="_blank">Wafrn</a>
          </span>
        {% endif %}
        {% if log.mastodon %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ log.mastodon }}" target="_blank">Mastodon</a>
          </span>
        {% endif %}
        {% if log.none %}
          <span style="padding:0px 5px 0px 5px;">
            {{ log.none }}
          </span>
        {% endif %}
      </div>
      {% if log.tags %}
        <div class="tags">
          {% for tag in log.tags %}
            <span>#{{ tag }}</span>
          {% endfor %}
        </div>
      {% endif %}
        <div style="text-align: right;">
        <a href="{{ log.url }}" class="small-link">view</a> |
        <a href="javascript:void(0);" class="small-link" onclick="copyToClipboard('{{ log.url }}')">share</a>
        <script src="/assets/js/clipboard.js"></script>
      </div>
    </div>
  {% endfor %}
</div>