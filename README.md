# @aeris Monorepo

<b>@aeris</b>는 모노레포 구조를 기반으로 구성된 <b>Headless UI 패키지 (@aeris/core)</b>와 <b>스타일링된 UI 패키지(@aeris/ui)</b>를 제공합니다.

이 프로젝트는 <b>재사용 가능한 UI 컴포넌트</b>를 구축하는 데 필요한 기능적 로직과, 이를 기반으로 스타일을 적용한 완성된 UI 컴포넌트를 제공합니다.

<br />

## 프로젝트 구성

- <b>@aeris/core</b>: Headless UI 패키지. 스타일 없이 <b>기능적인 로직</b>만을 포함한 컴포넌트.
- <b>@aeris/ui</b>: Headless UI 컴포넌트를 기반으로 <b>스타일을 적용한 UI 컴포넌트</b>를 제공하는 패키지.

## 목차

- [@aeris Monorepo](#aeris-monorepo)
  - [프로젝트 구성](#프로젝트-구성)
  - [목차](#목차)
  - [설치](#설치)
  - [개발 환경](#개발-환경)
    - [개발 서버 실행](#개발-서버-실행)
  - [패키지 설명](#패키지-설명)
    - [@aeris/core - Headless UI](#aeriscore---headless-ui)
      - [사용법](#사용법)
    - [@aeris/ui - 스타일링된 UI](#aerisui---스타일링된-ui)
      - [사용법](#사용법-1)

<br />

## 설치

프로젝트를 설치하려면 <b>pnpm</b> 패키지 매니저를 사용해야 합니다.
루트 디렉토리에서 다음 명령어를 실행하여 프로젝트의 의존성을 설치합니다:

```bash
pnpm install
```

<br />

## 개발 환경

### 개발 서버 실행

<b>Turborepo</b>를 사용하여 각 패키지의 개발 서버를 실행할 수 있습니다.

```bash
pnpm turbo run dev
```

<br />

## 패키지 설명

### @aeris/core - Headless UI

<b>@aeris/core</b>는 <b>Headless UI</b> 컴포넌트를 제공합니다.
이 패키지는 스타일 없이 <b>상태 관리</b> 및 <b>기능 로직</b>만을 포함하여 <b>재사용 가능하고 유연한 UI</b> 컴포넌트를 개발할 수 있게 합니다.

#### 사용법

\*추가예정

### @aeris/ui - 스타일링된 UI

<b>@aeris/ui</b>는 <b>@aeris/core</b>에서 제공하는 Headless UI 컴포넌트를 가져와 <b>스타일을 입힌 최종 UI</b>를 제공합니다. 이 패키지는 <b>emotion</b> 라이브러리로 스타일링을 적용한 UI 컴포넌트를 제공합니다.

#### 사용법

\*추가예정
