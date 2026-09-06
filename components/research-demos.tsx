import { ArrowRight, ExternalLink, MessagesSquare } from 'lucide-react';
import Image from 'next/image';

const atlasUrl = 'https://chicagowellbeingmap.github.io/github_pages/';
const conversationUrl = 'https://web-production-34ba2.up.railway.app/';
const atlasSteps = [
  { number: '01', label: 'Discover your good life', image: 'welcome', alt: 'Atlas welcome screen: Discover your good life, with a button to begin the assessment.' },
  { number: '02', label: 'Reflect on your well-being', image: 'assessment', alt: 'Initial well-being assessment showing My life has been happy and seven response options. No responses are selected.' },
  { number: '03', label: 'Find places to explore', image: 'map', alt: 'Chicago map showing psychologically rich places and a panel for personalized suggestions.' },
];

export default function ResearchDemos() {
  return <div className="research-demos">
    <section className="demo-panel atlas-panel" id="atlas" aria-labelledby="atlas-title">
      <div className="demo-header">
        <div className="demo-heading">
          <p className="demo-kicker">Third places · Space &amp; exploration</p>
          <h2 id="atlas-title">Chicago Experience Atlas</h2>
          <p className="demo-description">Reflect on your well-being, then explore places beyond home and work through happiness, meaning, and psychological richness.</p>
        </div>
        <a className="action-link demo-button" href={atlasUrl} target="_blank" rel="noopener noreferrer">Explore the Atlas <ExternalLink aria-hidden="true" /></a>
      </div>
      <div className="atlas-flow" aria-label="Atlas journey: welcome, well-being assessment, then map">
        {atlasSteps.map(step => <a key={step.number} className="atlas-screen" href={atlasUrl} target="_blank" rel="noopener noreferrer" aria-label={`Preview: ${step.label}. Open the Atlas welcome page.`}>
          <div className="atlas-screen-label"><span className="atlas-step">{step.number}</span>{step.label}</div>
          <Image src={`/images/atlas-${step.image}.png`} width={1265} height={712} alt={step.alt} loading="lazy" decoding="async" unoptimized />
        </a>)}
      </div>
      <p className="flow-legend"><span>Discover</span><ArrowRight aria-hidden="true" /><span>Assess your well-being</span><ArrowRight aria-hidden="true" /><span>Explore places</span></p>
    </section>
    <section className="demo-panel conversation-panel" id="conversation" aria-labelledby="conversation-title">
      <p className="demo-kicker">Conversation · AI &amp; exploration</p>
      <h2 id="conversation-title">Exploration through conversation</h2>
      <p className="conversation-lead">What might a conversation with an AI steered toward psychological richness feel like? Could it invite you to consider a different perspective—or take a fresh interest in a topic you once dismissed?</p>
      <p className="conversation-method">This demo builds on our research into steering language models through their internal representations of happiness, meaning, and psychological richness.</p>
      <div className="demo-actions">
        <a className="action-link demo-button" href={conversationUrl} target="_blank" rel="noopener noreferrer"><MessagesSquare aria-hidden="true" />Try the conversation<ExternalLink aria-hidden="true" /></a>
        <span className="demo-note">Research demo · The first response may take about a minute.</span>
      </div>
      <details className="study-details">
        <summary>The research behind the conversation</summary>
        <p><cite>Psychology’s New Lever: Steering the Good Life Inside Large Language Models</cite><br />Abstract submitted to SPSP.</p>
        <p>We identified nearly orthogonal directions corresponding to happiness, meaning, and psychological richness within one language model and experimentally steered those directions. In a collaborator-choice task, richness steering increased exploration, happiness steering decreased it, and meaning steering had no effect.</p>
        <p>In a preregistered study, participants who talked with a richness-steered model rated the conversation as more perspective-broadening and reported greater interest in an initially dismissed social issue than those who talked with a baseline model. Happiness steering showed no comparable pattern.</p>
      </details>
    </section>
  </div>;
}
