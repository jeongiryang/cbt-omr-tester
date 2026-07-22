# CBT OMR Tester

[![Release](https://img.shields.io/github/v/release/jeongiryang/cbt-omr-tester?color=blue&label=Latest%20Release)](https://github.com/jeongiryang/cbt-omr-tester/releases/latest)
[![Run CBT](https://img.shields.io/badge/CBT_Run-Click_Here-success)](https://github.com/jeongiryang/cbt-omr-tester/releases/download/v1.0.0/CBT.html)

[바로가기]

- [CBT.html 바로가기](https://github.com/jeongiryang/cbt-omr-tester/releases/download/v1.0.0/CBT.html)

---

![CBT Preview](./screenshot.png)

> 자격증 및 모의고사 대비를 위한 사용자 맞춤형 단일 HTML 기반 웹 OMR 및 자동 채점 도구임

## 프로젝트 개요

- 별도의 백엔드 서버나 설치 없이 브라우저에서 즉시 실행 가능한 CBT(Computer Based Test) 연습용 OMR 시트임
- ADsP, 정보처리기사, 공무원 시험 등 다양한 객관식 시험에 맞춰 과목 및 배점 구조를 자유롭게 구성 가능함

## 주요 기능

- **자격증 프리셋**: ADsP와 정보처리기사의 과목 수, 과목명, 문항 수, 배점, 합격·과락 기준을 한 번에 적용 지원
- **시험 환경 맞춤 설정**: 과목 수, 과목명, 과목별 문항 수를 자유롭게 구성 지원
- **선택지 및 배점 옵션**: 4지선다·5지선다 선택 및 문항당 직접 배점 또는 100점 자동 배점 지원
- **실시간 시험 타이머**: 제한 없음, 30분, 60분, 90분 제한시간 선택과 경과·남은 시간 실시간 표시 제공
- **시간 종료 처리**: 제한시간 종료 시 답안 마킹을 종료하고 정답 입력 및 채점 모드로 자동 전환 지원
- **OMR 및 진행률**: 과목별 답안 마킹, 미응답 문항 수 및 응답 진행률 실시간 표시 제공
- **정답 일괄 붙여넣기**: 연속 숫자 또는 쉼표·공백 구분 정답을 과목별 정답 입력란에 자동 분배 지원
- **답안 초기화**: 한 번의 동작으로 모든 OMR 마킹을 제거하는 답안 초기화 기능 제공
- **합격 및 과락 판정**: 전체 합격 기준 점수와 과목별 과락 기준을 동시에 검증함
- **자동 채점 및 오답 분석**: 총점, 100점 환산 점수, 제출 답안과 정답 비교표 제공
- **반응형 UI**: PC 및 모바일 환경 지원

## 사용 방법

1. `CBT.html` 파일을 웹 브라우저(Chrome, Edge 등)로 직접 열어 실행함
2. ADsP 또는 정보처리기사 프리셋을 적용하거나 시험 조건을 직접 입력함
3. 제한시간을 선택한 뒤 시험을 시작하고 OMR 답안을 마킹함
4. 정답을 과목별로 입력하거나 정답 일괄 붙여넣기 입력창에 전체 정답을 붙여넣음
5. 채점 결과와 과목별 과락 여부, 오답 및 미응답 문항을 확인함

## 미리보기 갱신

```bash
npm install
npm run capture
```

Playwright와 헤드리스 Edge를 사용하여 프로젝트 루트의 `screenshot.png`를 자동 갱신함
