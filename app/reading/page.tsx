export const dynamic = 'force-static';
import type { Metadata } from 'next';
import { readingGroups } from '@/lib/readings';

export const metadata: Metadata = {
  title: 'Reading · I’m a fan of these!',
  description: 'Some of Youngjae Cha’s favorite papers, chapters, and books on social ecology, evolution, social thought, and research methods.',
};

export default function Reading() {
  return <main id="main-content">
    <header className="page-heading reading-heading">
      <p className="eyebrow">Reading</p>
      <h1>I’m a fan of these!</h1>
      <p>Some of my favorite papers, chapters, and books. They ask how our surroundings shape us, how we make sense of one another, and how to study those connections. I’ve grouped them by the questions they open up.</p>
    </header>
    <nav className="reading-index" aria-label="Reading topics">
      {readingGroups.map((group) => <a key={group.id} href={`#${group.id}`}>{group.label}</a>)}
    </nav>
    <div className="reading-groups">
      {readingGroups.map((group, index) => <section key={group.id} id={group.id} className="reading-group" aria-labelledby={`${group.id}-heading`}>
        <header className="reading-group-heading">
          <p className="eyebrow"><span aria-hidden="true">0{index + 1} · </span>{group.label}</p>
          <h2 id={`${group.id}-heading`}>{group.question}</h2>
        </header>
        <ul className="reading-list">
          {group.readings.map((reading) => <li key={reading.url}>
            <article className="reading-entry">
              <h3><a href={reading.url} target="_blank" rel="noopener noreferrer">{reading.title}</a></h3>
              <p className="reading-authors">{reading.authors}</p>
              <p className="reading-publication">{reading.publication}</p>
              <p className="reading-note">{reading.note}</p>
            </article>
          </li>)}
        </ul>
      </section>)}
    </div>
  </main>;
}
