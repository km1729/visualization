var trace1 = {

    x: [0, 1, 2, 3, 4, 5, 6, 7, 8],

    y: [0, 3, 6, 4, 5, 2, 3, 5, 4],

    type: 'scatter',

    name:'Plot 1'

    };

var trace2 = {

    x: [0, 1, 2, 3, 4, 5, 6, 7, 8],

    y: [0, 4, 7, 8, 3, 6, 3, 3, 4],

    type: 'scatter',

    name:'Plot 2'

    };

var trace3 = {

    x: [0, 1, 2, 3, 4, 5, 6, 7, 8],

    y: [0, 5, 3, 10, 5.33, 2.24, 4.4, 5.1, 7.2],

    type: 'scatter',

    name:'Plot 3'

    };


var data = [trace1, trace2, trace3];

var layout = {

    showlegend: true,

    // 이부분!! 범주를 아래로 위치변경
    legend: {"orientation": "h"} 

    };



Plotly.newPlot('myDiv', data, layout);