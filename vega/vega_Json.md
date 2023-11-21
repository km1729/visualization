Vega Documentation https://vega.github.io/vega/docs/  

다음은 베가 데이테셋의 샘플이다.   
데이터셋은 다음의 키를 가지고 있다.  
width, height, padding, data, scales, axes, marks  
- data는 plot의 데이터를 나타내다. values 키를 통해서 데이터를 입력하거나 url을 이용해서 external data(json, csv, tsv...) 를 불러 올 수 있다. data의 name의 다른 프로퍼티에서 데이터를 활용할 때 이용되므로 굉장히 중요하다
- scales: Vega's scales technology is based on the d3 scales, mapping input data to pixel output(range). 예를들면 데이터의 input이 0 ~ 5000의 다양한 값이 있고 이것을 픽셀사이즈 500*300의 높이안에 보여줘야 한다면 input을 픽셀 크기에 맞춰 비율을 조정하여 데이터를 표시한다.
- axes: 정의한 스케일을 표의 어떤 방향으로 표시할 것인지 정의하여 시각화하는데 이용된다.  
- marks: 데이터를 시각적으로 표현(인코딩)합니다. 예를 들어, a, b, c 데이터의 값이 각각 4, 5, 6이라면, 이 결과를 원형으로 점을 찍거나 X표로 표시하거나 선으로 그리는 등 데이터의 시각적인 형태를 정의합니다."  

```JSON
{
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "width": 400,
  "height": 200,
  "padding": 5,
  "data": [ 
    {"name": "table", "values": [12, 23, 47, 6, 52, 19]}, 
    {"name": "points", "url": "data/points.json"}
  ],
  "scales": [
    {
      "name": "xscale",
      "type": "band",
      "domain": {
        "data": "our_data",
        "field": "category"
      },
      "range": "width",
      "padding": 0.05
    },
    {
      "name": "yscale",
      "domain": {
        "data": "our_data",
        "field": "amount"
      },
      "range": "height"
    }
  ],
  "axes": [
    {
      "orient": "bottom",
      "scale": "xscale"
    },
    {
      "orient": "left",
      "scale": "yscale"
    }
  ],
  "marks": [
    {
      "type": "rect",
      "from": {
        "data": "our_data"
      },
      "encode": {
        "enter": {
          "x": {
            "scale": "xscale",
            "field": "category"
          },
          "width": {
            "scale": "xscale",
            "band": 1
          },
          "y": {
            "scale": "yscale",
            "field": "amount"
          },
          "y2": {
            "scale": "yscale",
            "value": 0
          },
          "fill": {
            "value": "steelblue"
          }
        }
      }
    }
  ]
}

```