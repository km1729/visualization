Vega-Lite document https://vega.github.io/vega-lite/docs/spec.html  
가장 간단한 간단한 방법은 Single view specification 으로 싱글 마크탑이다. 
multiple view specfication 여러개의 플랏을 레이어 안으로 넣어서 볼수있다?

1. Single Specification
support data transformation such as "aggregation", "binning", "time unit conversion", "filtering", and "sorting"  


```JSON
// common property + 
// mark
// encoding
// width
// height
// view
// projection

{
  // Properties for top-level specification 
  // (e.g., standalone single view specifications)
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "background": ..., //backgound of the entire view default "white"
  "padding": ..., // padding in pixels
  "autosize": ..., // "pad", "fit" or "none"
  "config": ..., // this only can be defined at the top-level
  "usermeta": ...,

  // Properties for any specifications (common properties)
  "name": ...,
  "description": ...,
  "title": ...,
  "data": ...,
  "transform": ...,
  "paramas": ...,

  // Properties for any single view specifications
  "width": ...,
  "height": ...,
  "mark": ..., //"point", "bar", "circle", "square", "tick", "line", "rule", "geoshape", "text"
  "encoding": { //mapping between data values and properties of the mark axes, legends, scales
    "x": {
      "field": ...,
      "type": ..., //"quantitative", "temporal", "ordinal", "nominal", and "geojson".
      ...
         },
    "y": ...,
    "color": ...,
    ...
  }
}

```

2. Multi-view Specificatiions
`layer`, `facet`, `concat`, `repeat`  
```JSON
// Top-level view specication
{
    ...,
    "config" : {
        "view" : {
            //view size
            "continuousWidth": , //default 200
            "continuousHeight": , //default 200
            "discreteWidth": ,
            "discreteHeight":,
            // View background properties
            "fill": ,
            "stoke": ,
        }
    }
}
```