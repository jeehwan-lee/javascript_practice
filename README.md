# 자바스크립트 연습용 프로젝트 - JeeHwan

---

## 목차

1. temperature_converter
2. flip_card
3. js_page
4. page_transition_basic
5. popup_modal
6. drag_and_drop

---

## 1. temperature_converter

### 주요 기능

- addEventListener()

```
  input.addEventListener("input", function() {

  })
```

## 2. flip_card

### 주요기능

- querySelector

```
- querySelector
  : selector의 구체적인 그룹과 일치하는 document의 첫번째 엘리먼트 반환
  예시) element = document.querySelector(selectors);

  : selector() 매개변수로 []를 넣어주면 해당 노드의 속성값에 접근
  예시) document.querySelect('[data-page = 1]');

- querySelectorAll
  : querySelector와 사용방법은 비슷하며, 해당하는 요소들은 nodeList로 반환

- getElmentById
   : id를 통해 엘리먼트를 반환
   예시) element = document.getElementById(id);

```

- classList

```
- classList.add("btn")
  : 지정한 클래스값을 추가하며 만약 추가하려는 클래스가 이미 존재한다면 무시

- classList.remove("btn")
  : 지정한 클래스값을 제거

- classList.contains("btn")
  : 지정한 클래스 값이 존재하는지 확인 (true / false 값 반환)

- classList.replace("oldbtn", "newbtn")
  : oldbtn 을 newbtn 으로 대체

- classList.toggle("btn")
  : toggle은 클래스의 유무를 체크하여 없으면 add, 있으면 remove
```

- perspective(css)

```
- 평면과 사용자 사이의 거리를 결정
- perspective:300px 처럼 값이 커질수록 3D 표현효과가 작아짐
```

- backface-visibility(css)

```
- 요소의 뒷면이 사용자를 향할때 보여야 하는지 지정 (주로 rotateY(180deg)와 함께 사용)
  예시)
    backface-visibility : visible;
    backface-visibility : hidden;
  * backface.html 참고
```

## 3. js_page

### 주요기능

- dataset : 어느 엘리먼트든 data-로 시작하는 속성을 가져올 수 있음.

```
<article
  id="art"
  data-columns="3">
</article>
```

위의 HTML 코드에서 columns 값을 Javascript를 통해 접근할 수 있음

```
var article = document.getElementById("art");

article.dataset.columns // "3"
article.getAttribute('data-columns') // "3" 이렇게도 가져올 수 있음
```

## 4. page_transition_basic

### 구현 아이디어

```
1. <body> 안에 <div>를 하나 만들어두고 classList을 통해 is-active 를 add / remove
2. is-active 상태의 css 속성중 opacity 값을 1로 둠
3. <Nav>의 각 항목을 선택하면 <div> 가 등장하면서 setTimeout을 통해 0.5s 뒤 사라짐
```

### 주요기능

- e.preventDefault();

```
- 사용하는 경우
  1. a 태그를 눌렀을때 href 링크로 이동하지 않게 할 경우
  2. form 안에 submit 버튼을 눌렀을때 페이지가 새로고침 되지 않도록 할 경우
```

- setTimeout()과 setInterval()

```
- setTimeout() : 일정 시간이 지난 후에 함수를 실행
  예시)
    function sayHi() {
      alert("hello");
    }
    setTimeout(sayHi, 1000);
    setTimeout(()=>alert("hi"), 1000); // 익명 화살표 함수 사용
    // setTimeout(sayHi(), 1000);
    // 잘못된 방법, 함수의 참조값을 넘겨야하는데 위는 함수 실행 결과가 전달됨
- setInterval() : 일정 시간 간격을 두고 함수를 실행
```

- window.location.href

```
- 특정 URL로 이동시키는것
  예시) window.location.href = "http://www.naver.com";
```

## 5. popup_modal

### 구현 아이디어

```
1. popup-overlay 클래스를 갖는 <div> 를 만든다.
1-1. overlay는 modal의 배경(회색)을 보여주는 역할
2. popup-inner 클래스를 갖는 <div>도 만든다.
2. inner 는 modal의 내용이 들어가있음
3. 버튼을 누를때 overlay와 inner 가 보였다가 사라졌다가를 통해 Modal 구현
4. Click 되는 버튼의 data-target 을 두고 해당 target의 id를 갖는 <div class="pop">
   모달을 active
4-1. 버튼뿐만 아니라 overlay를 클릭했을때도 modal이 사라져야하므로 동일하게 data-target 설정
```

## 6. drag_and_drop

### 구현 아이디어

```
1. addEventListenr 에서 통해 현재 선택된 draggedItem을 가져옴
   1-1. dragstart 때 현재 선택한 draggedItem display를 none 으로 해서 없앰
2. 각 list 박스로 draggedItem 이 Drop 될때 해당 list에 append를 통해 draggedItem 을 줌
```

