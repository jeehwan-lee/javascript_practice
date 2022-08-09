# 자바스크립트 연습용 프로젝트 - JeeHwan

---

## 목차

1. temperature_converter
2. flip_card
3. js_page
4. page_transition_basic

---

## temperature_converter

### 주요 기능

- addEventListener()

```
  input.addEventListener("input", function() {

  })
```

## flip_card

### 주요기능

- querySelector

```
- querySelector
  : selector의 구체적인 그룹과 일치하는 document의 첫번째 엘리먼트 반환
  예시) element = document.querySelector(selectors);

  : selector() 매개변수로 []를 넣어주면 해당 노드의 속성값에 접근
  예시) document.quertSelect('[data-page = 1]');

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
평면과 사용자 사이의 거리를 결정
- perspective:300px 처럼 값이 커질수록 3D 표현효과가 작아짐
```

- backface-visibility(css)

```
요소의 뒷면이 사용자를 향할때 보여야 하는지 지정 (주로 rotateY(180deg)와 함께 사용)
예시)
  backface-visibility : visible;
  backface-visibility : hidden;
* backface.html 참고
```

## js_page

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

### page_transition_basic

### 구현 아이디어

1. <body> 안에 <div>를 하나 만들어두고 classList을 통해 is-active 를 add / remove
2. is-active 상태의 css 속성중 opacity 값을 1로 둠
3. <Nav>의 각 항목을 선택하면 <div> 가 등장하면서 setTimeout을 통해 0.5s 뒤 사라짐

### 주요기능

- e.preventDefault();

```
사용하는 경우
1. a 태그를 눌렀을때 href 링크로 이동하지 않게 할 경우
2. form 안에 submit 버튼을 눌렀을때 페이지가 새로고침 되지 않도록 할 경우
```

- setTimeout()과 setInterval()

```
setTimeout() : 일정 시간이 지난 후에 함수를 실행
예시)
  function sayHi() {
    alert("hello");
  }
  setTimeout(sayHi, 1000);
  setTimeout(()=>alert("hi"), 1000); // 익명 화살표 함수 사용
  // setTimeout(sayHi(), 1000);
  // 잘못된 방법, 함수의 참조값을 넘겨야하는데 위는 함수 실행 결과가 전달됨
setInterval() : 일정 시간 간격을 두고 함수를 실행
```

- window.location.href

```
특정 URL로 이동시키는것
예시) window.location.href = "http://www.naver.com";
```
