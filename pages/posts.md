---
layout: page
title: Recent Posts
permalink: /pages/posts/
---

{% assign posts_array = site.posts | sort: 'date' | reverse %}
{% assign limited_posts = posts_array | slice: 0, 10 %}

<div class="posts-section">
  {% for post in limited_posts %}
    <div class="posts-item item">
      {% if post.avatar %}
        <img src="{{ post.avatar }}" alt="Avatar" class="no-center toot-avatar pack-avatar">
      {% endif %}
      {% if post.author %}
        {{ post.author }}
      {% endif %}
      <br /><br />
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <div>{{ post.excerpt | strip_html | truncatewords: 50 }}</div>
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