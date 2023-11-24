const data = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "vega lite",
    "description": "vega lite test",

    
    // 시각화 하려는 데이터의 mark와 encording을 
    // 레이어(Layer) 안에 list로 넣는다 
    // stock 데이터를 이용해서 년월별 가격 라인그래프를 symbol 컬럼을 이용해서 그리고
    // 각 symbol 컬럼의 mean 값을 추가로 그린다.
    // "data": {"url": "data/stocks.csv"},
    // "layer": [
    //   {
    //     "mark": "line",
    //     "encoding": {
    //       "x": {"field": "date", "type": "temporal"},
    //       "y": {"field": "price", "type": "quantitative"},
    //       "color": {"field": "symbol", "type": "nominal"}
    //     }
    //   },
    //   {
    //     "mark": "rule",
    //     "encoding": {
    //       "y": {"field": "price", "aggregate": "mean"},
    //       "size": {"value": 2},
    //       "color": {"field": "symbol", "type": "nominal"}
    //     }
    //   }
    // ]

    // movie 데이터를 이용해서 bin 과 새로라인 그리기
    // "data":{"url":"data/movies.json"},
    // "layer":[
    //   {"mark":"bar",
    //   "encoding":{
    //     "x": {"field":"IMDB Rating", "bin":true},
    //     "y": {"aggregate":"count"}
    //   }
    //   },
    //   { "mark": "rule",
    //   "encoding": {
    //     "x":{"aggregate":"mean", "field":"IMDB Rating"},
    //     "color":{"value":"red"},
    //     "size": {"value":5}
    //   }
        
    //   }
    // ]
    // combined scales and guides
    "data": {
      "url": "data/weather.csv"
    },
    "transform": [{"filter": "datum.location == \"Seattle\""}],
    "encoding": {
      "x": {
        "timeUnit": "month",
        "field": "date",
        "axis": {"format": "%b", "title": null}
      }
    },
    "layer": [
      {
        "mark": {"opacity": 0.3, "type": "area", "color": "#85C5A6"},
        "encoding": {
          "y": {
            "aggregate": "average",
            "field": "temp_max",
            "scale": {"domain": [0, 30]},
            "title": "Avg. Temperature (°C)",
            "axis": {"titleColor": "#85C5A6"}
          },
  
          "y2": {
            "aggregate": "average",
            "field": "temp_min"
          }
        }
      },
      {
        "mark": {"stroke": "#85A9C5", "type": "line", "interpolate": "monotone"},
        "encoding": {
          "y": {
            "aggregate": "average",
            "field": "precipitation",
            "title": "Precipitation (inches)",
            "axis": {"titleColor":"#85A9C5"}
          }
        }
      }
    ],
    "resolve": {"scale": {"y": "independent"}},
    "width":600,
    "height":400,
    "selection": {
        "grid": {
          "type": "interval",
          "bind": "scales"
        }
      }
}

vegaEmbed("#vis", data)