# Avelisse Labs LLC Website

Production-ready prerelease company website for `avelisselabs.com`, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and reusable components.

## Run Locally

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

The current build uses prerelease form handlers that validate submissions and return success responses without sending data to a third-party provider. Wire the API routes to an email/newsletter service when those credentials are available.
