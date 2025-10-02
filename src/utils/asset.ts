// src/utils/asset.ts
export function asset(p: string) {
  // import.meta.env.BASE_URL ist in Vite die korrekte Basis (hier: /ROKKO_Web/)
  const base = import.meta.env.BASE_URL || '/';
  // führenden Slash entfernen, damit base + pfad sauber concatet
  return base + p.replace(/^\/+/, '');
}
