<h1 align="center">CBT OMR Tester</h1>

<p align="center">브라우저에서 시험을 설정하고, OMR을 마킹하고, 바로 채점하는 도구.</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel">
</p>

<p align="center">
  <a href="https://cbt-omr-tester.vercel.app/">실행하기</a> ·
  <a href="https://github.com/jeongiryang/cbt-omr-tester/raw/refs/heads/main/CBT.html">HTML 다운로드</a> ·
  <a href="#사용-방법">사용 방법</a>
</p>

![시험 설정부터 OMR 마킹과 채점까지](./docs/media/demo.gif)

<p align="center"><sub>배포 화면 · 시험 설정 → 10문항 마킹 → 정답 입력 → 채점</sub></p>

## 주요 기능

- **시험 설정** — ADsP·정보처리기사 프리셋, 과목명·문항 수·합격·과락 기준 설정.
- **선택지와 배점** — 4지선다·5지선다, 직접 배점 또는 100점 자동 배점.
- **타이머** — 제한 없음·30분·60분·90분. 시간이 끝나면 정답 입력과 채점으로 전환.
- **OMR 마킹** — 과목별 답안 입력, 응답 진행률·미응답 수 표시, 답안 전체 초기화.
- **정답 입력** — 직접 입력하거나 숫자·쉼표·공백으로 구분한 정답을 한 번에 붙여넣기.
- **채점 결과** — 총점·100점 환산 점수, 합격·과락 판정, 오답·미응답 비교표.

단일 HTML 파일로 구성되어 별도 설치나 백엔드 없이 PC·모바일 브라우저에서 사용할 수 있다.

## 사용 방법

1. [배포 페이지](https://cbt-omr-tester.vercel.app/)를 열거나 내려받은 `CBT.html`을 브라우저에서 연다.
2. ADsP·정보처리기사 프리셋을 고르거나 과목·문항·배점을 직접 설정한다.
3. 제한시간을 선택하고 시험을 시작한 뒤 답안을 마킹한다.
4. 과목별 정답을 입력하거나 전체 정답을 붙여넣는다.
5. 채점 결과에서 총점, 과락 여부, 오답·미응답 문항을 확인한다.

## 정적 스크린샷 갱신

```bash
npm install
npm run capture
```

Playwright와 헤드리스 Edge로 프로젝트 루트의 `screenshot.png`를 갱신한다.
