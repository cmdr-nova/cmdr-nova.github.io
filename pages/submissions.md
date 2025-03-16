---
layout: page
title: Reddit Submissions
permalink: /pages/submissions/
pagination:
  enabled: true
  collection: submissions
  per_page: 10
---
<p class="center">An archive of submissions I've made to my Reddit account, archived here, and starting from March 2025.</p>

<div class="submissions-section">
  {% for submission in paginator.posts %}
    <div class="submissions-item item">
      {% if submission.avatar %}
        <div class="submission-avatar">
          <img src="{{ submission.avatar }}" alt="Avatar" class="no-center toot-avatar pack-avatar">
        </div>
      {% endif %}
      <div class="submission-details">
        {% if submission.author %}
          <div class="submission-author">
            {{ submission.author }}
          </div>
        {% endif %}
        <div class="submission-content">
          {{ submission.content | truncatewords: 50 | markdownify }}
        </div>
        <span class="date"><i>published</i> {{ submission.date | date: '%B %e, %Y' }}</span>
        <div class="syndicate">
          <i class="ph ph-broadcast" title="Syndication"></i>
          {% if submission.reddit %}
            <span style="padding:0px 5px 0px 5px;">
              <a href="{{ submission.reddit }}" target="_blank">Reddit</a>
            </span>
          {% endif %}
          {% if submission.none %}
            <span style="padding:0px 5px 0px 5px;">
              {{ submission.none }}
            </span>
          {% endif %}
        </div>
        <div style="text-align: right;">
          <a href="{{ submission.url }}" class="small-link">view</a> |
          <a href="javascript:void(0);" class="small-link" onclick="copyToClipboard('{{ submission.url }}')">share</a>
          <script src="/assets/js/clipboard.js"></script>
        </div>
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