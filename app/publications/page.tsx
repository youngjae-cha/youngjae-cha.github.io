export const dynamic = 'force-static';
import type { Metadata } from 'next';
import { publications } from '@/lib/publications';
export const metadata: Metadata = { title: 'Publications', description: 'Published work by Youngjae Cha on well-being, culture, and social ecology, with links to the journal articles.' };
export default function Publications() {
  const years = [...new Set(publications.map(p => p.year))];
  return <main id="main-content">
    <header className="page-heading"><p className="eyebrow">Publications</p><h1>Published work</h1><p>Research on well-being, culture, and the social environments people live in.</p><div className="text-links"><a href="/research/">Current research</a><a href="https://orcid.org/0000-0002-2194-1788">ORCID</a></div></header>
    {years.map(year => <section className="section" key={year} aria-labelledby={'year-' + year}><h2 id={'year-' + year}>{year}</h2>
      {publications.filter(p => p.year === year).map(p => <article className="publication" key={p.doi}>
        {p.note && <p className="meta">{p.note}</p>}
        <h3><a href={p.doi}>{p.title}</a></h3>
        <p className="authors">{p.authors}</p><p className="journal"><em>{p.journal}</em></p>
        <div className="research-links"><a href={p.doi}>Journal article <span aria-hidden="true">↗</span></a></div>
      </article>)}
    </section>)}
    <section className="section prose"><h2>Work in progress</h2><p>My current projects examine psychological richness and exploration, division of labor and curiosity, economic inequality and occupational aspirations, urban places, and language-model steering.</p><a href="/research/">Read about the research</a></section>
  </main>;
}
