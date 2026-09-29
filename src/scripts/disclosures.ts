/** Stable paths survive insertion/reordering; saved false values close defaults too. */
export function disclosureKey(detail: HTMLDetailsElement): string {
  const own =
    detail.id ||
    detail.dataset.guidedAction ||
    detail.dataset.stepSection ||
    detail.querySelector(':scope > summary')?.textContent?.trim();
  if (!own) return '';
  const parent = detail.parentElement?.closest('details');
  return (parent ? disclosureKey(parent) + '/' : '') + own;
}
export function captureDisclosures(
  details: Iterable<HTMLDetailsElement>,
): Record<string, boolean> {
  return Object.fromEntries(
    Array.from(details, (detail) => [
      disclosureKey(detail),
      detail.open,
    ]).filter(([key]) => key),
  );
}
export function restoreDisclosures(
  details: Iterable<HTMLDetailsElement>,
  saved: unknown,
) {
  if (!saved || typeof saved !== 'object' || Array.isArray(saved)) return;
  for (const detail of details) {
    const key = disclosureKey(detail);
    if (
      Object.hasOwn(saved, key) &&
      typeof (saved as Record<string, unknown>)[key] === 'boolean'
    ) {
      detail.open = (saved as Record<string, boolean>)[key];
    }
  }
}
