const data = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "vega lite",
    "description": "vega lite test",
    // data
    "data":{"url":"data/seattle-weather.csv"},
    // change the type of chart
    "mark":"line",
    // transform - 가지고 있는 컬럼을 이용해서 새로운 시리즈 데이터 생성
    "transform": [
      {"calculate": "datum.temp_max - datum.temp_min", 
        "as": "temp_range"}
    ],
    // assign x & y
    "encoding": {
        // "x": {"field": "date", "type": "temporal"},
        // "y": {"field": "precipitation", "type": "quantitative"}
        
        // bar chart, bin
        // "x": {"bin": true, "field": "precipitation"},
        // "y": {"aggregate": "count"}
        
        // line chart, 월별 mean
        // "x": {"timeUnit": "month", "field": "date"},
        // "y": {"aggregate": "mean", "field": "precipitation"}

        // line chart, 월별 max value (daily 데이터중, 각 달의 가장 높은 온도 표시)
        // 데이터의 값을 12에서 32로 변경해보니 그 달의 데이터 값 변경됨
        // "x": {"timeUnit": "yearmonth", "field": "date"},
        // "y": {"aggregate": "max", "field": "temp_max"}

        // line chart, 연간 mean
        // "x": {"timeUnit": "year", "field": "date"},
        // "y": {"aggregate": "mean", "field": "temp_max"}

        // line chart, transform data 이용
        "x": {"timeUnit": "month", "field": "date"},
        "y": {"aggregate": "mean", "field": "temp_range"}        
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