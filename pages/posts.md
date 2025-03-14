---
layout: page
title: Posts
permalink: /pages/posts/
pagination:
  enabled: true
  collection: posts
  per_page: 10
---
<p class="center">A listing of all long-form posts published to-date. Herein, you'll find my thoughts on concepts, ideas, politics, and more.</p>

<div class="posts-section">
  {% for post in paginator.posts %}
    <div class="posts-item item">
      {% if post.avatar %}
        <img src="{{ post.avatar }}" alt="Avatar" class="no-center toot-avatar pack-avatar">
      {% endif %}
      {% if post.author %}
        {{ post.author }}
      {% endif %}
      <br /><br />
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <div>{{ post.content | strip_newlines | truncatewords: 50 }}</div>
      <span class="date"><i>published</i> {{ post.date | date: '%B %e, %Y' }}</span>
      <div class="syndicate">
        <i class="ph ph-broadcast" title="Syndication"></i>
        {% if post.akkoma %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ post.akkoma }}" target="_blank">Akkoma</a>
          </span>
        {% endif %}
        {% if post.bluesky %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ post.bluesky }}" target="_blank">Bluesky</a>
          </span>
        {% endif %}
        {% if post.wafrn %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ post.wafrn }}" target="_blank">Wafrn</a>
          </span>
        {% endif %}
        {% if post.mastodon %}
          <span style="padding:0px 5px 0px 5px;">
            <a href="{{ post.mastodon }}" target="_blank">Mastodon</a>
          </span>
        {% endif %}
        {% if post.none %}
          <span style="padding:0px 5px 0px 5px;">
            {{ post.none }}
          </span>
        {% endif %}
      </div>
      {% if post.tags %}
        <div class="tags">
          {% for tag in post.tags %}
            <span>#{{ tag }}</span>
          {% endfor %}
        </div>
      {% endif %}
        <div style="text-align: right;">
        <a href="{{ post.url }}" class="small-link">view</a> |
        <a href="javascript:void(0);" class="small-link" onclick="copyToClipboard('{{ post.url }}')">share</a>
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