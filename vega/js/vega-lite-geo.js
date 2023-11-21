const data = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "vega lite",
    "description": "vega lite test",
    "data": {
        "url": "data/us-10m.json",
        "format": {"type": "topojson", "feature": "counties"}
      },
    "mark":"geoshape",
    "encoding": {"color": {"field": "rate", "type": "quantitative"}},
    "width":800,
    "height":600,
    "projection": {"type": "albersUsa"},
    "transform": [
        {
          "lookup": "id",
          "from": {
            "data": {"url": "data/unemployment.tsv"},
            "key": "id",
            "fields": ["rate"]
          }
        }
      ]
}

vegaEmbed("#vis", data)