import { preprints } from '@/lib/preprints';

export default function ManuscriptLinks({ ids }: { ids: string[] }) {
  return <div className="related-work">
    <h3>Current manuscripts</h3>
    <ul>{ids.map(id => {
      const paper = preprints.find(p => p.id === id);
      return paper ? <li key={id}><cite><a href={`/publications/#${id}`}>{paper.title}</a></cite></li> : null;
    })}</ul>
  </div>;
}
