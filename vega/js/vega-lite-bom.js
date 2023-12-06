const projectFilter = [{"filter": "datum.project == 'dp9' && datum.fs == 'gdata'"}];
const colors = ["blue", "red", "red"];

const x_axis = {"timeUnit": "yearmonthdate", "field": "datetime", "type": "temporal", "axis": {"title": "Date"}};

//usinge concat
const gdata_data = {
  //gdata disk는 x와y축을 쉐어함
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "gdata disk & inode usage",
  "description": "gdisk usage",

  // chart size
  "width": 1000,
  "height": 400, 

  // data link
  "data": {"url": "output_disk.json"},

  // filter
  "transform": projectFilter ,  // Corrected typo here

  //resolve
  "resolve":{"scale":{"x":"shared", "y":"independent"}},

  // concat 레어말고 일반
  "concat": [
    // the first chart gdata disk
    {
      "layer":[
        {// the quota column
          "mark": {"type": "line", "color": colors[1], "point": {"filled": false, "fill": colors[1]}},
          "encoding": {"x": x_axis, "y": {"field": "quota", "type": "quantitative", "title": "Quota", "format": "~s"}} },
        { //usage column
          "mark": "area",
          "encoding": {"x": x_axis, "y": {"field": "usage", "type": "quantitative", "title": "Usage", "format": "~s", "axis": {"format": "~s"}}} }
      ]
    },
    // the second chart gdata inode
    {
      "layer":[
        {// the quota column
          "mark": {"type": "line", "color": colors[1], "point": {"filled": false, "fill": colors[1]}},
          "encoding": {"x": x_axis, "y": {"field": "iquota", "type": "quantitative", "title": "inode_Quota", "format": "~s"}} },
        { //usage column
          "mark": "area",
          "encoding": {"x": x_axis, "y": {"field": "iusage", "type": "quantitative", "title": "inode_Usage", "format": "~s", "axis": {"format": "~s"}}} }
      ]
    }
  ]
};

//using repeat - not working
const gdata_data2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "gdata disk & inode usage2",
  "description": "gdisk usage",

  // chart size
  "width": 800,
  "height": 400,

  // data link
  "data": {"url": "output_disk.json"},

  // filter
  "transform": projectFilter,

  // sharing x-axis for gdata usage and quota
  "encoding": {
    "x": {"timeUnit": "yearmonthdate", "field": "datetime", "type": "temporal", "axis": {"title": "Date"}}
  },

  // show disk and inode usage using repeat
  "repeat": {"layer": ["usage_quota", "iusage_iquota"]},

  // define specifications for repeated charts
  "spec": {
    "usage_quota": {
      "layer": [
        {"mark": {"type": "line", "color": colors[1], "point": {"filled": false, "fill": colors[1]}}, "encoding": {"y": {"field": "quota", "type": "quantitative", "title": "Quota", "format": "~s"}}},
        {"mark": "area", "encoding": {"y": {"field": "usage", "type": "quantitative", "title": "Usage", "format": "~s", "axis": {"format": "~s"}}}}
      ]
    },
    "iusage_iquota": {
      "layer": [
        {"mark": {"type": "line", "color": colors[1], "point": {"filled": false, "fill": colors[1]}}, "encoding": {"y": {"field": "iquota", "type": "quantitative", "title": "iQuota", "format": "~s"}}},
        {"mark": "area", "encoding": {"y": {"field": "iusage", "type": "quantitative", "title": "iUsage", "format": "~s", "axis": {"format": "~s"}}}}
      ]
    }
  }
};

// layered single chart
const gdata_data3 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title":"gdata disk & inode usage3",
    "description": "gdisk usage",

    // chart size
    // "width": 300,
    "autosize": "fit-x",
  

    // chart interaction
    "params": [{
      "name": "grid",
      "select": "interval",
      "bind": "scales"
    }],

    // data link
    "data": {"url":"output_disk.json"},

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

};

vegaEmbed("#chart", gdata_data, { actions: { zoom: "wheel!" } });
vegaEmbed("#chart2", gdata_data2, { actions: { zoom: "wheel!" } });
vegaEmbed("#chart3", gdata_data3, { actions: { zoom: "wheel!" } });
