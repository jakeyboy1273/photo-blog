export function getCleanSlug(id: string): string {
  return id.replace(/\/index$/, "").replace(/\.(yaml|yml|json|md|mdx)$/, "");
}
