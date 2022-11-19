# 🎁 소₩을 말(만)해봐

## 🎅🏻 서비스 소개
### 🔔 서비스명 : 소원을 말(만)해봐

🔔 서비스 한줄소개 : 물가 상승에도 위시리스트 포기 못하는 당신을 위한 환율 계산기

🔔 서비스 가치제안 : 내가 가장 좋아하는 음식에 대입하여, 내가 희망하는 물건의 가치를 계산하여 절약을 유도함

🔔 서비스 문제정의 : 사고 싶은 물건의 가격이 체감되지 않음

🔔 서비스 타겟정의 : 위시리스트를 위해 무엇을 어떻게 절약할지 고민하는 사람

<br/>

## 🦌 역할 분담

<br/>
<center>

|                    최유진                     |                     김현수                      |                   박현지                    |                   나림                    |
| :-------------------------------------------: | :---------------------------------------------: | :-----------------------------------------: | :-----------------------------------------: |
| [@Yujin Choi](https://github.com/choichoijin) | [@Hyeonsu Kim](https://github.com/borimong) | [@HyeonJi Park](https://github.com/iamphj3) | [@Rim Na](https://github.com/R1mmm) |
|      애정하는 음식 선택 뷰(+api 통신)       |          결과 페이지(+api 통신)          |    스플래시<br/>결정했어 버튼(+api 통신)<br/>엔딩 페이지    |    테스트 뷰(위시 상품 , 가격, 희망 날짜 입력)    |

</center>

<br/>

## 🐻 기술 스택/라이브러리
### 기술 스택
- Javascript
- Styled-components
- React
- Recoil
- Axios
### js 라이브러리
- Dayjs
- Copy-to-clipboard

<br/>

## 🎄 코드 컨벤션

<details> 
<summary> 1️⃣ 폴더구조 </summary>

- **📚 components 구성 방식**
    
    **src > assets** 
    
    필요한 아이콘 파일은 Figma 에서 **svg로 export** 한 후 `assets/icon` 
    
    필요한 아이콘 파일은 Figma 에서 **png로 export** 한 후 `assets/image`폴더에 넣기
    
    **src > components**
    
    **common 폴더**
    
    ⇒ 두 개의 페이지에서 사용할 공통 컴포넌트
    
    **각자 담당 영역 폴더**
    
    ⇒ 자유롭게 파일 및 컴포넌트 생성 후 최상위 컴포넌트(해당 폴더 안에서 Header.js or Footer.js)에서 호출하기
    
    **src > pages**
    
    각 컴포넌트를 하나의 페이지에서 호출하는 곳
    
    `cores/router.jsx` 라우팅에 사용
    
    **src > lib**
    
    서버 합동 세미나에서 사용
    
    api 함수 모아놓는곳
    

.keep
</details> 


<details> 
<summary> 2️⃣ 컨벤션 설정 </summary>

- **⚙ eslint & prettier 사용하기 위한 설정**
    1. **vscode extension에서 eslint + prettier 설치**
        
    2. setting.json (`command + ,` or `ctrl + ,`) 수정하기
        
        ```json
        "editor.formatOnSave": true,
        ```
        
    
- **💯 eslint 설정**
    
    ```json
    {
      "extends": ["react-app", "plugin:prettier/recommended"],
      "plugins": ["prettier"],
      "rules": {
        "prettier/prettier": [
          "error",
          {
            "endOfLine": "auto"
          }
        ]
      }
    }
    ```
    
- **🌸 prettier 설정**
    
    ```jsx
    {
      "semi": true,
      "tabWidth": 2,
      "printWidth": 100,
      "singleQuote": true,
      "trailingComma": "all",
      "jsxSingleQuote": true,
      "bracketSpacing": true,
      "useTabs": false
    }

    ```
    
- **👻 패키지 매니저 설정**
    1. **yarn** 사용하기
        
        [YARN에 대한 사용법 및 설치](https://velog.io/@ddusi/Linux-4)
        
    2. **패키지 다운로드 받을 때 —save 꼭 작성하기**
        
        **Ex) yarn add react-router-dom —save**
        
    
- **🍞 컴포넌트 및 함수 이름 컨벤션**
    
    <aside>
    🐥 **컴포넌트 생성 방식**
    
    - 컴포넌트 생성 시에만 function 키워드 사용 `function Main (){}` ~~const Main = () ⇒ {}~~
    - 그 외 함수 생성 시에는 화살표 함수 사용
    </aside>
    
    <aside>
    🐳  **함수 이름 컨벤션**
    
    - const handle이벤트명 = () ⇒ {}
    - handleClick, handleSubmit, ...
    </aside>

</details> 

<br/>

## 🌟 브랜치 전략

    develop > 각자의 브랜치
    ex ) develop ← feature/Park, feature/Choi, feature/Na, feature/Kim
    각자의 브랜치에서 pull request 하고 코드 리뷰 후 develop에 merge
    main에 merge 후 배포

