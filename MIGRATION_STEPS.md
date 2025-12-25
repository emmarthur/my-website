# Migration Steps for i18n

## Quick Migration Script

Run these commands to move your pages:

```bash
# Create [locale] directory
mkdir -p src/app/[locale]

# Move pages (Windows PowerShell)
Move-Item src/app/page.tsx src/app/[locale]/page.tsx
Move-Item src/app/career src/app/[locale]/career
Move-Item src/app/hobbies src/app/[locale]/hobbies
Move-Item src/app/relationships src/app/[locale]/relationships
Move-Item src/app/thoughts src/app/[locale]/thoughts
Move-Item src/app/media src/app/[locale]/media

# Keep test-api if you want, or delete it
# Remove-Item -Recurse src/app/test-api
```

## After Migration

1. Update `src/app/[locale]/page.tsx` to use translations:
   ```tsx
   'use client'
   import { useTranslations } from 'next-intl'
   import { Link } from '@/i18n/routing'
   
   export default function Home() {
     const t = useTranslations('home')
     // Use t('title'), t('subtitle'), etc.
   }
   ```

2. Update all Link imports in moved pages:
   - Change: `import Link from 'next/link'`
   - To: `import { Link } from '@/i18n/routing'`

3. Update pathname hooks:
   - Change: `import { usePathname } from 'next/navigation'`
   - To: `import { usePathname } from '@/i18n/routing'`

4. Test: Visit `http://localhost:3000/en/` or `http://localhost:3000/es/`

## Note

The old `src/app/layout.tsx` will be replaced by `src/app/[locale]/layout.tsx`. The API routes in `src/app/api/` stay at the root level (they don't need locale).

