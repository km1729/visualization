const projectFilter = [{"filter": "datum.project == 'dp9' && datum.fs == 'gdata'"}];
const colors = ["blue", "red", "red"];

const gdata = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "gdata",
  "description": "vega lite test",
  "width":1500,



  "data": {"url": "data/disk.json"},
  // "selection": {
  //   "grid": {
  //     "type": "interval",
  //     "bind": "scales" // Correct binding for zooming
  //   }
  // },
  "concat": [
    {
      // gdata disk
      "layer": [
        {
          "mark": "area",
          "encoding": {
            "x": {"timeUnit": "yearmonthdate", "field": "datetime", "type": "temporal"},
            "y": {"field": "usage", "type": "quantitative", "title": "Usage", "format":"~s","axis":{"format":"~s"}},
            "color": {"scale": {"range": colors[0]}, "legend": {"title": "Usage"}}
          },
          "transform": projectFilter
        },
        {
          "mark": {"type": "line","color": colors[1], "point": {"filled": false, "fill": colors[1]}},
          "encoding": {
            "x": {"timeUnit": "yearmonthdate", "field": "datetime", "type": "temporal"},
            "y": {"field": "quota", "type": "quantitative", "title": "Quota", "format":"~s"},
            "legend": {"title": "Quota"}
          },
          "transform": projectFilter
        }
      ]
    },
    {
      // gdata inode
      "layer": [
        {
          "mark": "area",
          "encoding": {
            "x": {"timeUnit": "yearmonthdate", "field": "datetime", "type": "temporal"},
            "y": {"field": "iusage", "type": "quantitative","format":"~s", "axis":{"format":"~s"}},
            "color": {"scale": {"range": colors[0]}}
          },
          "transform": projectFilter
        },
        {
          "mark": {"type": "line","color": colors[1], "point": {"filled": false, "fill": colors[1]}},
          "encoding": {
            "x": {"timeUnit": "yearmonthdate", "field": "datetime", "type": "temporal"},
            "y": {"field": "iquota", "type": "quantitative","format":"~s"}
          },
          "transform": projectFilter
        }
      ]
    }
  ]
};

vegaEmbed("#vis", gdata, { actions: { zoom: true } }); // Enable zooming
