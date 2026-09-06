export const dynamic = 'force-static';
import { ArrowRight, CircleUserRound, CodeXml, ExternalLink, FileText, Mail } from 'lucide-react';
import Image from 'next/image';
import ResearchDemos from '@/components/research-demos';
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
        <div className="hero-photo"><Image unoptimized priority src="/images/campus-canopy.webp" alt="Sunlight through fresh green leaves, with blue sky and stone university buildings beyond." width={1600} height={1200} sizes="(max-width: 780px) 100vw, 38vw" /></div>
      </section>
      <section className="themes-section" aria-labelledby="questions-title">
        <div className="section-top"><h2 id="questions-title">Questions that guide my research</h2></div>
        <div className="themes-grid">
          <article className="theme"><p className="meta">01 / The good life</p><h3>What place does exploration hold in a good life?</h3><p>Learning new things, psychological richness, and what people value in their lives.</p><a className="action-link" href="/research/#good-life">Research overview<ArrowRight aria-hidden="true" /></a></article>
          <article className="theme"><p className="meta">02 / What constrains it?</p><h3>What narrows the possibilities people explore?</h3><p>The division of labor, economic inequality, and the boundaries of curiosity and aspiration.</p><a className="action-link" href="/research/#social-conditions">Research overview<ArrowRight aria-hidden="true" /></a></article>
          <article className="theme"><p className="meta">03 / What expands it?</p><h3>How can we open new opportunities for exploration?</h3><p>Third places, encounters in cities, and conversations that invite new perspectives.</p><a className="action-link" href="#atlas">Explore the Atlas<ArrowRight aria-hidden="true" /></a></article>
        </div>
      </section>
      <ResearchDemos />
      <section className="section" aria-labelledby="selected-title">
        <div className="section-top"><h2 id="selected-title">Selected publications</h2><a className="action-link" href="/publications/">All publications<ArrowRight aria-hidden="true" /></a></div>
        <div className="selected-list">
          <article className="selected-paper"><div><p className="selected-journal">PNAS</p><p className="selected-year">2025</p></div><div><h3>Gratitude interventions across cultures</h3><p>A meta-analysis examining gratitude interventions and well-being.</p></div><a className="action-link paper-link" href="https://doi.org/10.1073/pnas.2425193122" target="_blank" rel="noopener noreferrer"><FileText aria-hidden="true" />Read paper<ExternalLink aria-hidden="true" /></a></article>
          <article className="selected-paper"><div><p className="selected-journal">PNAS Nexus</p><p className="selected-year">2022</p></div><div><h3>Income inequality and national happiness</h3><p>How economic conditions relate to the association between money and happiness.</p></div><a className="action-link paper-link" href="https://doi.org/10.1093/pnasnexus/pgac224" target="_blank" rel="noopener noreferrer"><FileText aria-hidden="true" />Read paper<ExternalLink aria-hidden="true" /></a></article>
        </div>
      </section>
    </main>
  );
}
