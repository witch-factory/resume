# 김성현  
깊이를 가리지 않고 문제를 해결하는 프론트엔드 개발자입니다.

- **블로그**: [https://witch.work](https://witch.work)  
- **GitHub**: [https://github.com/witch-factory](https://github.com/witch-factory)  
- **이메일**: [soakdma37@gmail.com](mailto:soakdma37@gmail.com)

---

## 소개

내부 동작 분석을 통한 최적화와 같은 깊이있는 작업부터 LLM을 활용한 번역 기능, 자동화 스크립트 작성, 백엔드 보강까지 다양한 문제를 정의하고 해결해 왔습니다. 기술적 선택과 학습에 관해 약 200편의 글을 작성해 왔으며 이 지식을 실무에 적용하기 위해 노력합니다. 문제의 깊이에 따라 적절한 방식으로 접근하며 다양한 수준에서 기여할 수 있는 개발자를 지향합니다.

---

## 경력

### Tmax FinAI (프론트엔드 연구원)  
보험 업무 전반을 위한 페이지 개발  
`2023.08 - 2024.09`  
**기술 스택**: React, TypeScript, styled-components, React Hook Form, TanStack Query

#### ✅ 팀 생산성 향상 유틸리티 제작
- API 명세를 표 형식으로 변환하는 도구를 만들고 팀에 공유하여 문서 작성 시간 50% 이상 단축
- 보험 용어 목록과 입력 데이터를 비교해 검토하는 도구를 만들고 공유하여 수작업 검토 프로세스 80% 이상 자동화
- 웹소켓 기반 사내 API 통신을 위해 TanStack Query로 제작한 커스텀 훅을 팀 내 공용 유틸리티로 공유

#### ✅ 보험 업무 관련 페이지 구현
- 사용자 조건에 따른 흐름 분기 및 상태 관리
- 사고 조회 팝업 구현 및 다수 페이지 연동
- 디자인 요구사항에 맞춰 24시간제 TimePicker 제작 및 접근성 대응
- 공통 컴포넌트 타입 개선 및 재사용성 향상

---

## 프로젝트

### 개인 블로그 제작  
다국어를 지원하는 Next.js 기술 블로그
`2023.05 - 현재`  
**기술 스택**: Next.js, TypeScript, Vanilla Extract  
[배포 링크](https://witch.work) | [GitHub](https://github.com/witch-factory/witch-next-blog)

#### 🔨 블로그 구축
- Next.js 12를 이용하여 블로그를 구현하고 RSC 업데이트 대응 등의 관리와 개선
- remark 플러그인을 제작하여 TOC 제작, 마크다운 내의 이미지 경로 변경 자동화
- SEO를 위해 OG 이미지 생성기, 사이트 메타데이터, 사이트맵, RSS 피드 도입
- 최신 ESLint 9의 Flat Config를 프로젝트에 도입하고 설정 전환 과정 문서화 [🔗 정리 글 링크](https://witch.work/ko/posts/blog-eslint-configuration)

#### 🎯 사용자 경험 개선
- 블로그에 AI 기반 자동 번역 시스템 구축, 영어 지원을 통해 글로벌 확장성 강화 [🔗 정리 글 링크](https://witch.work/ko/posts/blog-auto-translation)
- 사용자 브라우저의 언어에 맞게 자동으로 언어를 변경하도록 하고 SEO 설정 [🔗 정리 글 링크](https://witch.work/ko/posts/blog-content-i18n)
- 페이지 최적화로 Lighthouse 기준 성능 점수 75점 → 95점으로 개선

#### 🛠 운영 중 문제 해결
- 데이터 구조 변경, 서드파티 코드 작성을 통해 번들 사이즈 70% 감축 [🔗 정리 글 링크](https://witch.work/ko/posts/blog-bundle-reduction)
- pnpm 동작 방식으로 인한 ESLint 이슈 해결 [🔗 정리 글 링크](https://witch.work/ko/posts/blog-eslint-pnpm-bugfix)
- 불필요한 데이터 로딩으로 인한 성능 저하 문제 해결 [🔗 정리 글 링크](https://witch.work/ko/posts/blog-fix20230808)

---

### 신촌 대학생 프로그래밍 동아리 연합  
알고리즘 캠프 홈페이지 및 관리자 페이지 개발  
`2024.05 - 2024.12`  
**기술 스택**: Next.js, TypeScript, Radix UI, Express, Prisma, GCP  
[홈페이지](https://icpc-sinchon.io)

#### ✅ 프론트엔드 개발
- Next.js 10 + JavaScript 코드를 Next.js 12 + TypeScript로 마이그레이션
- 레거시의 작성자와 논의하여 코드가 작성된 맥락과 의도를 반영한 핵심 기능 중심으로 코드 리팩토링
- 광범위한 요소를 선택하는 DOM API로 작성되어 유지보수가 어렵던 기존 컴포넌트들을 React와 Radix UI 기반으로 마이그레이션

#### ✅ 백엔드 개발
- 학생 정보 관리, 강의 출석 관리, 과제 제출 확인, 강의료 계산 등의 기능을 수행하는 API 서버 작성
- 추후의 유지보수를 위해 Go 기반 코드 → Node.js, TypeScript, Prisma로 이관
- 디스코드 비대면 강의를 위한 출석 봇을 discord.js 라이브러리로 구현 후 서버와 함께 배포

---

## 활동

### 글 쓰는 개발자 모임, 글또 9-10기 
우수 글을 선별하는 큐레이션(5% 미만 선정률)에 10편의 글 선정, 100명 규모 모임에서 발표 진행
`2023 - 2025`  
[글또 홈페이지](https://geultto.github.io/)

- 글또 프론트엔드 반상회 발표 - '나의 방식으로 네트워킹 시작하기' [🔗 발표 자료 링크](https://github.com/witch-factory/presentations/blob/master/%EA%B8%80%EB%98%90_%EB%82%98%EC%9D%98_%EB%B0%A9%EC%8B%9D%EC%9C%BC%EB%A1%9C_%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%82%B9_%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0.pdf)
- JavaScript의 특수한 주석 형식에 관한 글, 네이버 FE News 2024년 2월 큐레이션 선정 [🔗 큐레이션 링크](https://github.com/naver/fe-news/blob/master/issues/2024-02.md#js%EC%9D%98-%EC%A3%BC%EC%84%9D%EC%9D%80-%EA%B3%BC--%EB%BF%90%EB%A7%8C%EC%9D%B4-%EC%95%84%EB%8B%88%EB%8B%A4)
- 클로저의 역사에 딥다이브하여 튜링 기계부터 JavaScript까지 되짚어 올라오는 글, 글또 10기 3회차 큐레이션 선정 [🔗 글 링크](https://witch.work/ko/posts/javascript-closure-deep-dive-history)
- 컨텐츠 관리 라이브러리 velite의 소개 글, 글또 9기 10회차 큐레이션 선정 [🔗 글 링크](https://witch.work/ko/posts/velite-library-introduction)
- 타입 시스템의 가변성을 TypeScript로 설명한 글, 글또 9기 1회차 큐레이션 선정 [🔗 글 링크](https://witch.work/ko/posts/typescript-covariance-theory)

---

### BBConf  
30명 규모의 오픈 컨퍼런스
`2021 - 현재`  
[홈페이지](https://bbconf.kr/)

- 컴퓨터, 네트워크, 웹에 관한 간략한 역사와 오해를 바로잡는 발표 [🔗 발표 자료 링크](https://bbconfwebdav.vulcan.site/bbconf/2024-winter/%ea%b9%80%ec%84%b1%ed%98%84_%eb%b8%8c%eb%9d%bc%ec%9a%b0%ec%a0%80%ec%97%90%20google%ec%9d%84%20%ec%b9%98%eb%a9%b4%20%ec%83%9d%ea%b8%b0%eb%8a%94%20%ec%9d%bc%ea%b9%8c%ec%a7%80%20%ec%83%9d%ea%b8%b4%20%ec%9d%bc.pdf)
- 블로그를 오랫동안 운영하는 동력을 얻고 좋은 글을 쓰기 위한 노하우에 대한 발표 [🔗 발표 자료 링크](https://bbconfwebdav.vulcan.site/bbconf/2024-summer/%eb%a7%88%eb%85%80_%eb%b8%94%eb%a1%9c%ea%b7%b8%eb%a1%9c_%ec%a7%84%ec%a7%9c_%ea%b0%9c%eb%b0%9c%ec%9e%90%ec%b2%98%eb%9f%bc_%eb%b3%b4%ec%9d%b4%eb%8a%94_%eb%b2%95.pdf)
- JavaScript의 초기 역사와 언어적인 선택들에 관한 발표 [🔗 발표 자료 링크](https://bbconfwebdav.vulcan.site/bbconf/2023-winter/%EB%A7%88%EB%85%80_JS%EB%8A%94_%EC%99%9C_%EC%9D%B4_%EB%AA%A8%EC%96%91%EC%9D%BC%EA%B9%8C.pdf)

---

### 지식 공유 오픈소스 활동
`2023 - 현재`

- 웹 개발에 필수적인 MDN 영문 문서의 역사적인 오류 수정 [🔗 PR 목록 링크](https://github.com/mdn/content/pulls?q=is%3Apr+author%3A%08witch-factory)
- MDN의 JavaScript 레거시 문법에 관한 문서를 한글 번역 [🔗 PR 목록 링크](https://github.com/mdn/translated-content/pulls?q=is%3Apr+author%3A%08witch-factory)
- JavaScript의 역사에 관한 약 120쪽 분량의 논문 번역, 배포 [🔗 배포 링크](https://js-history.vercel.app/)

---

### 학생 커뮤니티 기여
`2021 - 2024`

- GDG on Campus Hongik Univ., SW마에스트로 과정에서 배운 것에 관한 발표 [🔗 발표 영상 링크](https://www.youtube.com/watch?v=RXpOaKQES-g)
- GDG on Campus Hongik Univ., 개발자의 진로 설정에 관한 발표 [🔗 발표 영상 링크](https://www.youtube.com/watch?v=SMMb56p7myg)
- 신촌 지역 대학생 약 100명을 대상으로 겨울방학 알고리즘 강의 진행 [🔗 강의자료 링크](https://github.com/witch-factory/presentations)
- 서강대학교 프로그래밍 경진대회(SPC) 운영진 [🔗 대회 페이지 링크](https://www.acmicpc.net/contest/view/897)
- 서강대학교 알고리즘 학회 2022년 임원진으로 활동하며 스터디 진행, 2개의 대회 운영

---

## 교육

### 서강대학교  
기계공학과 / 컴퓨터공학과 졸업  
`2015.03 - 2023.02`  
- 컴퓨터공학 전공 GPA: 4.03 / 4.3

### 소프트웨어 마에스트로 13기  
`2022.07 - 2022.11`  
- 밴드 활동 플랫폼 "밴드웨건" 개발  
- React, zustand, Tailwind CSS 사용
