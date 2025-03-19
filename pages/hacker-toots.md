---
layout: page
title: hacker-toots
permalink: /pages/hacker-toots/
pagination:
  enabled: true
  collection: hacker-toots
  per_page: 10
---
<p class="center">An archive of my older posts from hackers.town, in their entirety, right up until I was permanently banned for firing back a few times at a troll in my mentions.</p>

<div class="hacker-toots-section">
  {% for hacker-toot in paginator.posts %}
    <div class="hacker-toots-item item">
      {% if hacker-toot.avatar %}
        <img src="{{ hacker-toot.avatar }}" alt="Avatar" class="no-center toot-avatar pack-avatar">
      {% endif %}
      {% if hacker-toot.author %}
        {{ hacker-toot.author }}
      {% endif %}
      <br /><br />
      <div>{{ hacker-toot.content }}</div>
      <span class="date"><i>published</i> {{ hacker-toot.date | date: '%B %e, %Y' }}</span>
      <div class="syndicate">
        <i class="ph ph-broadcast" title="Syndication"></i>
        {% if hacker-toot.akkoma %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ hacker-toot.akkoma }}" target="_blank">Akkoma</a>
          </span>
        {% endif %}
        {% if hacker-toot.bluesky %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ hacker-toot.bluesky }}" target="_blank">Bluesky</a>
          </span>
        {% endif %}
        {% if hacker-toot.wafrn %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ hacker-toot.wafrn }}" target="_blank">Wafrn</a>
          </span>
        {% endif %}
        {% if hacker-toot.mastodon %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ hacker-toot.mastodon }}" target="_blank">Mastodon</a>
          </span>
        {% endif %}
        {% if hacker-toot.none %}
          <span style="padding:0px 5px 0px 5px;">
            {{ hacker-toot.none }}
          </span>
        {% endif %}
      </div>
      {% if hacker-toot.tags %}
        <div class="tags">
          {% for tag in hacker-toot.tags %}
            <span>#{{ tag }}</span>
          {% endfor %}
        </div>
      {% endif %}
        <div style="hacker-toot-align: right;">
        <a href="{{ hacker-toot.url }}" class="small-link">view</a> |
        <a href="javascript:void(0);" class="small-link" onclick="copyToClipboard('{{ hacker-toot.url }}')">share</a>
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