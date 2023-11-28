const data = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "facet row",
    "description": "vega lite facet test",
    "data": {"url": "data/cars.json" },
    // facet 와 spec 사용
    // orgin column 으로 세로 차트 만들기, Each chart shows the histogram for one origin (Europe, Japan, and USA).
    "facet": {"row": {"field": "Origin"}},
    "spec": {
      "mark": "bar",
      "encoding":{
        "x": {"bin": {"maxbins": 15}, "field":"Horsepower", "type":"quantitative"},
        "y": {"aggregate":"count", "type":"quantitative"}
      }
    }    
}
vegaEmbed("#vis", data)

const data2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "wrapped facet",
  "description": "vega lite facet test",
  // data
  "data": {"url": "data/barley.json" },
  // // mark 를 먼저 표시함?
  // "mark": "point",
  // "height": {"step": 12},
  // "encoding":{
  //   //facet가 여기 있음, 여기 어싸인한 부분을 기준으로 플롯작성?
  //   // site column을 이용하여 facet를 하는데, 세로 2줄 짜리 서브플롯 
  //   "facet":{"field":"site", "type":"ordinal", "columns":2, "sort":{"op":"median", "field":"yield"} },
  //   "x": {
  //     "aggregate": "median",
  //     "field": "yield",
  //     "type": "quantitative",
  //     "scale": {"zero": false}
  //   },
  //   "y": {"field": "variety", "type": "ordinal", "sort": "-x"},
  //   "color": {"field": "year", "type": "nominal"}
  // }
  "columns":2,
  "facet":{"field":"site", "type":"ordinal", "sort":{"op":"median", "field":"yield"}},
  "spec":{
    "hight": {"step":72},
    "mark":"point",
    "encoding":{
      "x":{"aggregate":"median", "field":"yield","type":"quantitative","scale":{"zero":false}},
      "y":{"field":"variety","type":"ordinal","sort":"-x"},
      "color":{"field":"year","type":"nominal"}
    }
  }

}
vegaEmbed("#Wrapped", data2)