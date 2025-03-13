---
layout: page
title: Skeets
permalink: /pages/skeets/
pagination:
  enabled: true
  collection: skeets
  per_page: 10
---
<p class="center">An archive of posts I've made to my Bluesky account, archived here, and starting from March 2025.</p>

<div class="skeets-section">
  {% for skeet in paginator.posts %}
    <div class="skeets-item item">
      {% if skeet.avatar %}
        <img src="{{ skeet.avatar }}" alt="Avatar" class="no-center toot-avatar pack-avatar">
      {% endif %}
      {% if skeet.author %}
        {{ skeet.author }}
      {% endif %}
      <br /><br />
      <div>{{ skeet.content }}</div>
      <span class="date"><i>published</i> {{ skeet.date | date: '%B %e, %Y' }}</span>
      <div class="syndicate">
        <i class="ph ph-broadcast" title="Syndication"></i>
        {% if skeet.akkoma %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ skeet.akkoma }}" target="_blank">Akkoma</a>
          </span>
        {% endif %}
        {% if skeet.bluesky %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ skeet.bluesky }}" target="_blank">Bluesky</a>
          </span>
        {% endif %}
        {% if skeet.wafrn %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ skeet.wafrn }}" target="_blank">Wafrn</a>
          </span>
        {% endif %}
        {% if skeet.mastodon %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ skeet.mastodon }}" target="_blank">Mastodon</a>
          </span>
        {% endif %}
        {% if skeet.none %}
          <span style="padding:0px 5px 0px 5px;">
            {{ skeet.none }}
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
        <script src="/assets/js/clipboard.js"></script>
      </div>
    </div>
  {% endfor %}
</div>

<!-- Pagination links -->
<div class="pagination">
  <a href="{{ paginator.previous_page_path }}" class="previous {% if paginator.page == 1 %}disabled{% endif %}">
    ░ Previous
  </a>
  <span class="page_number">
    Page: {{ paginator.page }} of {{ paginator.total_pages }}
  </span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}" class="next">Next ░</a>
  {% else %}
    <span class="next">Next ░</span>
  {% endif %}
</div>