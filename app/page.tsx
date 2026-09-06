export const dynamic = 'force-static';
import { ArrowRight, CircleUserRound, CodeXml, ExternalLink, Mail } from 'lucide-react';
import Image from 'next/image';
import ResearchDemos from '@/components/research-demos';
import ResearchHighlights from '@/components/research-highlights';
export default function Home() {
  return (
    <main id="main-content">
      <section className="intro home-intro">
        <div className="hero-copy">
        <p className="eyebrow">Worth exploring</p>
        <h1>I study an overlooked part of well-being: the value of <em>curiosity</em> and <span>exploration.</span></h1>
        <p className="intro-detail">I am a Ph.D. student in psychology at the University of Chicago, working with Shigehiro Oishi. I study a life of learning new things: what it offers, what constrains it, and what expands it. My research connects these questions to the division of labor, economic inequality, and the places and conversations people encounter.</p>
        <a className="action-link story-link" href="/about/">How I came to these questions<ArrowRight aria-hidden="true" /></a>
        <div className="text-links"><a className="action-link" href="mailto:yjcha@uchicago.edu"><Mail aria-hidden="true" />Email</a><a className="action-link" href="https://github.com/youngjae-cha" target="_blank" rel="noopener noreferrer"><CodeXml aria-hidden="true" />GitHub</a><a className="action-link" href="https://orcid.org/0000-0002-2194-1788" target="_blank" rel="noopener noreferrer"><CircleUserRound aria-hidden="true" />ORCID</a></div>
        </div>
        <div className="hero-photo" aria-hidden="true"><Image unoptimized priority src="/images/campus-canopy.webp" alt="" width={1600} height={1200} sizes="100vw" /></div>
      </section>
      <ResearchHighlights />
      <ResearchDemos />
      <section className="section" aria-labelledby="selected-title">
        <div className="section-top"><h2 id="selected-title">Selected publications</h2><a className="action-link" href="/publications/">All publications<ArrowRight aria-hidden="true" /></a></div>
        <div className="selected-list">
          <article className="selected-paper"><p className="selected-journal">PNAS</p><div><h3><a className="publication-title" href="https://doi.org/10.1073/pnas.2425193122" target="_blank" rel="noopener noreferrer">Gratitude interventions across cultures<ExternalLink aria-hidden="true" /></a></h3><p>A meta-analysis examining gratitude interventions and well-being.</p></div></article>
          <article className="selected-paper"><p className="selected-journal">PNAS Nexus</p><div><h3><a className="publication-title" href="https://doi.org/10.1093/pnasnexus/pgac224" target="_blank" rel="noopener noreferrer">Income inequality and national happiness<ExternalLink aria-hidden="true" /></a></h3><p>How economic conditions relate to the association between money and happiness.</p></div></article>
        </div>
      </section>
    </main>
  );
}
