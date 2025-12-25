# Internationalization (i18n) Setup Guide

## Overview

Your website now supports **8 languages**:
- 🇺🇸 English (en) - Default
- 🇪🇸 Spanish (es)
- 🇫🇷 French (fr)
- 🇩🇪 German (de)
- 🇸🇦 Arabic (ar)
- 🇨🇳 Chinese (zh)
- 🇮🇳 Hindi (hi)
- 🇰🇪 Swahili (sw)

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Restart your dev server:**
   ```bash
   npm run dev
   ```

## How It Works

### URL Structure
- English: `http://localhost:3000/en/` or `http://localhost:3000/`
- Spanish: `http://localhost:3000/es/`
- French: `http://localhost:3000/fr/`
- etc.

### Language Switcher
A language switcher component is available in the navigation. Users can click to switch languages.

## Migration Required

**Important**: You need to move your pages into the `[locale]` folder structure:

### Current Structure:
```
src/app/
  ├── page.tsx
  ├── career/
  ├── hobbies/
  └── ...
```

### New Structure (Required):
```
src/app/
  ├── [locale]/
  │   ├── layout.tsx (already created)
  │   ├── page.tsx (move from root)
  │   ├── career/
  │   ├── hobbies/
  │   └── ...
  └── api/ (stays at root)
```

## Quick Migration Steps

1. **Create the [locale] folder structure:**
   ```bash
   mkdir -p src/app/[locale]
   ```

2. **Move pages:**
   - Move `src/app/page.tsx` → `src/app/[locale]/page.tsx`
   - Move `src/app/career/` → `src/app/[locale]/career/`
   - Move `src/app/hobbies/` → `src/app/[locale]/hobbies/`
   - Move `src/app/relationships/` → `src/app/[locale]/relationships/`
   - Move `src/app/thoughts/` → `src/app/[locale]/thoughts/`
   - Move `src/app/media/` → `src/app/[locale]/media/`
   - **Keep** `src/app/api/` at root (API routes don't need locale)

3. **Update imports in moved files:**
   - Change `Link` imports to use `@/i18n/routing` instead of `next/link`
   - Add `useTranslations()` hook for translated text

## Using Translations in Components

### Example: Home Page

```tsx
'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export default function Home() {
  const t = useTranslations('home')
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
    </div>
  )
}
```

### Example: Navigation

```tsx
'use client'

import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/routing'

export function Navigation() {
  const t = useTranslations('nav')
  const pathname = usePathname()
  
  return (
    <nav>
      <Link href="/">{t('home')}</Link>
      <Link href="/career">{t('career')}</Link>
      {/* ... */}
    </nav>
  )
}
```

## Adding New Translations

1. **Add to all language files** in `messages/` folder:
   - `messages/en.json`
   - `messages/es.json`
   - `messages/fr.json`
   - etc.

2. **Use nested structure:**
   ```json
   {
     "section": {
       "key": "Value"
     }
   }
   ```

3. **Access in component:**
   ```tsx
   const t = useTranslations('section')
   <p>{t('key')}</p>
   ```

## Language Switcher Component

The `LanguageSwitcher` component is ready to use. Add it to your Navigation:

```tsx
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher'

// In Navigation component
<LanguageSwitcher />
```

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ⚠️ **Move pages to `[locale]` folder** (see migration steps above)
3. ✅ Update components to use `useTranslations()`
4. ✅ Add LanguageSwitcher to Navigation
5. ✅ Test language switching

## Troubleshooting

**Error: "Cannot find module 'next-intl/server'"**
- Run `npm install` to install dependencies

**Pages not showing translations:**
- Make sure pages are in `src/app/[locale]/` folder
- Check that you're using `useTranslations()` hook
- Verify translation keys exist in JSON files

**Language switcher not working:**
- Ensure middleware is set up (already done)
- Check that routes are using `Link` from `@/i18n/routing`

## Adding More Languages

1. Add language code to `src/i18n/routing.ts`:
   ```ts
   locales: ['en', 'es', 'fr', 'de', 'ar', 'zh', 'hi', 'sw', 'new-lang']
   ```

2. Create translation file: `messages/new-lang.json`

3. Add to LanguageSwitcher component

4. Update middleware matcher if needed