## 에러 해결 과정 
### 최유진
- 자바스크립트를 사용 언어로 지정했음에도 타입스크립트 파일을 생성하고 타입 지정을 안해주어서 에러가 났다. 
- 개발자 도구를 살펴보면서 어느 곳에서 에러가 난지 파악해서 파일 형식이 잘못됐음을 알아냈다. 
- router.push 방식과 navigate방식을 헷갈려서 에러가 났고, 구글링과 팀원들에게 질문을 통해 해결했다. 
- 급하게 브랜치를 왔다갔다 하다보니 팀원들간의 깃 플로우가 추적에 어려움이 있었다.
### 김현수 
- Recoil 을 처음 써보아서 예상치 못한 에러가 발생했습니다. 
- src/atoms/atom.js 파일에서 객체를 import 해 올 때, _wishDate 의 경우 year, month, date 가 동시에 저장되는데, 제가 필요한 데이터는 년/월/일 각각의 데이터였습니다. 
- 따라서 dayjs  라이브러리를 사용하여 .year month .date 메서드를 통해 각각의 데이터를 분리하여 출력할 수 있었습니다. 아울러, navigate 를 통해 페이지가 전환되면서 저장된 데이터를 recoil 에 저장할 때는, 해당 navigate 를 발생시키는 경로를 통해서만 접근해야 하고, 직접적으로 url 을 변경할 경우, recoil 값이 renew 되어 원하는 결과를 확인할 수 없다는 것을 새롭게 알게 되었습니다.
### 나림
- recoil을 사용할 시, 최상단에 <RecoilRoot>를 넣고 사용해줘야하는데, 이를 넣지 않고 recoil을 사용하여 화면이 모두 하얀색이 되는 에러가 발생했습니다. 바로 유진언니한테 왜이러냐고 물어보니 개발자도구를 켜보라고해서 켰습니다,,,
- 콘솔에서 친절히 RecoilRoot를 쓰라고 경고를 줬더라구요 ㅎ… RecoilRoot 넣자마자 해결됐네요..! 하하!
- `/step4` 에서 선택된 음식의 백그라운드 이미지를 변경해야했는데, 해당 부분을 구현하는데 꽤나 오랜 시간이 걸렸습니다. 처음에는 어차피 key 값에 index를 넣어줬기에, styled components에서 key값(해당 음식의 index)을 가져와 selected(선택된 배열 인덱스값) 와 바로 비교하려고 했는데 원하는대로 동작이 되지 않아서… key 값이 아니라 따로 idx에 index를 담아와서 비교했더니 의도한대로 구현이 되었습니다! key값이 정확히 어떻게 동작하고, 어떤 의미를 가지고 있는건지 더 자세히 알아봐야할 것 같아요
### 박현지
- 로딩중 화면
    - 문제 : 0.3초마다 각 글자가 나타나야 하는데 완성할 텍스트 길이를 초과할 경우 undefined가 계속 출력됨
    - 해결 : 글자 수를 세는 count state 변수를 만들어 관리 (count 값이 완성할 글자의 길이와 같거나 크면 count 변수를 0으로 만들고 message를 공백으로 변경)
- 공유하기 버튼
    - 문제 : 엔딩페이지에서 react-copy-to-clipboard 라이브러리를 사용하였는데, window.location.href 링크를 사용하였기 때문에 현재 페이지(엔딩페이지) 링크가 복사됨
    - 해결 : 링크를 window.location.host로 변경하여, 첫 화면(랜딩페이지) 링크가 복사되게 변경
