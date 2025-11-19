# Архитектура проекта

Документация обновленной структуры loom-landing.

## Обзор изменений

### 1. API клиент для Loom Content

Создан полнофункциональный TypeScript клиент для работы с Loom Content API.

**Структура:**
```
src/api/
├── client.ts              # Базовый HTTP клиент (обертка над Fetch API)
├── loomContentClient.ts   # Клиент Loom Content API с 6 методами
├── types.ts               # TypeScript типы для всех запросов/ответов
├── errors.ts              # Кастомные классы ошибок
├── index.ts               # Barrel exports
└── README.md              # Подробная документация API
```

**Доступные методы:**
- `generatePublicationText` - генерация текста публикации
- `regeneratePublicationText` - регенерация текста с промптом
- `generatePublicationImage` - генерация изображения
- `transcribeAudio` - транскрибация аудио в текст
- `editImage` - редактирование изображения через AI
- `combineImages` - объединение нескольких изображений

### 2. Реструктуризация секций

Каждая секция теперь находится в отдельной папке для лучшей изоляции и масштабируемости.

**Было:**
```
src/components/sections/
├── HeroSection.tsx
├── FeaturesSection.tsx
└── ...
```

**Стало:**
```
src/components/sections/
├── Hero/
│   ├── HeroSection.tsx
│   ├── HeroSection.module.css
│   └── index.ts
├── Features/
│   ├── FeaturesSection.tsx
│   ├── FeaturesSection.module.css
│   └── index.ts
├── Benefits/
├── MicroJobs/
├── PainPoints/
├── Objections/
├── TryNow/
├── FinalCTA/
└── index.ts              # Barrel export всех секций
```

**Преимущества:**
- Изолированность - каждая секция в своей папке
- Масштабируемость - легко добавлять подкомпоненты, хуки, типы
- Организация - стили и логика рядом с компонентом
- Чистые импорты через barrel exports

### 3. Конфигурация окружения

Добавлена типизированная работа с переменными окружения.

```
src/config/
└── env.ts                # Типизированный доступ к env переменным

.env                      # Приватные настройки (в .gitignore)
.env.example              # Шаблон для разработчиков
```

**Использование:**
```typescript
import { env } from '@/config/env';

const apiUrl = env.apiBaseUrl;  // Типизировано и валидировано
```

### 4. Утилиты для работы с файлами

```
src/utils/
└── formData.ts           # Утилиты для FormData, файлов, валидации
```

**Доступные утилиты:**
- `isImageFile()` - проверка типа изображения
- `isAudioFile()` - проверка аудио файла
- `validateFileSize()` - проверка размера
- `formatFileSize()` - форматирование размера
- `readFileAsDataURL()` - чтение файла как Data URL
- `readFileAsArrayBuffer()` - чтение как ArrayBuffer

### 5. Path Aliases

Настроены удобные алиасы для импортов в TypeScript и Vite.

**Доступные алиасы:**
```typescript
@/*         -> ./src/*
@/api       -> ./src/api
@/components -> ./src/components
@/sections  -> ./src/components/sections
@/ui        -> ./src/components/ui
@/utils     -> ./src/utils
@/config    -> ./src/config
```

**Примеры использования:**
```typescript
// Вместо: import { Button } from '../../../components/ui'
import { Button } from '@/ui';

// Вместо: import { env } from '../../config/env'
import { env } from '@/config';

// Вместо: import { LoomContentClient } from '../../../api/loomContentClient'
import { LoomContentClient } from '@/api';
```

## Итоговая структура проекта

