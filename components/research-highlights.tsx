import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { researchStories } from '@/lib/research-stories';

export default function ResearchHighlights() {
  return <section className="research-highlights" aria-labelledby="research-highlights-title">
    <div className="section-top"><h2 id="research-highlights-title">Questions I’m working on</h2><a className="action-link" href="/research/">All research<ArrowRight aria-hidden="true" /></a></div>
    <div className="research-news-list">
      {researchStories.map(story => <article className="research-news-row" key={story.id}>
        <a className={'story-thumbnail' + (story.figure ? ' story-thumbnail-figure' : '')} href={'/research/#' + story.id} tabIndex={-1} aria-hidden="true"><Image unoptimized src={story.image} alt="" width={story.width} height={story.height} loading="lazy" /></a>
        <div className="story-preview"><p className="story-topic">{story.topic}</p><h3><a href={'/research/#' + story.id}>{story.title}</a></h3><p>{story.description}</p></div>
      </article>)}
    </div>
  </section>;
}
