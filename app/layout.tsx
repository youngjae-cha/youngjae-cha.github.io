import type { Metadata } from 'next';
import Navigation from '@/components/navigation';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://youngjaecha.com'),
  title: { default: 'Youngjae Cha | Psychology', template: '%s | Youngjae Cha' },
  description: 'Youngjae Cha studies learning, exploration, and the good life, and the cultural and social conditions that shape them. Ph.D. student in psychology at the University of Chicago.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div className="site-shell">
      <header className="site-header"><a className="wordmark" href="/">Youngjae Cha</a><Navigation /></header>
      {children}
      <footer className="site-footer"><p>Youngjae Cha <span>·</span> University of Chicago</p><div className="footer-links"><a href="mailto:yjcha@uchicago.edu">Email</a><a href="https://github.com/youngjae-cha">GitHub</a><a href="https://orcid.org/0000-0002-2194-1788">ORCID</a></div></footer>
    </div>
  </body></html>;
}
