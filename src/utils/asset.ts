// src/utils/asset.ts
export function asset(path: string) {
  const base = import.meta.env.BASE_URL ?? "/";
  return `${base}${path.replace(/^\/+/, "")}`;
}
