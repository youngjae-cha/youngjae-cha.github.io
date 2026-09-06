export const dynamic = 'force-static';
import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { publications, type PublicationCategory } from '@/lib/publications';
export const metadata: Metadata = { title: 'Publications', description: 'Published work by Youngjae Cha on well-being, culture, and social ecology, with links to the journal articles.' };
export default function Publications() {
  const groups: { id: PublicationCategory; title: string }[] = [
    { id: 'wellbeing', title: 'Well-being & the good life' },
    { id: 'ecology', title: 'Social ecology & culture' },
    { id: 'cognition', title: 'Social cognition & identity' },
  ];
  return <main id="main-content">
    <header className="page-heading"><p className="eyebrow">Publications</p><h1>Published work</h1><p>Research on well-being, culture, and the social environments people live in.</p><div className="text-links"><a href="/research/">Current research</a><a href="https://orcid.org/0000-0002-2194-1788">ORCID</a></div></header>
    {groups.map(group => <section className="section publications-group" key={group.id} aria-labelledby={group.id}><h2 id={group.id}>{group.title}</h2>
      {publications.filter(p => p.category === group.id).map(p => <article className="publication" key={p.doi}>
        <h3><a className="publication-title" href={p.doi} target="_blank" rel="noopener noreferrer">{p.title}<ExternalLink aria-hidden="true" /></a></h3>
        <p className="authors">{p.authors.split(/(Cha, Y\.(?: J\.)?)/g).map((part, index) => /^Cha, Y\.(?: J\.)?$/.test(part) ? <span className="self-author" key={index}>{part}</span> : part)}</p><p className="journal"><em>{p.journal}</em>{p.note && <span className="publication-note"> · {p.note}</span>}</p>
      </article>)}
    </section>)}
    <section className="section prose"><h2>Work in progress</h2><p>My current projects examine psychological richness and exploration, division of labor and curiosity, economic inequality and occupational aspirations, urban places, and language-model steering.</p><a href="/research/">Read about the research</a></section>
  </main>;
}
