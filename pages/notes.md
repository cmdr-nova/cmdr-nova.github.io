---
layout: page
title: Recent Notes
permalink: /pages/notes/
---

<div class="notes-section">
  {% assign notes_array = site.notes | sort: 'date' | reverse %}
  {% assign limited_notes = notes_array | slice: 0, 10 %}
  {% for note in limited_notes %}
    <div class="note-item item">
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
    </div>
  {% endfor %}
</div>