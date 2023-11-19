const yourSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Your Vega-Lite Chart",
    "mark": "bar",
    "encoding": {
        "x": {"field": "category", "type": "ordinal"},
        "y": {"field": "value", "type": "quantitative"}
    },
    "data": {"url": "/home/k/projects/visualization/Vega/data/line_chart.json"} // Replace with your data source
};

vegaEmbed("#vis", yourSpec);
