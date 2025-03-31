---
layout: page
title: Texts
permalink: /pages/texts/
pagination:
  enabled: true
  collection: texts
  per_page: 10
---
<p class="center">An archive of posts I've made to my Akkoma account.</p>

<div class="texts-section">
  {% for text in paginator.posts %}
    <div class="texts-item akkoma-item">
      {% if text.avatar %}
        <img src="{{ text.avatar }}" alt="Avatar" class="no-center toot-avatar pack-avatar">
      {% endif %}
      {% if text.author %}
        {{ text.author }}
      {% endif %}
      <br /><br />
      <div>{{ text.content }}</div>
      <span class="date"><i>published</i> {{ text.date | date: '%B %e, %Y' }}</span>
      <div class="syndicate">
        <i class="ph ph-broadcast" title="Syndication"></i>
        {% if text.akkoma %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ text.akkoma }}" target="_blank">Akkoma</a>
          </span>
        {% endif %}
        {% if text.bluesky %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ text.bluesky }}" target="_blank">Bluesky</a>
          </span>
        {% endif %}
        {% if text.wafrn %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ text.wafrn }}" target="_blank">Wafrn</a>
          </span>
        {% endif %}
        {% if text.mastodon %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ text.mastodon }}" target="_blank">Mastodon</a>
          </span>
        {% endif %}
        {% if text.none %}
          <span style="padding:0px 5px 0px 5px;">
            {{ text.none }}
          </span>
        {% endif %}
      </div>
      {% if text.tags %}
        <div class="tags">
          {% for tag in text.tags %}
            <span>#{{ tag }}</span>
          {% endfor %}
        </div>
      {% endif %}
        <div style="text-align: right;">
        <a href="{{ text.url }}" class="small-link">view</a> |
        <a href="javascript:void(0);" class="small-link" onclick="copyToClipboard('{{ text.url }}')">share</a>
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