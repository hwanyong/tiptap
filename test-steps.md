
## Jest Environment Setup

### jest.setup.env.js 설정
Jest 테스트 환경에서 환경 변수를 사용하기 위한 설정 파일입니다.

1. 파일 생성
```bash
touch jest.setup.env.js
```

2. 환경 변수 설정
```javascript
process.env.NEXT_PUBLIC_SUPABASE_URL = 'your-supabase-url'
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'your-anon-key'
```

3. 주의사항
- 이 파일은 민감한 정보를 포함하고 있으므로 반드시 .gitignore에 추가해야 합니다
- 실제 프로덕션 값이 아닌 테스트용 값을 사용하세요
- 팀원들과 공유할 때는 jest.setup.env.example.js 파일을 만들어 예시 형식만 공유하세요

4. Jest 설정 연동
jest.config.js 파일에 다음 설정이 포함되어 있는지 확인하세요:
```javascript
module.exports = {
  setupFiles: ['<rootDir>/jest.setup.env.js'],
  // ...other config
}
```