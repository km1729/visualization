const yourSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Zoom In and Out Interactive Chart Example",
    "data":{"url": "data/line_chart.json"},
    "mark": "line",
    "encoding": {
      "x": {"field": "x", "type": "quantitative"},
      "y": {"field": "y", "type": "quantitative"}
    },
    "config": {
      "view": {
        "continuousWidth": 300,
        "continuousHeight": 200
      }
    },
    "selection": {
      "grid": {
        "type": "interval",
        "bind": "scales"
      }
    }
  }
  
vegaEmbed("#vis", yourSpec);