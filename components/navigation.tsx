'use client';
import { usePathname } from 'next/navigation';
const links = [['/', 'Home'], ['/research/', 'Research'], ['/publications/', 'Publications'], ['/teaching/', 'Teaching'], ['/reading/', 'Reading'], ['/about/', 'About & Contact']];
export default function Navigation() {
  const pathname = usePathname();
  return <nav aria-label="Main navigation">{links.map(([href, label]) => <a key={href} href={href} aria-current={pathname.replace(/\/$/, '') === href.replace(/\/$/, '') ? 'page' : undefined}>{label}</a>)}</nav>;
}
