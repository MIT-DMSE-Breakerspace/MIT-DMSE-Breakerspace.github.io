---
layout: default
title: Breakerspace Sample Library
---

# Sample Library

Explore materials and prepared specimens documented by the Breakerspace. Records may include sample photographs, characterization results, preparation notes, and connections to instruments in the lab. Availability reflects the current physical collection; documentation remains accessible when a specimen has been consumed, removed, or retained only as a reference record.

{% assign samples = site.samples | sort: "title" %}

{% if samples.size > 0 %}
<div class="sample-library-controls" data-sample-library-controls>
  <div class="sample-library-search">
    <label for="sample-library-search">Search samples</label>
    <input id="sample-library-search" type="search" autocomplete="off" placeholder="Name, material, composition, or form">
  </div>
  <div class="sample-library-filter">
    <label for="sample-library-availability">Availability</label>
    <select id="sample-library-availability">
      <option value="all">All records</option>
      <option value="available">Available</option>
      <option value="limited">Limited</option>
      <option value="documentation-only">Documentation only</option>
      <option value="unavailable">Unavailable</option>
    </select>
  </div>
  <p class="sample-library-count" aria-live="polite"><span data-sample-library-count>{{ samples.size }}</span> <span data-sample-library-count-label>{% if samples.size == 1 %}sample{% else %}samples{% endif %}</span></p>
</div>

<div class="sample-library-grid" data-sample-library-grid>
{% for sample in samples %}
  {% assign image_assets = sample.assets | where: "is_image", true %}
  {% assign thumbnail = image_assets | first %}
  <article class="sample-library-card" data-sample-card data-availability="{{ sample.availability | escape }}" data-search="{{ sample.title | append: ' ' | append: sample.sample_id | append: ' ' | append: sample.material_class | append: ' ' | append: sample.composition | append: ' ' | append: sample.physical_form | downcase | escape }}">
    {% if thumbnail %}
    <a class="sample-card-image" href="{{ sample.url | relative_url }}" tabindex="-1" aria-hidden="true">
      <img src="{{ thumbnail.url | relative_url }}" alt="" width="{{ thumbnail.width }}" height="{{ thumbnail.height }}" loading="lazy">
    </a>
    {% else %}
    <div class="sample-card-placeholder" aria-hidden="true"><span>{{ sample.sample_id }}</span></div>
    {% endif %}
    <div class="sample-card-body">
      <div class="sample-card-meta">
        <span>{{ sample.sample_id }}</span>
        <span class="sample-availability sample-availability-{{ sample.availability }}">
          {% case sample.availability %}
          {% when "available" %}Available
          {% when "limited" %}Limited
          {% when "documentation-only" %}Documentation only
          {% else %}Unavailable
          {% endcase %}
        </span>
      </div>
      <h2><a href="{{ sample.url | relative_url }}">{{ sample.title }}</a></h2>
      <p>{{ sample.description | truncate: 180 }}</p>
      {% if sample.material_class or sample.physical_form %}
      <dl class="sample-card-facts">
        {% if sample.material_class %}<div><dt>Class</dt><dd>{{ sample.material_class }}</dd></div>{% endif %}
        {% if sample.physical_form %}<div><dt>Form</dt><dd>{{ sample.physical_form }}</dd></div>{% endif %}
      </dl>
      {% endif %}
    </div>
  </article>
{% endfor %}
</div>

<p class="sample-library-empty" data-sample-library-empty hidden>No samples match those filters.</p>
{% else %}
<div class="sample-library-empty-state">
  <h2>No published samples yet</h2>
  <p>Approved records will appear here after they pass publication review and are imported from the internal sample-library system.</p>
</div>
{% endif %}

<script src="{{ '/assets/js/sample-library.js' | relative_url }}" defer></script>
