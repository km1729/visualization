const data = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "vega lite",
    "description": "vega lite test",
    // data
    "data":{"url":"data/stocks.csv"},
    // PRICE 컬럼의 mean을 이용해서 그리기
    // change the type of chart
    "mark": {"type": "rule"},
    // assign x & y
    "encoding": {
        // line chart, transform data 이용
        "y": {"aggregate": "mean", "field": "price", "type":"quantitative"},
        // "size" :{"value":3},
        "color":{"value":"blue"},
        "strokeWidth": {"value": 5},        
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