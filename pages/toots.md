---
layout: page
title: Recent Toots
permalink: /pages/toots/
---
<p class="center">An archive of my toots from Mastodon</p>
<p class="center" style="font-size: .9em;">displaying the latest ten, <i>only</i></p>

<div class="notes-section">
  {% assign toots_array = site.toots | sort: 'date' | reverse %}
  {% assign limited_toots = toots_array | slice: 0, 10 %}
  {% for toot in limited_toots %}
    <div class="note-item item">
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
        <a href="javascript:void(0);" class="small-link" onclick="copyToClipboard('{{ note.url }}')">share</a>
      </div>
      <script src="/assets/js/clipboard.js"></script>
    </div>
  {% endfor %}
</div>