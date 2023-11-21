const data = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "vega lite",
    "description": "vega lite test",
    "data":{"url":"data/stocks.csv"},
    "mark":"circle",
    "encoding": {
        "x": {"field": "date", "type": "temporal"},
        "y": {"field": "price", "type": "quantitative"}
        },
    "width":800,
    "height":600,
    "selection": {
        "grid": {
          "type": "interval",
          "bind": "scales"
        }
      }
}

vegaEmbed("#vis", data)