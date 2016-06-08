

{% if site.tags != empty %}

  <nav>
    {% for tag in site.tags %}
      <a href="#{{ tag[0] }}"> {{ tag[0] }} </a>
    {% endfor %}
  </nav>

  {% for tag in site.tags %}
  <ul>
    <h2  id="{{ tag[0] }}">{{ tag[0] }}</h2>
    {% for post in tag[1] %}
    <li>
      <a href="{{ post.url | prepend: site.baseurl }}"> {{ post.title }} </a>
      <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date_to_string }}</time>
    </li>
    {% endfor %}
  </ul>
  {% endfor %}

{% else %}
  <h2>Empty</h2>
{% endif %}
