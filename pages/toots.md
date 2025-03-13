---
layout: page
title: Toots
permalink: /pages/toots/
pagination:
  enabled: true
  collection: toots
  per_page: 10
---
<p class="center">An archived page containing Mastodon posts I've made since the start of 2024.</p>

<div class="toots-section">
  {% for toot in paginator.posts %}
    <div class="toots-item item">
      {% if toot.avatar %}
        <img src="{{ toot.avatar }}" alt="Avatar" class="no-center toot-avatar pack-avatar">
      {% endif %}
      {% if toot.author %}
        {{ toot.author }}
      {% endif %}
      <br /><br />
      <div>{{ toot.content }}</div>
      <span class="date"><i>published</i> {{ toot.date | date: '%B %e, %Y' }}</span>
      <div class="syndicate">
        <i class="ph ph-broadcast" title="Syndication"></i>
        {% if toot.akkoma %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ toot.akkoma }}" target="_blank">Akkoma</a>
          </span>
        {% endif %}
        {% if toot.bluesky %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ toot.bluesky }}" target="_blank">Bluesky</a>
          </span>
        {% endif %}
        {% if toot.wafrn %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ toot.wafrn }}" target="_blank">Wafrn</a>
          </span>
        {% endif %}
        {% if toot.mastodon %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ toot.mastodon }}" target="_blank">Mastodon</a>
          </span>
        {% endif %}
        {% if toot.none %}
          <span style="padding:0px 5px 0px 5px;">
            {{ toot.none }}
          </span>
        {% endif %}
      </div>
      {% if toot.tags %}
        <div class="tags">
          {% for tag in toot.tags %}
            <span>#{{ tag }}</span>
          {% endfor %}
        </div>
      {% endif %}
        <div style="text-align: right;">
        <a href="{{ toot.url }}" class="small-link">view</a> |
        <a href="javascript:void(0);" class="small-link" onclick="copyToClipboard('{{ toot.url }}')">share</a>
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