### 주요기능

- flex(css)

```
- https://studiomeal.com/archives/197 참고
```

- addEventListener('dragstart', function());

```
- dragstart : 선택한 요소를 드래그하기 시작할때 발생
- dragend : 드래그가 끝날때 발생
- dragenter : 드래그한 요소가 해당 대상 위에 올라갔을때 발생
- drangover : 드래그한 요소가 대상 위로 지나갈때(매 수백 밀리초마다 발생)
- drop : 드래그한 요소가 해당 대상 위에 드롭했을때 발생
```

## 7. music_app

### 구현 아이디어

- CSS

```
1. @media를 통해 화면이 player <div>의 width 414px 미만으로 작아지면
   min-height 를 100vh로 만들어 화면이 꽉 차게 만듬
```

- Javascript

```
1. play 버튼을 누르면 <i>의 클래스가 바뀜 fa-play에서 fa-pause
1-1. 또한 현재 currnent_song_index 값이 증가하거나 감소
2. current_song_index를 통해 songs 데이터에서 song 데이터를 가져와서 화면에 랜더링 및 재생
```

### 주요기능

- :before / :after (가상요소)

```
- 해당 엘리먼트의 앞 또는 뒤에 content가 배치됨
- content는 복사가 불가능함.
```

- audio 태그

```
1. HTML에서 audio 태그를 사용하는 방법
  예시) <audio src="sound.mp3" autoplay loop >오디오 지원되지 않는 브라우저</audio>
      // audio태그를 지원하지 않는 브라우저는 태그 안의 텍스트가 노출된다.
  - audio 태그의 속성 : src, autoplay, loop, controls, muted
```

```
2. Javascript에서 audio 태그를 사용하는 방법
   예시)
      const myAudio = document.getElementById("myAudio");

      myAudio.play();
      myAudio.pause();
  - 매서드 : play(), pause(), load()
```

## 8. scroll_progress_bar

### 구현 아이디어

- Javascript

```
- 글의 전체 높이에서 스크롤되어 내려간만큼의 높이를 비율로 환산하여,
  header에 표시
```

### 주요기능

- scroll 관련 기능

```
1. scrollHeight : 스크롤하지 않았을때 전체 높이를 가져옴
   (화면 밖으로 빠져나간 부분까지 포함한 전체 글의 길이/높이)
2. clientheight : 눈에 보이는 만큼의 높이를 가져옴
   (현재 화면에서 보이는 height)
3. scrollTop : 스크롤되어 올라간 만큼의 높이를 가져옴
   (글의 맨 처음부터 현재 화면에 보이는 부분까지의 길이)

* 참고 : https://devbirdfeet.tistory.com/228
```

## 9. Tic_Tac_toe

### 구현 아이디어

- CSS

```
- 스크롤을 할때마다 현재
1. X 표시의 경우 셀 하나에 before과 after를 통해 대각선을 각각 그려서 X를 만듬
2. O 표시의 경우 셀 하나에 before를 통해 사각형을 만든 후 border-radius:50% 로 O 만듬
3. section에 board turn-o 클래스를 부여해서 각 턴별로 O또는 X가 그려지도록 CSS 작성
```

### 주요기능

- addEventListner

```
1. addEventLister의 세번째 인자
  예시)
    element.addEventListenr('click', doSome, {
      capture:false,
      once:true,
      passive:false
    });

- capture : 이벤트 버블링이나 캡쳐링 사용 여부
- once : true로 되어있으면 이벤트 딱 한번만 발생
   -> removeEventListener()를 사용하지 않아도 됨.
- passive : 콜백함수 내부에 preventDefault()가 있더라도 실행 안됨
```

- Array.prototype.every() / some()

```
1. arr.every((item) => item.age >5)
: 모든 조건이 만족하는지 체크하며, 하나라도 false이면 false 반환

2. arr.some((item) => item.age > 5)
: 하나라도 true가 발생하면 true 반환
```

## 10. color_palette

### 구현 아이디어

- Javascript

```
- Color Class 를 만들어서 Class 안의 method를 통해 조작
- Method
  1. setHex() : hex값을 통해 background 와 input에 값 전달
  2. setLocked() : 해당 클래스가 lock 또는 open 됬을때 세팅
  3. toggleLock() : 해당 클래스를 lock or open
  4. generateHex() : hex값 랜덤 생성
  5. copyToClipboard() : 해당 hex값 복사
```

### 주요기능

- HTMLElement method

```
- HTML Element의 method 는 blur, click, focus 3가지 있음
  1. blur : 포커스된 요소를 포커스 해제
  2. click : 해당 요소로 마우스 클릭 이벤트를 전달
  3. focus : 해당 요소에 포커스 생성

```

-document.execCommand()

```
- 예시)
    bool = document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
- 참고 : https://developer.mozilla.org/ko/docs/Web/API/Document/execCommand
```
