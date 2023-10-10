```
yarn
yarn dev
```

[예외처리 리스트]
- store에서 이미 items에 존재하는 assets을 선택할 경우, JavaScript 객체의 키에 해당하는 item.name이 중복해서 존재하게 되어서, 여러 개가 있을 경우 마지막으로 나타나는 아이템만 저장되고 이전 아이템은 덮어쓰기가 되는 점 해결

- Vite와 JavaScript 간의 호환 문제 해결
    - CORS 문제 해결 필요
        - axios.defaults.withCredentials = true;
        - 위 코드는 특정 CORS를 필요로 하나, 서버 상은 와일드카드('*') 사용 중 => conflict
        - 위 코드를 지우면 해결

- Tailwind css 문제로 인한 button 표시가 안 됨

- TagRoom을 별도의 파일로

- TagRoom MainPage ScrollControl 코드 변경

- Store.jsx 이동 범위 한정 코드 추가