# 🎁 소₩을 말(만)해봐 수정~

## 🎅🏻 서비스 소개

<br/>

## 🦌 역할 분담

<br/>
<center>

|                    최유진                     |                     김현수                      |                   박현지                    |                   나림                    |
| :-------------------------------------------: | :---------------------------------------------: | :-----------------------------------------: | :-----------------------------------------: |
| [@Yujin Choi](https://github.com/choichoijin) | [@Hyeonsu Kim](https://github.com/borimong) | [@HyeonJi Park](https://github.com/iamphj3) | [@Rim Na](https://github.com/R1mmm) |
|      어쩌구 뷰<br/>어쩌구 뷰 및 api       |          어쩌구 뷰<br/>어쩌구 뷰<br/>어쩌구 api          |    어쩌구 뷰<br/>어쩌구<br/>저쩌구 api    |    저쩌구<br/>어쩌구<br/>어쩌구 api    |

</center>

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
    
    (**src > hooks)**
    
    custom hooks 정의하는 경우 이곳에서 정의 후 사용
    
    (**src > constants)**
    
    상수 정의하여 사용하는 경우 이곳에서 정의 후 사용
    

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
    module.exports = {
      printWidth: 100,
      tabWidth: 2,
      singleQuote: true,
      trailingComma: 'all',
      bracketSpacing: true,
      semi: true,
      useTabs: false,
      arrowParens: 'avoid',
      endOfLine: 'lf',
    };
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
    ex ) develop ← feature/Park-1, feature/Choi-1, feature/Na-1, feature/Kim-2
    각자의 브랜치에서 pull request 하고 코드 리뷰 후 develop에 merge
    main에 merge 후 배포


