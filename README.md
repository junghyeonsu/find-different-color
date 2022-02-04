# find-different-color

> **다른 색깔 찾기 게임**  
> [넘블 프로젝트](https://numble-react.vercel.app/) 클론하기 챌린지

### [🕹️ 게임하러 가기 🕹️](https://find-different-color.vercel.app/)

# 기간

- 2022년 2월 4일 (금) - 2022년 2월 13일 (일)

# 규칙

- 이 챌린지에서 우리는 `Context`, `Redux`, `Recoil` 등 상태관리 라이브러리를 사용하지 않고 다른 색깔 찾기 게임을 제작할 거예요.
- 이 챌린지를 통해 우리는 이 챌린지를 통해 우리는 요구사항에 따라 적절한 단위로 `component`를 나눠볼 수 있고, 어느 `component`가 어느 `state`를 가지고 있어야하는가에 대해 실전적으로 익힐 수 있으며, 적절한 `prop`을 사용해 탄력적인 `component` 작성에 대해서도 연습할 수 있어요.

# 기술

- TypeScript (language)
- create-react-app (react)
- react-router-dom (router)
- styled-components (CSS in JS)
- react-animated-numbers (number animation)
- Eslint & Prettier (linter & formatter)
- Vercel (deploy)

# 기능 목록

- 게임 시작 버튼 클릭 기능
  - 게임 시작 버튼을 클릭하면 게임 페이지로 이동
  - 제한 시간을 15초으로 초기화
  - 점수를 0으로 초기화
  - 스테이지를 1로 초기화
- 색 랜덤 뽑기 기능
  - 255, 255, 255를 전부 랜덤으로 돌려 숫자를 뽑고 색상 결정
  - 나머지 하나는 해당 숫자에서 조금씩 떨어져있는 색상으로 결정
  - stage 올라갈수록 정답과 오답의 색상 차이 줄어듦
- 게임 보드 기능
  - `Math.pow(Math.round((stage + 0.5) / 2) + 1, 2)`개의 사각형
- 제한 시간 기능
  - 게임의 제한시간은 15초
  - 잘못된 색깔을 클릭시 3초 줄어듦
  - 제한시간이 0초 되면 게임 종료
- 보드 클릭 기능
  - 정답 컴포넌트 클릭 시 다음 스테이지로 변경
  - 정답 컴포넌트 클릭 시 `Math.pow(stage, 3)` \* `남은 시간` 만큼의 점수 추가
  - 제한시간 15초로 초기화
- 게임 종료 기능
  - 모달창에 현재 스테이지 출력
  - 모달창에 현재 점수 출력
  - 모달창에 홈 이동 버튼 렌더링
  - 모달창에 다시 시작 버튼 렌더링
- 홈 이동 버튼 클릭
  - 홈으로 이동
- 다시 시작 버튼 클릭
  - 스테이지 1로 초기화
  - 제한 시간 15초로 초기화
  - 점수 0로 초기화
  - 게임 시작
