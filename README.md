# Scroll Parallax Text

---

### 1. 만들게 된 계기

평소 포트폴리오 사이트를 만들려고 할 때 [iuri.is](https://iuri.is)와 같은 스크롤 이벤트를 활용해서 만드는 사이트를 만들고 싶었다. 항상 생각만 하고 있었는데 어느 정도 자바스크립트도 학습이 된 것 같고, 스크롤 이벤트에 대한 정보가 너무 부족하다고 판단해서 스크롤 관련 간단한 작품을 만들고자 해서 이 작품을 만들게 됐다.
<br/>

### 2. 새로 알게 된 지식

1.  CSS
    CSS에서는 **clip-path**에 대해 알게 되었다. **clip-path**는 clip한 범위 안의 부분은 보여지고, 바깥은 숨겨지는 속성이다.

    ###### 예시

    |             |                                                           Circle                                                           |                                                           Triangle                                                           |                                                           Rhombus                                                           |                                                           Star                                                           |
    | :---------: | :------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: |
    | 결과 이미지 | ![clip-path-circle](https://user-images.githubusercontent.com/84027644/141112952-7059fd34-6163-4087-b678-54bffdb653a1.png) | ![clip-path-triangle](https://user-images.githubusercontent.com/84027644/141112960-eb8833ba-9b64-47e7-b61c-ea280b48b97e.png) | ![clip-path-rhombus](https://user-images.githubusercontent.com/84027644/141112964-d1e8f469-66d5-4152-8227-d94da53a77b8.png) | ![clip-path-star](https://user-images.githubusercontent.com/84027644/141112969-6c74df4d-e076-4c57-b1ae-a06e2c07fb9b.png) |
    |    코드     |                                            `clip-path: circle(50% at 50% 50%);`                                            |                                      `clip-path: polygon(50% 0%, 0% 100%, 100% 100%);`                                       |                                  `clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);`                                  |      `clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);`       |

    주로 [Cilppy](https://bennettfeely.com/clippy/) 사이트에서 clip-path를 만들어서 사용한다.
    <br/> 이 작품에서는

    ```css
    clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);
    ```

    의 코드를 사용하여 왼쪽 벽을 표현했다.
    <br/>

2.  JavaScript
    자바스크립트에서는 `Element.scrollTop`에 대해 알게 되었다. **scrollTop**은 선택한 요소의 스크롤바 수직 위치를 반환해 준다.
    이 작품에서는

    ```javascript
    const wallText = document.querySelectorAll(".wall_text");

    window.addEventListener("scroll", parallaxText);

    function parallaxText(e) {
      wallText.forEach((text) => {
        let x =
          (window.innerHeight - document.documentElement.scrollTop * 6) / 2;
        text.style.transform = `translateX(${x}px)`;
      });
    }
    ```

    위의 코드와 같이 window의 innerHeight와 document의 수직위치의 차이를 x값으로 하여 text가 스크롤할 때 마다 x값 만큼 tanslateX 하게 하였습니다.

<br/>

### 3. 고민했던 부분

1. x값을 어떻게 설정해야할지 고민이 많았습니다.
   다른 예제들을 찾아봐도 `mousemove` 이벤트와 관련된 것이 대부분 이었고 parallax에 관해 찾아봐도 잘 이해가 가지 않는 부분이 다수여서 `mousemove` 이벤트와 관련된 영상에 `window.innerWidth`와 `e.pageX`의 차이값으로 구현한 자바스크립트 코드를 보고 scrollTop과 연관지어 해결해보았습니다.
   <br/>
2. 어떻게 간단하게 벽처럼 보이게 하는 방법이 있을까? 라는 고민이 있었습니다.
   처음에는 `perspective` 속성을 통해 `rotate`를 해봤는데 마음처럼 잘 되지 않았던 것 같습니다. 이후 `skew`를 통해 해결해보려고 노력했고 검색을 통해 `clip-path`도 알게 되었습니다. 이후 `clip-path` 와 `skewY`를 활용 해서 벽을 표현해 보았습니다.
   <br/>

### 4. 미리보기

![readme(parallax)](https://user-images.githubusercontent.com/84027644/141111081-ce5db24c-05a7-4490-8285-2e8f9d2d6052.gif)

###### 참고 : [MDN](https://developer.mozilla.org), 이미지([Unsplash](https://unsplash.com/))
