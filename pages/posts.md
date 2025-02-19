---
layout: page
title: A Compendium of My Posts
permalink: /pages/posts/
---

{% assign posts_array = site.posts | sort: 'date' | reverse %}
{% assign total_posts = posts_array | size %}
{% assign posts_per_page = 10 %}
{% assign total_pages = total_posts | divided_by: posts_per_page | ceil %}
{% assign current_page = paginator.page %}
{% assign start_index = posts_per_page | times: current_page | minus: posts_per_page %}
{% assign end_index = posts_per_page | times: current_page %}
{% assign paginated_posts = posts_array | slice: start_index, posts_per_page %}

<div class="posts-section">
  {% for post in paginated_posts %}
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
    </div>
  {% endfor %}
</div>

<!-- Pagination links -->
{% if total_pages > 1 %}
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