```
loom-landing/
├── src/
│   ├── api/                      # API клиент
│   │   ├── client.ts
│   │   ├── loomContentClient.ts
│   │   ├── types.ts
│   │   ├── errors.ts
│   │   ├── index.ts
│   │   └── README.md
│   │
│   ├── components/
│   │   ├── ui/                   # UI компоненты
│   │   │   ├── AnimatedSection.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Section.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── sections/             # Секции лендинга
│   │       ├── Hero/
│   │       ├── Features/
│   │       ├── Benefits/
│   │       ├── MicroJobs/
│   │       ├── PainPoints/
│   │       ├── Objections/
│   │       ├── TryNow/
│   │       ├── FinalCTA/
│   │       └── index.ts
│   │
│   ├── config/                   # Конфигурация
│   │   └── env.ts
│   │
│   ├── utils/                    # Утилиты
│   │   └── formData.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── .env                          # Переменные окружения (не в git)
├── .env.example                  # Шаблон переменных
├── .gitignore                    # Обновлен для .env
├── tsconfig.app.json             # Path aliases настроены
├── vite.config.ts                # Path aliases настроены
└── package.json
```

## Как использовать

### Создание нового API клиента

```typescript
import { LoomContentClient } from '@/api';
import { env } from '@/config';

const client = new LoomContentClient(env.apiBaseUrl);

// Использование методов
const result = await client.generatePublicationText(1, "Текст");
```

Подробнее см. `src/api/README.md`

### Добавление новой секции

1. Создайте папку в `src/components/sections/NewSection/`
2. Добавьте файлы:
   - `NewSection.tsx` - компонент
   - `NewSection.module.css` - стили (опционально)
   - `index.ts` - barrel export

```typescript
// index.ts
export { NewSection } from './NewSection';
```

3. Добавьте экспорт в `src/components/sections/index.ts`:

```typescript
export { NewSection } from './NewSection';
```

4. Используйте в App.tsx:

```typescript
import { NewSection } from '@/sections';
```

### Работа с файлами

```typescript
import { isImageFile, validateFileSize } from '@/utils/formData';
import { LoomContentClient } from '@/api';

const client = new LoomContentClient(env.apiBaseUrl);

// Валидация файла
if (isImageFile(file) && validateFileSize(file, 10 * 1024 * 1024)) {
  const result = await client.generatePublicationImage({
    categoryId: 1,
    publicationText: "Текст",
    textReference: "Референс",
    imageFile: file
  });
}
```

## Best Practices

### 1. Используйте path aliases
```typescript
// Good
import { Button } from '@/ui';
import { LoomContentClient } from '@/api';

// Bad
import { Button } from '../../../components/ui/Button';
```

### 2. Обрабатывайте ошибки API
```typescript
import { InsufficientBalanceError } from '@/api';

try {
  await client.generatePublicationText(1, "text");
} catch (error) {
  if (error instanceof InsufficientBalanceError) {
    // Показать пользователю сообщение о пополнении баланса
  }
}
```

### 3. Используйте barrel exports
```typescript
// Good - импорт через barrel export
import { HeroSection, FeaturesSection } from '@/sections';

// Bad - прямой импорт из файла
import { HeroSection } from '@/sections/Hero/HeroSection';
```

### 4. Типизируйте переменные окружения
```typescript
// Good
import { env } from '@/config';
const url = env.apiBaseUrl;  // Типизировано

// Bad
const url = import.meta.env.VITE_API_BASE_URL;  // Не типизировано
```

## Дальнейшее развитие

Возможности для расширения:

1. **Добавление хуков** - можно создать кастомные хуки для работы с API:
   ```
   src/hooks/
   ├── useLoomContent.ts
   └── usePublicationGenerator.ts
   ```

2. **Расширение секций** - добавление подкомпонентов в секции:
   ```
   sections/TryNow/
   ├── TryNowSection.tsx
   ├── components/
   │   ├── DemoForm.tsx
   │   └── ResultDisplay.tsx
   ├── hooks/
   │   └── useDemoForm.ts
   └── index.ts
   ```

3. **State management** - при необходимости добавить Zustand/Redux:
   ```
   src/store/
   ├── loomContentStore.ts
   └── index.ts
   ```

4. **Тестирование** - добавить unit и integration тесты:
   ```
   src/api/__tests__/
   ├── loomContentClient.test.ts
   └── client.test.ts
   ```
