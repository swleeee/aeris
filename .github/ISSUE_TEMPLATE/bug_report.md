name: "🐛 버그 리포트"
description: "발생한 버그에 대한 상세 내용을 작성해 주세요."
labels: ["bug"]
body:

- type: textarea
  attributes:
  label: 🐞 버그 설명
  description: 발견된 버그에 대한 간략한 설명을 작성해 주세요.
  placeholder: 예: 특정 버튼을 클릭할 때 페이지가 응답하지 않습니다.
  validations:
  required: true

- type: textarea
  attributes:
  label: 📋 재현 방법
  description: 버그를 재현할 수 있는 단계를 나열해 주세요.
  placeholder: 예: 1. 로그인 페이지로 이동 2. 아이디와 비밀번호 입력 3. 로그인 버튼 클릭 후 오류 발생
  validations:
  required: true

- type: textarea
  attributes:
  label: 🤔 예상 동작
  description: 정상적으로 동작했을 때의 기대 동작을 설명해 주세요.
  placeholder: 예: 로그인 버튼을 클릭하면 사용자 대시보드로 이동해야 합니다.
  validations:
  required: true

- type: textarea
  attributes:
  label: 📷 스크린샷
  description: 버그가 발생한 화면을 캡처한 스크린샷이 있다면 첨부해 주세요. (선택 사항)
  placeholder: 이미지나 스크린샷을 업로드할 수 있는 URL을 입력해 주세요.

- type: textarea
  attributes:
  label: 🖥️ 환경 정보
  description: 문제가 발생한 환경에 대한 정보를 작성해 주세요.
  placeholder: 예: macOS 11.4, Chrome 91.0.4472.114
  validations:
  required: true

- type: textarea
  attributes:
  label: 💡 추가 정보
  description: 버그와 관련된 다른 정보를 작성해 주세요. (선택 사항)
  placeholder: 추가로 알릴 내용이 있다면 여기에 작성해 주세요.
