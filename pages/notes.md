---
layout: page
title: Recent Notes
permalink: /pages/notes/
pagination:
  enabled: true
  collection: notes
  per_page: 10
---

<div class="notes-section">
  {% for note in paginator.posts %}
    <div class="notes-item item">
      {% if note.avatar %}
        <img src="{{ note.avatar }}" alt="Avatar" class="no-center toot-avatar pack-avatar">
      {% endif %}
      {% if note.author %}
        {{ note.author }}
      {% endif %}
      <br /><br />
      <div>{{ note.content }}</div>
      <span class="date"><i>published</i> {{ note.date | date: '%B %e, %Y' }}</span>
      <div class="syndicate">
        <i class="ph ph-broadcast" title="Syndication"></i>
        {% if note.akkoma %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ note.akkoma }}" target="_blank">Akkoma</a>
          </span>
        {% endif %}
        {% if note.bluesky %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ note.bluesky }}" target="_blank">Bluesky</a>
          </span>
        {% endif %}
        {% if note.wafrn %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ note.wafrn }}" target="_blank">Wafrn</a>
          </span>
        {% endif %}
        {% if note.mastodon %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ note.mastodon }}" target="_blank">Mastodon</a>
          </span>
        {% endif %}
        {% if note.none %}
          <span style="padding:0px 5px 0px 5px;">
            {{ note.none }}
          </span>
        {% endif %}
      </div>
      {% if note.tags %}
        <div class="tags">
          {% for tag in note.tags %}
            <span>#{{ tag }}</span>
          {% endfor %}
        </div>
      {% endif %}
        <div style="text-align: right;">
        <a href="{{ note.url }}" class="small-link">view</a> |
        <a href="javascript:void(0);" class="small-link" onclick="copyToClipboard('{{ note.url }}')">share</a>
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