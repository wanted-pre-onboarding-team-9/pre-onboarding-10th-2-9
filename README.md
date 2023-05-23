![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=300&section=header&text=원티드%20프리온보딩%202차%20과제%209팀&fontSize=50)

<br/>

# 🗓️ 프로젝트 기간

## 2023.5.2 ~ 2023.5.5 (3일)

<br/>

# 📌 프로젝트 실행 방법

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

# 🛠️ 기술스택

<p>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
</p>

<br />

# 👀 과제 결과물 프리뷰

https://user-images.githubusercontent.com/49917043/236491045-23354f15-fd19-404d-b10b-9543d6e1333d.mov

<br/>

# 🚀 배포 페이지

### [원티드 프리온보딩 인턴십 2차 과제 - 9팀 배포 링크](https://pre-onboarding-10th-2-9.netlify.app/)

<br/>

# ✨ 세부 구현 방법

## 1. 로컬 캐싱 방법

- Cache는 클래스로 만든 뒤 index.ts에서 instance 생성 후 useSuggestions으로 넘겨줍니다.
- cache를 얼마나 유지할 것인지 cacheTime(ms)를 constructor에서 받고 있으며, 따로 설정하지 않을 경우 기본값은 5분으로 설정하였습니다.
- cache.set 실행 시 해당 cacheMap expireTime에 Date.now() + cacheTime을 설정하고, cache.get을 할 때 Date.now()와 expireTime을 비교하여 지났으면 remove, 지나지 않았으면 캐시된 데이터를 리턴해주도록 구현하였습니다.

<br/>

## 2. API 호출 횟수 조절 방법

API 호출을 조절하는 방법에는 여러가지가 있지만 그 중 debounce가 API 호출을 줄이는데 더 효과적이라고 생각하여 선택했습니다.
다만 유저 입력이 끝난 뒤에 결과가 보여지기 때문에 사용자 경험이 좋지 않을 수 있다는 의견이 있었지만. 이는 debounce delay 시간을 짧게 설정함으로 해결할 수 있었습니다.

<br/>

## 3. 키보드로 추천 검색어 이동하기

- 키보드 입력시 키 값을 전달 받고, ArrowUp, ArrowDown, Enter 키가 각각 다른 동작을 수행하도록 설계하였습니다.
- 자동완성된 단어들은 Focus Index의 state에 따라 조절되며 ArrowUp의 경우 Index를 -1 씩 줄이고, ArrowDown의 경우 Index를 1씩 늘립니다.
- Enter 키를 입력했을 경우에는 자동완성 리스트의 해당 index를 가지는 단어가 input에 반영되도록 구현하였습니다.

<br/>

<br/>

# 💡 Best Practice 선정 과정

Best Practice 선정 과정은 레포지토리 Wiki에 정리되어 있습니다. [Wiki 바로가기](https://github.com/wanted-pre-onboarding-team-9/pre-onboarding-10th-2-9/wiki/%F0%9F%93%9D-Pre-Onboarding-10th-9%ED%8C%80-%EA%B3%BC%EC%A0%9C-2)

<br/>

# 📂 폴더 구조

```javascript
📦src
 ┣ 📂@types
 ┃ ┗ 📜search.ts
 ┣ 📂api
 ┃ ┣ 📜ApiUrl.ts
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

<br/>

# ⭐️ 팀원 소개

|                                                    박상우                                                     |                                                    장소진                                                    |                                                   이아영                                                    |
| :-----------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------: |
|                                 [SangWoo9734](https://github.com/SangWoo9734)                                 |                                  [sojinjang](https://github.com/sojinjang)                                   |                                   [ARONGLEE](https://github.com/ARONGLEE)                                   |
| <img src="https://avatars.githubusercontent.com/u/49917043?v=4" alt="SangWoo9734" width="150" height="150" /> | <img src="https://avatars.githubusercontent.com/u/111125577?v=4" alt="sojinjang" width="150" height="150" /> | <img src="https://avatars.githubusercontent.com/u/74637336?v=4" alt="AROUNGLEE" width="150" height="150" /> |

|                                                   이지현                                                   |                                                    김성현                                                     |                                                     이한나                                                     |
| :--------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------: |
|                                  [j2h30728](https://github.com/j2h30728)                                   |                                 [kimisadev27](https://github.com/kimisadev27)                                 |                                [Han-Na-05-22](https://github.com/Han-Na-05-22)                                 |
| <img src="https://avatars.githubusercontent.com/u/60846068?v=4" alt="j2h30728" width="150" height="150" /> | <img src="https://avatars.githubusercontent.com/u/34756233?v=4" alt="kimisadev27" width="150" height="150" /> | <img src="https://avatars.githubusercontent.com/u/97869178?v=4" alt="Han-Na-05-22" width="150" height="150" /> |

|                                                    전민지                                                     |                                                   조하닮                                                   |                                                   김현정                                                   |
| :-----------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: |
|                                  [mjjeon2645](https://github.com/mjjeon2645)                                  |                                  [ohcmadah](https://github.com/ohcmadah)                                   |                                   [sena-22](https://github.com/sena-22)                                    |
| <img src="https://avatars.githubusercontent.com/u/104840243?v=4" alt="mjjeon2645" width="150" height="150" /> | <img src="https://avatars.githubusercontent.com/u/52340070?v=4" alt="ohcmadah" width="150" height="150" /> | <img src="https://avatars.githubusercontent.com/u/110877564?v=4" alt="sena-22" width="150" height="150" /> |
