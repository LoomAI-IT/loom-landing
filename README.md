# Loom Landing Page

Современный, минималистичный B2B лендинг для AI-помощника Loom по созданию контента для социальных сетей.

## Технологии

- **React 19** - современная библиотека для создания пользовательских интерфейсов
- **TypeScript** - типизированный JavaScript для надежного кода
- **Vite** - быстрый сборщик и dev server
- **Framer Motion** - библиотека для плавных анимаций
- **CSS Modules** - изолированные стили компонентов
- **Lucide React** - современная библиотека иконок

## Структура проекта

```
src/
├── components/
│   ├── ui/                    # Переиспользуемые UI компоненты
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── AnimatedSection.tsx
│   └── sections/              # Секции лендинга
│       ├── HeroSection.tsx
│       ├── MicroJobsSection.tsx
│       ├── TryNowSection.tsx
│       ├── FeaturesSection.tsx
│       └── FinalCTASection.tsx
├── App.tsx                    # Главный компонент
└── index.css                  # Глобальные стили и дизайн-система
```

## Особенности

### Дизайн-система
- Современный минималистичный стиль
- CSS переменные для единообразия
- Адаптивная типографика
- Subtle тени и плавные переходы

### Анимации
- Scroll-triggered анимации с Framer Motion
- Fade-in и slide-up эффекты
- Stagger анимации для списков
- Smooth transitions

### Секции лендинга
1. **Hero** - главный экран с value proposition
2. **Micro Jobs** - 5 ключевых задач, которые решает продукт
3. **Try Now** - интерактивный виджет-демо
4. **Features** - 6 основных возможностей
5. **Final CTA** - призыв к действию

## Быстрый старт

### Установка зависимостей
```bash
npm install
```

### Запуск dev сервера
```bash
npm run dev
```

Откройте [http://localhost:5173](http://localhost:5173) в браузере.

### Сборка для продакшна
```bash
npm run build
```

### Превью продакшн сборки
```bash
npm run preview
```

## Customization

### Цветовая схема
Измените CSS переменные в `src/index.css`:

```css
:root {
  --color-primary: #0066ff;
  --color-primary-hover: #0052cc;
  --color-primary-light: #e6f0ff;
  /* ... другие цвета */
}
```

### Контент
Обновите текст в компонентах секций в `src/components/sections/`

### Добавление новых секций
1. Создайте новый компонент в `src/components/sections/`
2. Добавьте стили в CSS Module
3. Импортируйте и используйте в `App.tsx`

## Производительность

- Lazy loading для секций ниже fold
- Оптимизированные анимации (will-change, transform)
- CSS Modules для code splitting
- Минификация в продакшн сборке

## Адаптивность

- Mobile-first подход
- Breakpoints: 640px, 768px, 1024px
- Адаптивная типографика
- Touch-friendly интерфейс

## Браузерная совместимость

- Chrome (последние 2 версии)
- Firefox (последние 2 версии)
- Safari (последние 2 версии)
- Edge (последние 2 версии)

## Лицензия

MIT
