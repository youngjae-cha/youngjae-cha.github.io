'use client';
import { useEffect } from 'react';

export default function OpenResearchHash() {
  useEffect(() => {
    function openTarget() {
      const id = window.location.hash.slice(1);
      const aliases: Record<string, string> = { 'social-conditions': 'division-of-labor', 'opening-exploration': 'places' };
      const target = document.getElementById(aliases[id] || id);
      if (target instanceof HTMLDetailsElement) {
        target.open = true;
        window.requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
      }
    }
    openTarget();
    window.addEventListener('hashchange', openTarget);
    return () => window.removeEventListener('hashchange', openTarget);
  }, []);
  return null;
}
