# 프로젝트 지침

홈페이지 클론 코딩 응용

## 스타일 관련

스타일은 D:\dev\workspace\react\rian\src\styles\ 디렉토리 하위에 보관되어있음

텍스트는 D:\dev\workspace\react\rian\src\styles\common.js 을 참고 하여 적절한 텍스트를 골라서 쓰기

컴포넌트 스타일 디렉토리 파일 내에 있는 텍스트 스타일 사용 (스타일 컴포넌트 정의 시 | 특히 텍스트 스타일, 색상 등은 하드코딩 금지)

- D:\dev\workspace\react\rian\src\styles\theme.js
- D:\dev\workspace\react\rian\src\styles\common.js

### 스타일 컴포넌트 작성 시 재사용성 가이드

**스타일 컴포넌트 작성 전 필수 확인:**
1. `src/styles/common.js` 에서 Flex 관련 mixin 확인 후 재사용
   - `flexCenter`, `flexCenterColumn`, `flexBetweenRow` 등의 mixin 우선 사용
   - 완벽히 동일하지 않더라도 비슷하면 재사용

2. `src/styles/common.js` 에서 Typography 관련 mixin 확인 후 재사용
   - `h1Bold`, `h9Medium`, `h10Regular` 등의 mixin 우선 사용
   - 폰트 사이즈, 굵기가 완벽히 동일하지 않더라도 비슷하면 재사용

3. `src/styles/theme.js` 에서 색상 및 디자인 토큰 확인 후 재사용
   - `theme.PALETTE` (primary, secondary, white, black 등)
   - `theme.TEXT_COLOR` (basic, primary, warning 등)
   - `theme.GRAYSCALE` (0~10)
   - `theme.BORDER_RADIUS` (card: 8px 등)
   - **하드코딩 금지** (#333, #999 등 색상값 직접 입력 금지)

4. Theme 값 접근 방식
   - **동적 접근** `${({ theme }) => theme.PALETTE.black}` 사용 (테마 변경 시 반영)
   - static import는 테마 변경이 반영되지 않으므로 금지

5. Card 컴포넌트 공통 스타일
   - `src/constant/cardStyle.js` 에서 카드 컴포넌트 공통 스타일 재사용
   - `border-radius`, `box-shadow` 등 card UI 요소의 공통 스타일 정의
   - 카드 스타일이 필요할 때 `import { cardStyle } from "../../../constant/cardStyle"` 후 `${cardStyle}` 형태로 사용

### 스타일 컴포넌트 Props Interpolation

Props Interpolation - styled-components에서 ${} 문법으로 props를 동적 스타일 값에 전달하는 방식 사용해야함. Transient Props($ 접두사)로 DOM 오염 방지.
