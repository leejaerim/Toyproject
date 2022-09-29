# ToyProject를 통해 react에 더욱 가까워 집니다.
### react-routor-dom v6
- react-router-dom v5 에서 v6로 업그레이드 됨에 따라, useHistory가 useNavigate로 변경되었습니다.
- `const navi = useNavigate(); navi('goto');` 를 통해 손쉽게 페이지 로드할 수 있습니다.

### Auth 절차
- Auth는 백엔드 fastapi로부터 jwt을 받아오며, bearer 타입 토큰으로 axios 통신의 헤더에 삽입하여 매 통신마다 인증 절차를 밟습니다.
