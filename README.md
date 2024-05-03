# 📖 팀 회고 작성 서비스 웹 Past-Forward

![mainPage](https://github.com/donga-it-club/past-forward-frontend/assets/138123134/b19cc815-677f-42e8-ab35-f7acfa4bf988)


- 배포 URL : https://www.pastforward.link/

<br>

## 프로젝트 소개

- Past-Forward는 팀원들과 회고 작성을 할 수 있는 웹페이지입니다.
- 회고 템플릿(총 두가지)에 따라 다른 주제로 회고 카드를 네가지 섹션으로 나누어 작성이 가능합니다.
- 팀원 초대 링크를 통해 팀원들을 초대하고 관리(초대 및 삭제 기능)할 수 있습니다.
- 다양한 유저들을 마음에 드는 회고 카드에 좋아요를 누르거나 댓글을 작성할 수 있습니다.

<br>

## 팀원 구성

<div align="center">

|                                                                **공정민**                                                                 |                                                                 **임희정**                                                                  |                                                            **김예나**                                                            |                                                                  **배금빈**                                                                  |
| :---------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars.githubusercontent.com/u/102538362?v=4" height=150 width=150> <br/> @jeongmin59](https://github.com/jeongmin59) | [<img src="https://avatars.githubusercontent.com/u/138123134?v=4" height=150 width=150> <br/> @heejung0413](https://github.com/heejung0413) | [<img src="https://avatars.githubusercontent.com/u/76564438?v=4" height=150 width=150> <br/> @yeneua](https://github.com/yeneua) | [<img src="https://avatars.githubusercontent.com/u/84950772?v=4" height=150 width=150> <br/> @sunflower888](https://github.com/sunflower888) |

</div>

<br>

## 1. 개발 환경

- Front : HTML, React, styled-Component,Chakra UI, Recoil, Cognito, axios, msw, husky, prettier, ESLint, babel
- Back-end : 제공된 API 활용
- 버전 및 이슈관리 : Github, Github Issues, Github Project
- 협업 툴 : Discord, Notion, Github Wiki, Slack
- 서비스 배포 환경 : Netlify
- 디자인 : [Figma](https://www.figma.com/file/zJaBNvTvLlG0d9h5TILICj/Past-Forward-Web-Site?type=design&node-id=1157%3A6652&mode=design&t=eI1Pvgp8EpiHQgEA-1)
- [👩🏻‍💻 커밋 컨벤션](https://jmgong59.notion.site/Git-Commit-Convention-374ef8d5a3984d5ab35cd9f5f6332888?pvs=4)
- [💻 네이밍 컨벤션](https://jmgong59.notion.site/Naming-Convention-c5a2ea4274884e10ba0b33ea53beebad?pvs=4)
- [🗂️ 폴더 및 컴포넌트 구조](https://jmgong59.notion.site/d64d3c4c35a146f8ab64c4a0024b4ddb?pvs=4)
  <br>

## 2. 채택한 개발 기술

### React, Typescript

- React
  - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
  - 유저 배너, 상단과 하단 배너 등 중복되어 사용되는 부분이 많아 컴포넌트화를 통해 리소스 절약이 가능했습니다.
- Typescript
  - 안정적인 개발과 높은 코드 수준의 코드 품질을 유지하려면 정적 타입 문법을 추가해 개발하는 것이 편리하다 생각했습니다.
  - 변수 타입을 지정하고 javascript로 컴파일되어 실행할 수 있습니다.
  - 컴파일 과정에서 타입을 지정함으로써, 에러 예방과 손쉬운 디버깅이 가능했습니다.

### styled-component, Chakra UI

- styled-component
  - props를 이용한 조건부 스타일링을 활용하여 상황에 알맞은 스타일을 적용시킬 수 있었습니다.
  - 빌드될 때 고유한 클래스 이름이 부여되어 네이밍 컨벤션을 정하는 비용을 절약할 수 있었습니다.
  - S dot naming을 통해 일반 컴포넌트와 스타일드 컴포넌트를 쉽게 구별하도록 했습니다.
- Chakra UI
  - React 애플리케이션을 빌드하는데 필요한 블록을 간단하고 모듈적이며 접근 가능하게 만들 수 있는 UI 컴포넌트 라이브러리입니다.

### eslint, prettier

- 정해진 규칙에 따라 자동적으로 코드 스타일을 정리해 코드의 일관성을 유지하고자 했습니다.
- 코드 품질 관리는 eslint에, 코드 포맷팅은 prettier에 일임해 사용했습니다.
- airbnb의 코딩 컨벤션을 참고해 사용했고, 예외 규칙은 팀원들과 협의했습니다.
- 협업 시 매번 컨벤션을 신경 쓸 필요 없이 빠르게 개발하는 데에 목적을 두었습니다.

<br>

## 3. 역할 분담

### 🤩공정민

- **UI**
  - 페이지 : 회고 생성 페이지, 프로필 페이지, 설문조사 페이지
  - 공통 컴포넌트 : 팀원 초대 모달
- **기능**
  - Cognito 인증 처리
  - Amplify ui를 활용한 로그인 및 회원가입 페이지 구현
  - 개발환경 구축 (webpack 사용)

<br>
    
### 👻임희정
- **UI**
    - 페이지 : 메인 페이지 첫번째 section 페이지,마이페이지 기본디자인, 레이아웃(Navbar, SideBar), 회고카드 페이지 디자인 마무리 작업, 회고 수정 페이지 마무리 작업
    - 공통 컴포넌트 : Chakra UI 모달창

- **기능**
  - 백엔드에서 주어진 API 타입 작성, API 비동기 함수 객체 설정
  - 회고 카드 작성 페이지 전반적 작업 ( 댓글 기능, 좋아요, 회고 카드 작성 및 수정)
  - MSW 설정
  - ESLint, Prettier 정책 설정
  - Chakra UI 공통 theme 설정 및 브랜드 컬러 커스텀

<br>

### 👩🏻‍💻김예나

- **UI**

  - 페이지: RetroList 페이지, Main 화면 서브 페이지 디자인, Action Items 담당자 지정 창

- **기능**
  - 메인 페이지 react-fullpage 라이브러리 적용
  - RetroList API 연결
  - Action Items 담당자 지정 창 API 연결

<br>

### 🐬배금빈

- **UI**
  - 페이지: 회고카드 페이지 디자인 작업, 회고 수정 페이지 디자인 작업
- **기능**
  - 설문조사 페이지 API 연결
  - 메인 페이지 Contact API 연결
  - 데이터 분석을 위한 버튼 Id 값 입력

<br>

## 4. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2024-02-01 ~ 2024-04-26

<br>

### 작업 관리

- GitHub Projects로 백엔드와의 issue 상황을 파악하며 프로젝트를 진행하였습니다.
- issue 번호에 따라 브랜치 네임을 정하며 전략에 맞추어 브랜치를 생성하였습니다.

<br>

<br>

## 5. 페이지별 기능

### [메인페이지]

- 'react-fullpage' 라이브러리를 사용해 자동 스크롤 기능을 추가해 메인페이지를 작성했습니다.
- 메인 페이지 하단에는 로그인 후 관리자에게 문의를 보낼 수 있는 API가 연결되어 있습니다.

| 메인페이지 |
| ---------- |

| ![mainPage](https://github.com/donga-it-club/past-forward-frontend/assets/138123134/e54876e6-34e6-4d79-a6f5-fc0ed4e86cb5)

<br>

### [회원가입 및 로그인]

- 이메일 주소와 비밀번호를 입력하면 이메일 주소가 틀리다면 해당 회원 정보는 없다고 표시하며 비밀번호가 틀리면 유저 메일 정보와 비밀번호 정보가 일치하지 않는다고 표시합니다.
- 회원가입은 사용자의 이메일 주소로 인증번호를 보낸 후 유효한 메일 정보인지 확인합니다.
- 비밀번호를 두 번 입력해 일치가 되면 회원가입에 성공합니다.
- 사용자가 비밀번호를 잊었다면 이메일 주소로 코드를 전송해 일치하는 코드를 입력한다면, 비밀번호 재설정이 가능합니다.

| 로그인 |
| ------ |

| ![login](https://github.com/donga-it-club/past-forward-frontend/assets/138123134/e7563be4-a688-4ff6-a88d-4cd22bc88791)

<br>

### [프로필 설정]

- 프로필 설정에 필요한 프로필 사진, 닉네임, 비밀 번호 수정이 가능합니다.
- 프로필 사진은 등록하지 않을 경우 기본 이미지가 등록됩니다.

| 프로필 설정                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ |
| ![profile](https://github.com/donga-it-club/past-forward-frontend/assets/138123134/368317a7-d163-4ebd-8797-402447d2bed7) |

<br>

<br>

### [레이아웃]

- 네비게이션 바
  - 메인페이지의 섹션들을 볼 수 있습니다.
  - 로그인 여부에 따라 'Log out', 또는 회원 정보가 보이게 됩니다.
  - Create 버튼 : 회고를 만들 수 있는 페이지 이동의 버튼이 있습니다.
- 사이드바
  - 사용자가 만든, 혹은 팀원으로 속한 회고 보드를 볼 수 있습니다.
  - 회고보드를 만들 수 있는 create 페이지 이동의 아코디언 형식의 UI가 구성되어있습니다.
  - 회고 리스트 페이지 이동의

| 레이아웃 |
| -------- |

| ![layout](https://github.com/donga-it-club/past-forward-frontend/assets/138123134/bce14804-789e-40c4-977b-36bcf288aa0e)

<br>

### [회고]

#### 1. 회고 작성

- 회고 템플릿(KUDOS, KPT)를 고를 수 있습니다.
- 회고 썸네일 사진을 선택할 수 있습니다. 선택하지 않는다면 기본 이미지로 보여집니다.
- 회고 이름, 회고 설명, 회고 작성일을 입력합니다.

| 회고 작성 |
| --------- |

| ![create](https://github.com/donga-it-club/past-forward-frontend/assets/138123134/1c999531-0881-40c7-920c-4d6a4e1caef9)

<br>

#### 2. 회고 수정

- 회고 보드 타입(팀회고, 개인회고)에 따라 다른 아이콘이 보여집니다.
- 회고 수정 페이지에는 팀 회고라면 '회고 설정'과 '팀원 관리' 탭이 두개가 보여지지만, 개인 회고라면 '회고 설정' 탭만 보여집니다.

- 회고 설정

  - 회고 썸네일, 회고명, 회고 설명, 회고 진행단계 수정이 가능합니다.
  - 회고 설정 탭에서만 회고 삭제가 가능합니다.

- 팀원 관리 (팀회고에서만 가능)
  - 팀원 초대링크 버튼이 있습니다.
  - 팀원을 검색할 수 있습니다.
  - 팀원을 삭제할 수 있습니다. (단, 팀장은 삭제하지 못합니다.)

| 회고 수정                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------- |
| ![revise-setting](https://github.com/donga-it-club/past-forward-frontend/assets/138123134/5a482dd4-bd9b-423a-a805-92b55d21cbc6) |

<br>

#### 3. 회고 보드

- 회고 보드 타입(팀회고, 개인회고)에 따라 다른 아이콘이 보여집니다.
- 회고 보드 내에서 회고 카드 작성할 수 있습니다.
- 회고카드에 좋아요 기능과 댓글기능이 있습니다.
- 회고 카드 댓글 수정이 가능합니다.
- 회고 카드 작성자는 회고 카드 수정이 가능합니다.
- 회고 카드 작성일, 시간이 보여집니다.
- 회고 카드 삭제가 가능합니다.
- 팀 회고일 경우, 'Action Items' 내에서 담당자 지정이 가능합니다.

| 회고 보드 |
| --------- |

| ![invite](https://github.com/donga-it-club/past-forward-frontend/assets/138123134/cc57cc79-c8ef-4d2d-925f-7479d3da2332)

#### 4. 초대 링크

- 팀원을 초대하는 링크입니다.
- 팀원 QR코드도 존재합니다.
- 초대링크를 복사해 팀원을 초대할 수 있습니다.
- 단, 팀장(회고 작성자)은 초대를 받을 수 없습니다.
- 개인 회고 보드에는 초대링크가 존재하지 않습니다.

| 초대 링크 |
| --------- |

| ![invited](https://github.com/donga-it-club/past-forward-frontend/assets/138123134/fa2f03f1-07ef-4cf3-bb07-07e64de20dc3)

<br>
