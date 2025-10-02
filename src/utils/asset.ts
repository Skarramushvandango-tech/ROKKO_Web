export function asset(p: string) {
  const base = import.meta.env.BASE_URL || "/";
  return base + p.replace(/^\/+/, "");
}
