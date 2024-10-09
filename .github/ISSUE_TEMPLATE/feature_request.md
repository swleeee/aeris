name: "✨ 새로운 기능 요청"
description: "프로젝트에 추가하고 싶은 새로운 기능을 제안해 주세요."
labels: ["feature"]
body:

- type: textarea
  attributes:
  label: 📄 기능 설명
  description: 추가하고자 하는 기능에 대한 자세한 설명을 작성해 주세요.
  placeholder: 예: 이 기능을 통해 사용자들이 더 쉽게 데이터를 관리할 수 있습니다.
  validations:
  required: true

- type: textarea
  attributes:
  label: 🛠️ 작업 내용
  description: 이 기능을 구현하기 위한 작업 내용을 간단하게 나열해 주세요.
  placeholder: 예: 1. API 엔드포인트 추가 2. UI 컴포넌트 제작 3. 데이터 검증 로직 추가
  validations:
  required: true

- type: textarea
  attributes:
  label: 📎 참고 자료
  description: 관련된 문서나 참고할 자료가 있으면 링크를 남겨 주세요. (선택 사항)
  placeholder: 관련 자료나 링크를 입력하세요.