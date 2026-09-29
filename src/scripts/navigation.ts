import { captureDisclosures, restoreDisclosures } from './disclosures.ts';
import { base } from '../data/base.ts';
import { routeNodes } from '../data/nodes.ts';
export type Crumb = { path: string; title: string };
export function safePath(path: unknown): path is string {
  return (
    typeof path === 'string' &&
    path.startsWith(base + '/') &&
    /^\/(zh-cn|en)\//.test(path.slice(base.length)) &&
    path.length < 1800 &&
    !/[\\\r\n]/.test(path)
  );
}
export function readTrail(raw: string | null): Crumb[] {
  try {
    const parsed = JSON.parse(raw || '[]');
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((c) => c && safePath(c.path) && typeof c.title === 'string')
      .slice(-8)
      .map((c) => ({ path: c.path, title: c.title.slice(0, 90) }));
  } catch {
    return [];
  }
}
export function cleanPath(input: URL) {
  const u = new URL(input);
  u.searchParams.delete('via');
  return u.pathname + u.search + u.hash;
}
export function withTrail(path: string, trail: Crumb[], origin: string) {
  const u = new URL(path, origin);
  u.searchParams.delete('via');
  if (trail.length) u.searchParams.set('via', JSON.stringify(trail.slice(-8)));
  return u.pathname + u.search + u.hash;
}
export function initNavigation() {
  const viewKey = 'vibe-view:' + cleanPath(new URL(location.href));
  const saveView = () => {
    try {
      sessionStorage.setItem(
        viewKey,
        JSON.stringify({
          y: scrollY,
          disclosures: captureDisclosures(
            document.querySelectorAll<HTMLDetailsElement>('main details'),
          ),
        }),
      );
    } catch {
      /* View state is optional; storage restrictions must not block navigation. */
    }
  };
  addEventListener('pagehide', saveView);
  const restoreView = () => {
    try {
      const view = JSON.parse(sessionStorage.getItem(viewKey) || 'null');
      if (view && !location.hash) {
        restoreDisclosures(
          document.querySelectorAll<HTMLDetailsElement>('main details'),
          view.disclosures,
        );
        if (
          typeof view.y === 'number' &&
          Number.isFinite(view.y) &&
          view.y >= 0
        )
          requestAnimationFrame(() => scrollTo(0, view.y));
      }
    } catch {
      /* Ignore unreadable view state; retain page defaults. */
    }
  };
  // Restore after all page modules have applied their initial disclosure defaults.
  if (document.readyState === 'complete') restoreView();
  else window.addEventListener('load', restoreView, { once: true });
  const current = new URL(location.href);
  const trail = readTrail(current.searchParams.get('via'));
  const back = document.querySelector<HTMLAnchorElement>('[data-entry-back]');
  const last = trail.at(-1);
  const relatedNode = routeNodes.find(
    (n) => n.id === current.searchParams.get('node'),
  );
  if (back && !last && relatedNode) {
    back.href = `${base}/${document.documentElement.lang === 'en' ? 'en' : 'zh-cn'}/node/${relatedNode.id}/`;
    back.textContent =
      (document.documentElement.lang === 'en'
        ? '← Return to: '
        : '← 返回节点：') +
      relatedNode.title[document.documentElement.lang === 'en' ? 1 : 0];
  }
  if (back && last) {
    back.href = withTrail(last.path, trail.slice(0, -1), location.origin);
    back.textContent =
      (document.documentElement.lang === 'en' ? '← Back to ' : '← 返回：') +
      last.title;
  }
  // URLs carry the route in this tab: reloads, direct links and multiple tabs do not share mutable history.
  document.addEventListener(
    'click',
    (event) => {
      const a = (event.target as Element).closest<HTMLAnchorElement>('a[href]');
      if (!a || a.hasAttribute('download') || a.matches('[data-entry-back]'))
        return;
      saveView();
      const destination = new URL(a.href, location.href);
      if (
        destination.origin !== location.origin ||
        !safePath(destination.pathname)
      )
        return;
      if (destination.pathname === location.pathname && destination.hash)
        return;
      if (a.closest('.languages')) {
        const viewed =
          document.querySelector<HTMLElement>('[data-learning]')?.dataset
            .viewedStep;
        destination.hash = viewed ? `#${viewed}` : location.hash;
        for (const key of ['node', 'lesson', 'q', 'category', 'essentials']) {
          const value = new URLSearchParams(location.search).get(key);
          if (value) destination.searchParams.set(key, value);
        }
        const lang = destination.pathname.slice(base.length).split('/')[1];
        a.href = withTrail(
          cleanPath(destination),
          trail.map((c) => ({
            ...c,
            path:
              base +
              c.path.slice(base.length).replace(/^\/(zh-cn|en)\//, `/${lang}/`),
          })),
          location.origin,
        );
        return;
      }
      const target = cleanPath(destination);
      const existing = trail.findIndex((c) => c.path === target);
      const next =
        existing >= 0
          ? trail.slice(0, existing)
          : [
              ...trail,
              {
                path: cleanPath(new URL(location.href)),
                title:
                  document
                    .querySelector('h1')
                    ?.textContent?.trim()
                    .slice(0, 90) || 'Vibe Guide',
              },
            ];
      a.href = withTrail(target, next, location.origin);
    },
    true,
  );
}
