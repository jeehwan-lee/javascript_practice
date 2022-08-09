# 자바스크립트 연습용 프로젝트 - JeeHwan

---

## 목차

1. temperature_converter
2. flip_card

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
- classList

```
- classList.add("btn")
 -지정한 클래스값을 추가
  - 만약 추가하려는 클래스가 이미 존재한다면 무시
```

- perspective(css)

```
평면과 사용자 사이의 거리를 결정
- perspective:300px 처럼 값이 커질수록 3D 표현효과가 작아짐
```

- backface-visibility(css)

```
요소의 뒷면이 사용자를 향할때 보여야 하는지 지정 (주로 rotateY(180deg)와 함께 사용)
- backface-visibility : visible;
- backface-visibility : hidden;
- backface.html 참고
```
