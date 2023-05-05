![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=300&section=header&text=원티드%20프리온보딩%202차%20과제%209팀%20&fontSize=50)

<p>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/axios-5A29E4?style=flat-square&logo=axios&logoColor=white">
</p>

<br/>

# 🗓️ 프로젝트 기간

## 2023.5.2 ~ 2023.5.5

<br/>

## 📌 프로젝트 실행 방법

1. Clone the repo

```javascript
$ git clone https://github.com/wanted-pre-onboarding-team-9/pre-onboarding-10th-2-9.git
```

2. Install NPM packages

```javascript
$ npm install
```

3. Getting Started

```javascript
$ npm start
```

<br/>

## 🚀 배포

### [원티드 프리온보딩 인턴십 2차 과제 - 9팀 배포 링크](https://wanted-pre-onboarding-10th-9-2.herokuapp.com/)

<br/>

## ⭐️ 팀원 소개

|                          박상우                           |                           장소진                           |                          이아영                           |                          조하닮                           |                           김현정                           |
| :-------------------------------------------------------: | :--------------------------------------------------------: | :-------------------------------------------------------: | :-------------------------------------------------------: | :--------------------------------------------------------: |
|       [SangWoo9734](https://github.com/SangWoo9734)       |         [sojinjang](https://github.com/sojinjang)          |          [ARONGLEE](https://github.com/ARONGLEE)          |          [ohcmadah](https://github.com/ohcmadah)          |           [sena-22](https://github.com/sena-22)            |
| ![](https://avatars.githubusercontent.com/u/49917043?v=4) | ![](https://avatars.githubusercontent.com/u/111125577?v=4) | ![](https://avatars.githubusercontent.com/u/74637336?v=4) | ![](https://avatars.githubusercontent.com/u/52340070?v=4) | ![](https://avatars.githubusercontent.com/u/110877564?v=4) |

|                          이지현                           |                          김성현                           |                          이한나                           |                           전민지                           |
| :-------------------------------------------------------: | :-------------------------------------------------------: | :-------------------------------------------------------: | :--------------------------------------------------------: |
|          [j2h30728](https://github.com/j2h30728)          |       [kimisadev27](https://github.com/kimisadev27)       |      [Han-Na-05-22](https://github.com/Han-Na-05-22)      |        [mjjeon2645](https://github.com/mjjeon2645)         |
| ![](https://avatars.githubusercontent.com/u/60846068?v=4) | ![](https://avatars.githubusercontent.com/u/34756233?v=4) | ![](https://avatars.githubusercontent.com/u/97869178?v=4) | ![](https://avatars.githubusercontent.com/u/104840243?v=4) |

<br/>

## 👀 결과 페이지 프리뷰

<br/>

<details>
<summary>기본 화면</summary>
<div markdown="1">
<img width="1170" alt="기본 화면" src="추가 필요">
</div>
</details>
<br/>
<details>
<summary>검색어 없음 & 검색어 입력</summary>
<div markdown="2">
<img alt="검색어 입력" src="추가 필요"/>
</div>
</details>
<br/>
<details>
<summary>키보드로 추천 검색어 이동 및 선택</summary>
<div markdown="3">
<img alt="키보드로 추천 검색어 이동 및 선택" src="추가 필요"/>
</div>
</details>
<br/>
<details>
<summary>마우스로 추천 검색어 이동 및 선택</summary>
<div markdown="4">
<img alt="마우스로 추천 검색어 이동 및 선택" src="추가 필요"/>
</div>
</details>

<br/>

# ✨ 세부 구현 방법

## 1. 로컬 캐싱 방법 ([PR Link](https://수정필요))

- 검색 시 만료 기간을 설정하여 검색어를 키로, 추천 검색어들의 배열과 만료 기한을 값으로 만들어 로컬 스토리지에 저장하였습니다.
- 재검색 시 해당 검색어가 만료되지 않았으면 로컬 스토리지에서 꺼낸 추천 검색어를 그대로 반환하고, 만료되었다면 삭제 후 API 요청을 통해 다시 추천 검색어를 반환한 뒤 로컬 스토리지에 새로운 만료기간과 함께 저장하는 방식으로 구현하였습니다.
- 만료 기간은 임의로 10분 뒤로 설정하였습니다.

<br/>

## 2. API 호출 횟수 조절 방법 ([PR Link](https://수정필요))

- `useDebounce` 커스텀 훅을 이용하여 API 요청 횟수를 줄이도록 구현하였습니다.
- `useDebounce`는 검색어와 지연되는 시간을 받아 지정된 시간 뒤의 `value`로 `debouncedValue`를 설정하여 반환하게 되고, 반환된 값을 이용하여 API 요청을 하게 됩니다.

<img width="873" alt="스크린샷 2023-05-03 오후 10 06 25" src="https://user-images.githubusercontent.com/110877564/235924723-5c949e43-c7b1-4271-a57b-6f71ab2c2bdd.png">

<br/>

## 3. 키보드로 추천 검색어 이동하기 ([PR Link](https://수정필요))

- `keyboard`라는 유틸 파일 안에 `calcActiveIndex` 함수를 만들어서 방향키에 따라 활성화된 검색어의 인덱스를 계산한 뒤 조절하는 방식으로 구현하였습니다.
- 활성화된 인덱스를 가진 검색어는 `active`라는 `className`을 가지게 되어 현재 가리키는 검색어를 알 수 있습니다.
- 검색어가 변경되면 인덱스를 초기화합니다.

<br/>

## 💡 Best Practice 선정 과정 ([Wiki Link](https://github.com/wanted-pre-onboarding-team-9/pre-onboarding-10th-2-9/wiki/%F0%9F%93%9D-Pre-Onboarding-10th-9%ED%8C%80-%EA%B3%BC%EC%A0%9C-2))

과제 수행 방법 및 Best Practice 선정 과정은 레포지토리 위키에 정리되어 있습니다.

<br/>

# 📂 폴더 구조

```javascript
📦src
 ┣ 📂@types
 ┃ ┣ 📜dropdown.ts
 ┃ ┗ 📜search.ts
 ┣ 📂api
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜searchAPI.ts
 ┣ 📂components
 ┃ ┣ 📜Dropdown.tsx
 ┃ ┣ 📜DropdownItem.tsx
 ┃ ┣ 📜SearchIcon.tsx
 ┃ ┣ 📜SearchInput.tsx
 ┃ ┣ 📜Title.tsx
 ┃ ┗ 📜style.tsx
 ┣ 📂contexts
 ┃ ┗ 📜SuggestionsContext.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useBoolean.tsx
 ┃ ┣ 📜useClickOutside.ts
 ┃ ┗ 📜useDebounce.ts
 ┣ 📂pages
 ┃ ┣ 📜SearchPage.tsx
 ┃ ┗ 📜style.tsx
 ┣ 📂utils
 ┃ ┣ 📜cache.ts
 ┃ ┣ 📜const.ts
 ┃ ┣ 📜debounce.ts
 ┃ ┗ 📜keyboard.ts
 ┣ 📜index.tsx
 ┗ 📜style.tsx
```

# 참고자료

[디바운스(Debounce) & 쓰로틀(Throttle)](https://ye-yo.github.io/til/2022/03/29/debounce-throttle.html)

[디바운스(Debounce)와 쓰로틀(Throttle) 그리고 차이점](https://webclub.tistory.com/607)
