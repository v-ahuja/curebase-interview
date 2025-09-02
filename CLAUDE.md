# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build production application with Turbopack
- `pnpm lint` - Run ESLint
- `pnpm test` - Run Vitest tests

## Best Practices

### UI

1. For UI components, search and find the most appropriate shadcn components and download them.
2. ALWAYS use tailwindcss for styling.
3. When asked to take screenshots, use puppeteer and present them as output.
4. Use tanstack forms with zod validation for form workflows.

## Architecture Overview

This is a Next.js application using the Pages Router with PostgreSQL and Drizzle ORM:

### Tech Stack

- **Framework**: Next.js 15 with Pages Router
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Testing**: Vitest with jsdom
- **Package Manager**: pnpm

### Key Directories

- `src/pages/` - Next.js pages using Pages Router
- `src/ui/shared-components/` - Shared UI components including layout
- `src/schemas/database/` - Drizzle database schema definitions
- `src/services/database/` - Database configuration and connection
- `src/configs/drizzle/` - Drizzle Kit configuration

### Database Architecture

- Uses Drizzle ORM with PostgreSQL
- Schema defined in `src/schemas/database/db.schema.ts`
- Database connection configured in `src/services/database/db.config.ts`
- Drizzle Kit config in `src/configs/drizzle/drizzle.config.ts`
- Requires `DATABASE_URL` environment variable

### Layout System

- Uses a sidebar + main content layout pattern
- Layout wrapper in `src/ui/shared-components/layout/layout.tsx`
- Components can define `title` and `description` properties for the header
- Layout components include Header and Sidebar

### UI Components

- Use shadcn components
- Built on Radix UI primitives (Dialog, etc.)
- Uses Tailwind CSS with custom utility classes
- Component styling follows data-slot pattern for organization
- Utility function `cn()` in `src/lib/utils/utils.ts` for class merging
