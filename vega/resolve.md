resolve를 찾아봤던 이유가 두개의 차트를 가로로 생성하고 마우스 무브먼트를 추가하고 싶은데,  
이 작업을 하는 과정에서 차트의 가로 크기가 변경되지 않는 것을 발견했다. 몇시간(?) 추적끝에 베가는 두개가 나란히 위치하는 concat 또는 facet 또는 repeat에서는 차트의 가로 크기 조정이 불가능하다. 
리스폰스브하게 사이즈를 바꿀려면 싱글뷰나 레이어만 가능하다. 
다음의 문서 참고
https://stackoverflow.com/questions/67498688/vega-lite-how-to-set-responsive-width-using-facet  
https://stackoverflow.com/questions/68653240/vega-lite-kibana-autosize-with-concat-not-working
https://ondata.github.io/covid19italia/terapiaintensiva/


stackoverflow 기타 정보
https://stackoverflow.com/questions/67009803/how-to-know-the-fields-of-a-loaded-data


# resolve

복합뷰(concat, facet or layer)를 사용할 때 서브 차트들 사이에서 스케일과 축을 공유하는 방식을 제어하는데 사용된다. 이말은 차트에서 가로축을 공유하고 세로축만 인터액티브하게 제어할 수 있다. 

예를들어, 'resolve'를 사용하여 가로축('x')을 서브뷰간에 공유하고 세로축을 서뷰뷰간에 독립적으로 유지하도록 설정할 수 있다. 이를 통해 각 서브뷰의 가로축이 동일하게 맞춰지면서, 세로축은 각각의 서뷰뷰에 맞게 설정된다. 
(그럼 이것은 facet나 concat처럼 한개의 데이테셋(?)을 각 한개의 차트에 보여주고 여러뷰로 보여줄 때 가로축을 지정하고 보여주는 것과 비슷한건가? )


```json
{
    // 여기보면 x축은 공유하고 y축은 개별로 설정되었다
  "resolve": {
    "scale": {"x": "shared", "y": "independent"}
  },
  // 세로로 concat, a필드를 가로로 같은 데이터를 쓰고 b와 c컬럼의 데이터를 y축으로 쓰는 두개의 차트
  "hconcat": [
    {
      "mark": "bar",
      "encoding": {
        "x": {"field": "a", "type": "ordinal"},
        "y": {"field": "b", "type": "quantitative"}
      }
    },
    {
      "mark": "line",
      "encoding": {
        "x": {"field": "a", "type": "ordinal"},
        "y": {"field": "c", "type": "quantitative"}
      }
    }
  ]
}

# Scale and Guide Resolution  
https://vega.github.io/vega-lite/docs/resolve.html  

Vega-Lite는 스케일 도메인(축)이 합칠지 여부를 결정한다(scale domain should be unioned). 축범위가 함쳐지면, 축과 범례를 통합할 수 있다. 그렇지 않으면 독립적이어야 한다.  

사용방법

```
// two options 'shared' or 'independent'
resolve: {
    "scale":{ channel ...},
    "axis":{ position channel ...}, //x & y
    "legend":{ non_position_channel ...} // legends, resolution can be defined for color, opacity, shape, and size
}
```
x축을 쉐어하고 두개의 데이터를 넣은것
https://vega.github.io/editor/#/edited


참고: 
channel in vega-lite 는 비쥬얼 인코딩 채널로, 차트에서 데이터의 특정 측면을 나타냅니다. 채널은 데이터 필드와 시각적 특성을 연결하여 데이터 속성이 차트에서 어떻게 시각적으로 표현되는지를 정의한다. 

예시: 
x channel: 데이터 포인트의 가로 위치
y channel: 데이터 포인트의 세로 위치
color channel: 데이터 포인트의 색상
size channel: 데이터 포인트의 크기
shape channel: 데이터 포인트의 모양
text channel: 데이터 포인트와 관련된 텍스트 내용
tooltop channel: 마우슬 올렸을 때 보여주는 추가 정보

각 채널은 데이터 시각화를 풍부하고 설명적으로 만들 수 있도록 데이터 속성을 시각적으로 연결하는데 사용된다. 



# domain property  
it is used to specify the range of values that scale can take. 스케일이 사용할 수 있도록 정한 범위 같은건가봄. A scale in visualizaton is responsible for mapping data values to visual properties, such as positions on the screen. The domain property defines the input values 