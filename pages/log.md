---
layout: page
title: Changes and Logs
permalink: /pages/log/
---

<div class="logs-section">
  {% assign logs_array = site.logs | sort: 'date' | reverse %}
  {% for log in logs_array %}
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
    </div>
  {% endfor %}
</div>

<!-- Pagination links -->
{% if paginator.total_pages > 1 %}
  <div class="pagination">
    {% if paginator.previous_page %}
      <a href="{{ paginator.previous_page_path }}" class="previous">
        ░ Previous
      </a>
    {% else %}
      <span class="previous" style="visibility: hidden;">░ Previous</span>
    {% endif %}
    <span class="page_number ">
      Page: {{ paginator.page }} of {{ paginator.total_pages }}
    </span>
    {% if paginator.next_page %}
      <a href="{{ paginator.next_page_path }}" class="next">Next ░</a>
    {% else %}
      <span class="next ">Next ░</span>
    {% endif %}
  </div>
{% endif %}