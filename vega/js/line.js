const yourSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Your Vega-Lite Chart",
    "mark": "line",
    "encoding": {
        "x": {"field": "category", "type": "ordinal"},
        "y": {"field": "value", "type": "quantitative"}
    },
    "data": {"url": "data/line_chart.json"}, // Corrected path to your JSON file
    "selection": {
        "grid": {
          "type": "interval",
          "bind": "scales"
        }
      }
};

vegaEmbed("#vis", yourSpec);
