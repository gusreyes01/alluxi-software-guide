# Alluxi Software Guide

A dependency-light, accessible field guide for safer software design in
high-stakes workflows.

## Local development

Node.js 22 or newer is required for quality checks.

```bash
npm ci
npm run check
```

The site itself is static and contains no analytics, remote scripts, or runtime
JavaScript. Open `index.html` directly or serve the repository root with any
local HTTP server.

See [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md).
