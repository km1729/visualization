const data = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "vega lite",
    "description": "vega lite test",
    // data
    "data":{"url":"data/seattle-weather.csv"},
    // change the type of chart
    "mark":"bar",
    // transform - 가지고 있는 컬럼을 이용해서 새로운 시리즈 데이터 생성
    "transform": [
      {"calculate": "datum.temp_max - datum.temp_min", 
        "as": "temp_range"}
    ],
    // assign x & y
    "encoding": {
        
        // bar chart, weather컬럼의 카테고리별 갯수를 month로 시각화
        // 비가 많이 온 월 또는 날씨가 맑은 월을 한눈에 파악할 수 있음
        // "x": {"timeUnit": "month", "field": "date","type": "ordinal"},
        // "y": {"aggregate": "count", "field": "quantitative"},
        // "color": {"field": "weather", "type":"nominal"}

        // bar chart, 
        // 위의 데이터에 Weather 컬럼의 유니크한 값들의 컬러를 임의로 정해주어서
        // 시각화를 사용하는 사용자가 색상을 보고 날씨를 유추할 수 있게 한다
        // 맑은날 = 노란색, 비오는날 = 파란색, 안개낀날 = 회색
        "x": {"timeUnit": "month", "field": "date", 
              "type":"ordinal", "title":"Month of the Year"},
        "y": {"aggregate": "count", "field": "quantitative"},
        "color":{"field":"weather", "type":"nominal", 
                "scale":{
                  "domain":["sun", "fog", "drizzle", "rain", "snow"],
                  "range":["#e7ba52", "#c7c7c7", "#aec7e8", "#1f77b4", "#9467bd"],
                  "title": "Weather Type"
                }}
    
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