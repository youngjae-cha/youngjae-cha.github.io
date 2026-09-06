import Image from 'next/image';
import type { ReactNode } from 'react';
import { Plus } from 'lucide-react';
import { researchStories } from '@/lib/research-stories';

export default function ResearchStory({ id, children }: { id: string; children: ReactNode }) {
  const story = researchStories.find(item => item.id === id)!;
  return <details className="research-story" id={id}>
    <summary aria-label={story.title}>
      <span className={'story-thumbnail' + (story.figure ? ' story-thumbnail-figure' : '')}><Image unoptimized src={story.image} alt={story.alt} width={story.width} height={story.height} loading="lazy" /></span>
      <div className="story-preview"><p className="story-topic">{story.topic}</p><h2>{story.title}</h2><p>{story.description}</p></div>
      <Plus className="story-toggle" aria-hidden="true" />
    </summary>
    <div className="story-full prose">{children}</div>
  </details>;
}
