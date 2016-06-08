

{% if site.categories != empty %}

  <nav>
    {% for cat in site.categories %}
      <a href="#{{ cat[0] }}"> {{ cat[0] | join: "/" }} </a>
    {% endfor %}
  </nav>

  {% for cat in site.categories %}
  <ul>
    <h2 id="{{ cat[0] }}">{{ cat[0]}}</h2>
    {% for post in cat[1] %}
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
