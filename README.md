To-Do 

Настройка файловой структуры проекта
Настройка SCSS
Настройка Redux
Создать базовые компоненты
Создать компоненты для отображения мест
Настроить страницы
Настроить API маршруты
Настроить Drizzle ORM
Интеграция GSAP
Настройка Jest и RTL
Написание тестов для компонентов
Стилизация компонентов
Деплой проекта на Vercel
Оптимизация и улучшение UX/UI
Добавление дополнительных функций

/japan-guide
  - /app
    - /api
      - /places
        - route.ts
    - /users
      - /search
        - page.tsx
      - page.tsx
    - layout.tsx
    - page.tsx
  - /components
    - /Layout
      - Layout.tsx
      - Layout.module.scss
    - /Header
      - Header.tsx
      - Header.module.scss
    - /Footer
      - Footer.tsx
      - Footer.module.scss
    - /PlacesList
      - PlacesList.tsx
      - PlacesList.module.scss
    - /PlaceDetails
      - PlaceDetails.tsx
      - PlaceDetails.module.scss
  - /styles
    - /partials
      - _variables.scss
      - _mixins.scss
      - _base.scss
    - main.scss
  - /public
    - /images
      - nara.jpg
  - /features
    - places
      - placesSlice.ts
  - /utils
    - helpers.ts
    - constants.ts
  - /hooks
    - useCustomHook.ts
  - /lib
    - db.ts
  - /__tests__
    - Layout.test.tsx
    - Header.test.tsx
    - Footer.test.tsx
    - PlacesList.test.tsx
    - PlaceDetails.test.tsx
  - drizzle.config.js
  - drizzle.ts
  - jest.config.js
  - jest.setup.js
  - tsconfig.json
  - package.json
  - store.ts
