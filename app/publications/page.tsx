export const dynamic = 'force-static';
import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { publications, type PublicationCategory } from '@/lib/publications';
import { preprints } from '@/lib/preprints';
export const metadata: Metadata = { title: 'Publications', description: 'Published papers and current manuscripts by Youngjae Cha on well-being, culture, and social ecology, with available abstracts and preprints.' };
export default function Publications() {
  const groups: { id: PublicationCategory; title: string }[] = [
    { id: 'wellbeing', title: 'Well-being & the good life' },
    { id: 'ecology', title: 'Social ecology & culture' },
    { id: 'cognition', title: 'Social cognition & identity' },
  ];
  return <main id="main-content">
    <header className="page-heading"><p className="eyebrow">Publications</p><h1>Papers &amp; current work</h1><p>Research on well-being, culture, and the social environments people live in.</p><div className="text-links"><a href="#work-in-progress">Current manuscripts</a><a href="/research/">Research overview</a><a href="https://orcid.org/0000-0002-2194-1788">ORCID</a></div></header>
    {groups.map(group => <section className="section publications-group" key={group.id} aria-labelledby={group.id}><h2 id={group.id}>{group.title}</h2>
      {publications.filter(p => p.category === group.id).map(p => <article className="publication" key={p.title}>
        <h3>{p.doi ? <a className="publication-title" href={p.doi} target="_blank" rel="noopener noreferrer">{p.title}<ExternalLink aria-hidden="true" /></a> : p.title}</h3>
        <p className="authors">{p.authors.split(/(Cha, Y\.(?: J\.)?)/g).map((part, index) => /^Cha, Y\.(?: J\.)?$/.test(part) ? <span className="self-author" key={index}>{part}</span> : part)} ({p.year}).</p><p className="journal"><em>{p.journal}</em>{p.note && <span className="publication-note"> · {p.note}</span>}</p>
      </article>)}
    </section>)}
    <section className="section preprints-section" aria-labelledby="work-in-progress"><h2 id="work-in-progress">Work in progress</h2>
      {preprints.map(p => <article className="publication preprint" id={p.id} key={p.id}>
        <h3>{p.title}</h3>
        {p.previousTitle && <p className="publication-note">Previously titled <cite>{p.previousTitle}</cite>.</p>}
        <p className="authors">{p.authors.split(/(Cha, Y\.(?: J\.)?)/g).map((part, index) => /^Cha, Y\.(?: J\.)?$/.test(part) ? <span className="self-author" key={index}>{part}</span> : part)}</p>
        <p className="journal"><em>{p.status}</em></p>
        {(p.abstract || p.preprint) && <div className="preprint-actions">
          {p.abstract && <details className="abstract-details"><summary>Abstract</summary><p>{p.abstract}</p></details>}
          {p.preprint && <a href={p.preprint} target="_blank" rel="noopener noreferrer" aria-label={`Preprint: ${p.title}`}>Preprint <ExternalLink aria-hidden="true" /></a>}
        </div>}
      </article>)}
      <p className="preprints-note">My current projects examine psychological richness and exploration, division of labor and curiosity, economic inequality and occupational aspirations, urban places, and language-model steering.</p>
      <a href="/research/">Read about the research</a>
    </section>
  </main>;
}
