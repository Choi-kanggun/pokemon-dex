포켓몬 도감 만들기<br />
1️⃣ 프로젝트 소개 및 목표
![image](https://github.com/user-attachments/assets/fd74d188-ed98-4e0c-817d-494d27269203)<br />

2️⃣ 컴포넌트 분리
![image](https://github.com/user-attachments/assets/cc543ead-435d-43f3-8f99-04ac39cf0fc5)<br />

3️⃣ 프로젝트 가이드
### 필수 구현사항

---

### 1. **Git 브랜치 전략 사용하기**

- **설명**: 상태 관리 방식을 단계별로 나눠 구현하는 Git 브랜치 전략을 사용합니다.
- **구체적인 요구사항**:
    - **`props-drilling` 브랜치**를 먼저 생성하여 작업합니다. 이 브랜치에서는 각 컴포넌트가 필요한 데이터를 props로 전달받아 사용하는 방식으로 상태를 관리합니다.
    - 모든 기능 구현이 완료되면, **`context` 브랜치**를 새로 만들어 Context API를 적용해 props drilling 문제를 해결하고, 상태를 전역적으로 관리합니다.
    - `props-drilling` 브랜치와 `context` 브랜치에서 각각의 구현 방식을 경험해 보고, 두 방식의 차이점을 이해합니다.

---

### 2. **페이지 라우팅 구현하기**

- **설명**: `react-router-dom`을 이용해 여러 페이지 간 이동을 설정합니다.
- **구체적인 요구사항**:
    - `Home` 페이지와 `Dex` 페이지를 라우트합니다. `Home` 페이지에서 "포켓몬 도감 시작하기" 버튼을 누르면 `Dex` 페이지로 이동하게 만듭니다.
    - `Dex` 페이지에서 포켓몬 리스트를 확인하고, 각 포켓몬 카드를 클릭하면 해당 포켓몬의 디테일 페이지로 이동할 수 있도록 합니다.
    - `react-router-dom`의 `useNavigate` 혹은 `Link` 컴포넌트를 사용하여 페이지 간 이동을 구현하세요.

---

### 3. **도감 페이지 구성하기**

- **설명**: `Dex` 페이지를 구성하여 포켓몬 리스트와 선택 기능을 구현합니다.
- **구체적인 요구사항**:
    - **컴포넌트 구분**: `Dashboard`, `PokemonList`, `PokemonCard` 세 개의 주요 컴포넌트로 페이지를 구성합니다.
    - **포켓몬 리스트 표시**: `PokemonList` 컴포넌트는 `MOCK_DATA`의 포켓몬 데이터를 받아, 각각의 포켓몬을 `PokemonCard`로 표시합니다. `PokemonCard`에는 포켓몬 이름, 이미지, 타입이 표시되며, `추가` 버튼이 포함됩니다.
    - **포켓몬 선택 기능**: `PokemonCard`의 `추가` 버튼을 클릭하면 `Dashboard`에 포켓몬이 추가됩니다. `Dashboard`에서는 선택된 포켓몬이 표시되며, 각 포켓몬에 `삭제` 버튼이 추가됩니다.
    - **최대 선택 수 제한**: 선택할 수 있는 포켓몬은 6마리로 제한하며, 이를 초과하려고 할 경우 `alert` 메시지로 사용자에게 알립니다.

---

### 4. **디테일 페이지**

- **설명**: 각 포켓몬의 상세 정보를 확인할 수 있는 디테일 페이지를 구현합니다.
- **구체적인 요구사항**:💡 **팁**: 디테일 페이지에서 리스트 페이지로 돌아가도 기존에 선택된 포켓몬 리스트가 초기화되지 않도록 하기 위해선 상태 관리가 필요하지만, 이 기능은 선택 구현 사항으로 다루고 필수 요구사항에 포함되지 않습니다. 필수 구현 사항 완료 후 선택 구현 사항으로 도전해보세요.
    - 포켓몬 ID를 `path params`로 받아와, 이를 통해 `MOCK_DATA`에서 해당 포켓몬의 상세 정보를 검색하여 표시합니다.
    - **디테일 정보 표시**: 포켓몬의 이미지, 이름, 타입, 설명을 디테일 페이지에 표시합니다.
    - **뒤로 가기 버튼**: 디테일 페이지에서 "뒤로 가기" 버튼을 추가하여 이전 페이지로 쉽게 돌아갈 수 있도록 구현합니다.

---

### 5. **알림 기능 구현**

- **설명**: 포켓몬 선택 시 중복 또는 최대 선택 수를 초과할 경우 사용자에게 알림을 제공합니다.
- **구체적인 요구사항**:
    - **중복 선택 방지**: 이미 선택된 포켓몬을 다시 선택하려 하면 `alert` 메시지로 "이미 선택된 포켓몬입니다."라는 안내를 띄웁니다.
    - **선택 수 제한 안내**: 선택된 포켓몬 수가 6개를 초과할 경우 `alert` 메시지로 "더 이상 선택할 수 없습니다."라는 안내를 띄웁니다.
    - 이러한 알림 기능을 통해 사용자 경험을 향상시킵니다.

---

### 6. **스타일링**

- **설명**: `styled-components`를 사용하여 페이지의 전반적인 스타일을 설정하고, 카드와 대시보드의 시각적 일관성을 제공합니다.
- **구체적인 요구사항**:
    - `PokemonCard`, `Dashboard` 등 주요 컴포넌트에 `styled-components`를 사용하여 스타일링합니다.
    - 포켓몬 카드와 대시보드에 적절한 여백과 색상을 적용하여 깔끔하고 보기 좋은 UI를 만듭니다.
    - 모바일과 데스크탑에서 모두 사용하기 좋도록 반응형 레이아웃을 고려합니다.

<aside>
<img src="/icons/hexagon-alternate_gray.svg" alt="/icons/hexagon-alternate_gray.svg" width="40px" />

### 선택 구현사항

---

### 1. **Redux Toolkit으로 리팩터링하기**

- **설명**: Redux Toolkit을 사용하여 상태 관리를 리팩터링하여 더욱 체계적인 중앙 상태 관리를 경험해 봅니다. 특히, 포켓몬 선택 상태를 Redux로 관리하여 Redux의 강점을 이해하고 활용할 수 있습니다.
- **구체적인 요구사항**:
    - `redux-toolkits` 브랜치를 새로 생성하고, Redux Toolkit을 설치합니다.
    - 포켓몬 선택 상태와 추가/삭제 기능을 Redux 상태로 관리합니다.
    - `useSelector`와 `useDispatch`를 활용하여 상태 구독과 액션 디스패치를 적용하고, Context API로 관리하던 상태를 Redux로 대체합니다.
    - Redux를 통해 상태 관리가 어떻게 간결해지는지 확인해보세요.

---

### 2. **디테일 페이지에 '추가' 버튼 추가하기**

- **설명**: 디테일 페이지에서 포켓몬을 대시보드에 추가할 수 있는 '추가' 버튼을 구현하여 페이지 전환 간 상태를 유지할 수 있도록 합니다.
- **구체적인 요구사항**:
    - `PokemonDetail` 페이지에 '추가' 버튼을 추가하여, 해당 버튼을 클릭 시 포켓몬이 대시보드에 추가되도록 합니다.
    - 이미 대시보드에 추가된 포켓몬이라면 '삭제' 버튼으로 변경하여 다시 삭제할 수 있도록 합니다.
    - 이 작업을 통해 페이지 전환과 상태 유지에 대해 더욱 깊이 이해할 수 있습니다.

---

### 3. **리스트 페이지의 데이터를 유지시키기**

- **설명**: 디테일 페이지에 다녀온 뒤에도 리스트 페이지에서 이전에 선택된 포켓몬 상태가 유지되도록 구현합니다.
- **구체적인 요구사항**:
    - React Router, 브라우저 스토리지(localStorage), 혹은 ContextAPI, 혹은 Redux 을 이용하여 상태관리를 사용하여 선택된 포켓몬 상태를 지속적으로 유지합니다.
    - 이 기능을 통해 상태가 유지되는 방식과 사용자 경험이 개선되는 효과를 이해해봅니다.

---

### 4. **UI 라이브러리 활용하기**

- **설명**: alert 대신 Modal이나 toast와 같은 UI 요소를 사용하여 사용자에게 더 매끄러운 피드백을 제공합니다.
- **구체적인 요구사항**:
    - alert 메시지를 Modal 또는 toast UI 요소로 대체합니다.
    - `react-toastify`, `sweetalert2`, `sonner` 등 다양한 라이브러리를 사용해보세요.
    - 라이브러리를 설치하고, 사용자 상호작용 시 직관적인 피드백을 제공하여 더 세련된 UI를 구현합니다.
</aside>

4️⃣ 브랜치 분리
![image](https://github.com/user-attachments/assets/7066f0e7-ab3f-498e-9c55-f2b5375de28c)<br />
![image](https://github.com/user-attachments/assets/45c5527a-dbaf-445a-8e59-8849e1a79adf)<br />

5️⃣ vercel 배포
![image](https://github.com/user-attachments/assets/dfd5fd9c-a703-453b-bc32-e30a637b4dd2)<br />

6️⃣ 프로젝트 시연
![bandicam2024-11-1322-08-35-538-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/9f7e3eda-2a3d-44fd-84b9-827be5e14e6f)<br />
