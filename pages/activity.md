{% for collection in site.collections %}
  {% assign content_array = content_array | concat: site[collection.label] %}
{% endfor %}

{% assign content_array = content_array | sort: "date" | reverse %}

{% assign post_type = "" %}

{% for item in content_array %}
  
  {% assign post_type = item.collection %}
  {% if post_type == "notes" %}
    {% assign icon = "ph ph-note" %}
    {% assign verb = "Noted" %}
    {% assign content = item.excerpt | strip_html | strip_newlines | truncatewords: 50 %}
  {% elsif post_type == "captain_logs" %}
    {% assign icon = "ph ph-notebook" %}
    {% assign verb = "Logged" %}
    {% assign content = item.excerpt | strip_html | strip_newlines | truncatewords: 50 %}
  {% elsif post_type == "posts" %}
    {% assign icon = "fa-solid" %}
    {% assign verb = "Posted" %}
    {% assign content = item.description %}
  {% else %}
     {% assign icon = "ph ph-chat-text" %}
     {% assign verb = "Shared" %}
  {% endif %}

  <div class="item" style="border-color: var(--{{item.collection}}-color); background-color: color-mix(in srgb, var(--{{item.collection}}-color) 7%, var(--background-color));">
  <span class="verb"><i class="{{ icon }}"></i> {{ verb }}:</span>
  <h3><a href="{{ item.url }}">{{ item.title }}</a></h3>
  <div>{{ content }}</div>
  <span class="date"><i>published</i> {{ item.date | date: '%B %e, %Y' }}</span><span class="syndicate">{% if item.syndicate-to %}<i class="ph ph-broadcast" title="Syndication"></i> {% for dest in item.syndicate-to %}{% if dest.url %}<span style="padding:0px 5px 0px 5px;"><a href="{{dest.url}}">{% if dest.icon %}<i class="{{dest.icon}}" title="{{dest.name}}"></i>{% else %}<i class="ph ph-share-network" title="{{dest.name}}"></i>{% endif %}</a></span>{% endif %}{% endfor %}{% endif %}</span>
  {% if item.tags %}<div class="tags">{% for tag in item.tags %}<span>#{{tag}}</span> {% endfor %}</div>{% endif %}
  </div>
{% endfor %}

