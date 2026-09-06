export const dynamic = 'force-static';
import type { Metadata } from 'next';
import { ExternalLink, FileText } from 'lucide-react';
import Image from 'next/image';
import ResearchDemos from '@/components/research-demos';
import ResearchStory from '@/components/research-story';
import OpenResearchHash from '@/components/open-research-hash';
export const metadata: Metadata = { title: 'Research', description: 'Three connected lines of research on learning new things, social conditions, and opportunities for exploration.' };
export default function Research() {
  return <main id="main-content">
    <OpenResearchHash />
    <header className="page-heading"><p className="eyebrow">Research</p><h1>A life worth exploring.</h1><p>I study what learning new things adds to a good life, why we sometimes stop wanting to explore, and what might draw us out again. These questions take me from workplaces and career choices to city streets and conversations with AI.</p><p className="research-reading-note">Open a question below for the studies, methods, and related papers.</p></header>
    <div className="research-stories">
    <ResearchStory id="good-life">
      <p>Measures of satisfaction, mastery, and stable relationships mostly assess how well people are doing within their existing activities and relationships. They can miss the value of learning new things, trying an unfamiliar collaborator, or seeking new experiences. In my research, these forms of exploration were more closely associated with psychological richness—seeing one’s life as varied, interesting, and perspective-changing—than with happiness or meaning.</p>
      <p>When 11,446 people across 29 countries described a good life in their own words, family and stability appeared alongside freedom, travel, learning, nature, hobbies, and making things. This work asks how measures of well-being can better capture the exploratory experiences that people value.</p>
      <h3>Related published work</h3>
      <p>My work on cognitive complexity examines differences among happy, meaningful, and psychologically rich lives. A cross-cultural meta-analysis of gratitude interventions provides another foundation for asking how well-being varies across contexts.</p>
      <div className="research-links"><a className="action-link paper-link" href="https://doi.org/10.1016/j.jrp.2024.104475" target="_blank" rel="noopener noreferrer"><FileText aria-hidden="true" />Cognitive complexity · JRP<ExternalLink aria-hidden="true" /></a><a className="action-link paper-link" href="https://doi.org/10.1073/pnas.2425193122" target="_blank" rel="noopener noreferrer"><FileText aria-hidden="true" />Gratitude interventions · PNAS<ExternalLink aria-hidden="true" /></a></div>
      <details className="figure-details"><summary>How ideals of a good life change over time</summary><p>In ongoing work, I use natural-language analysis of poetry to study how ideals of a good life change across historical and cultural contexts. This extends the same question beyond present-day surveys: when do learning, adventure, and changing perspectives become part of the life people imagine?</p><figure className="research-figure"><a href="/images/good-life-in-poetry.webp" target="_blank" rel="noopener noreferrer" aria-label="Open the historical poetry figure at full size"><Image unoptimized src="/images/good-life-in-poetry.webp" alt="A preliminary analysis of British poetry from 1600 to 2000, showing distinct historical patterns for facilitators of happiness, meaning, and psychological richness." width={2200} height={1027} loading="lazy" /></a><figcaption>Work in progress: facilitators of a good life in British poetry, 1600–2000. H., M., and PR denote happiness, meaning, and psychological richness.</figcaption></figure></details>
      <div className="related-work">
        <h3>Related work</h3>
        <ul>
          <li><cite>Can Reddit Reveal the Emotional Signatures of Happy, Meaningful, and Psychologically Rich Lives?</cite><p className="work-status">Presenter: Youngjae Cha · Talk submitted to SPSP 2027; decision pending.</p></li>
          <li><cite>Contribution to the proposed symposium “Vacuums of Meaning”</cite><p className="work-status">Invited contributor: Youngjae Cha · SPSP 2027 symposium submitted; decision pending.</p></li>
        </ul>
      </div>
    </ResearchStory>
    <span id="social-conditions" />
    <ResearchStory id="division-of-labor">
      <p>Specialization separates what people are responsible for from what falls outside their role. My question is whether “not my job” can become “not worth knowing.” Across five large surveys covering more than 475,000 workers, more finely divided work was associated with less learning, curiosity, and novelty seeking. In four preregistered randomized experiments, experiencing or imagining specialized work reduced indicators of exploration, while happiness and meaning showed no comparable decline.</p>
      <figure className="research-figure experiment-figure"><a href="/images/division-of-labor-experiments.webp" target="_blank" rel="noopener noreferrer" aria-label="Open the division-of-labor experimental figure at full size"><Image unoptimized src="/images/division-of-labor-experiments.webp" alt="Experimental tasks contrasting wheel assembly with whole-bike assembly, and measuring curiosity through willingness to wait for trivia answers. Plots show lower curiosity in division-of-labor conditions." width={780} height={536} loading="lazy" /></a><figcaption>From specialized work to curiosity beyond the task. Participants assembled wheels or whole bicycles; a separate task measured whether they would wait to learn a trivia answer. Other experiments used imagined consulting roles.</figcaption></figure>
      <p>I also examine whether these boundaries extend beyond work. Experiments on concern for climate change and exploratory analyses of workers’ language on Reddit test how specialization relates to engagement with social problems and other people. A Thaler-Tversky grant supports further tests in real work groups.</p>
    </ResearchStory>
    <ResearchStory id="occupational-herding">
      <p>Exploring also means considering who we might become. Why do young people’s dreams crowd into the same few occupations? Among 1.66 million adolescents across 90 countries and economies, 43.1% named one of the ten most common jobs as their preferred occupation. I call this occupational herding. It was greater in more unequal societies, even after accounting for labor-market diversity and students’ socioeconomic backgrounds.</p>
      <p>In a preregistered experiment, adults who imagined a more unequal future became more willing to guide a child toward where other children were going rather than toward that child’s own interests. This project asks how inequality narrows the range of futures young people consider.</p>
      <p>Like my work on the division of labor, this project asks whether social conditions shape more than people’s opportunities: they may also shape which possibilities people consider worth pursuing.</p>
      <div className="research-links"><a className="action-link paper-link" href="https://doi.org/10.1017/S0140525X25103403" target="_blank" rel="noopener noreferrer"><FileText aria-hidden="true" />Two ecological approaches · BBS commentary<ExternalLink aria-hidden="true" /></a><a className="action-link paper-link" href="https://doi.org/10.1093/pnasnexus/pgac224" target="_blank" rel="noopener noreferrer"><FileText aria-hidden="true" />Income inequality and happiness · PNAS Nexus<ExternalLink aria-hidden="true" /></a></div>
    </ResearchStory>
    <span id="opening-exploration" />
    <ResearchStory id="places">
      <figure className="places-photo-pair"><div><Image unoptimized src="/images/bookstore-browsing.webp" alt="People browsing stacks of books in a bookstore." width={1000} height={669} loading="lazy" /><Image unoptimized src="/images/museum-visit.webp" alt="Visitors looking at artworks in a quiet museum gallery." width={900} height={1200} loading="lazy" /></div><figcaption>Bookstores, museums, and other third places offer encounters beyond home and work. Which of these encounters make a life feel full of learning?</figcaption></figure>
      <p>Using natural-language analysis of Google reviews across U.S. cities, I identified places described as offering new knowledge and encouraging curiosity. Their spatial clustering—not simply their number—was associated with patents, civic knowledge, and lower implicit bias. This work asks how urban environments create opportunities for unplanned encounters and new experiences.</p>
      <div className="map-comparison" aria-label="Examples of different spatial patterns of psychologically rich places"><figure><a href="/images/rich-places-san-francisco.webp" target="_blank" rel="noopener noreferrer" aria-label="Open the San Francisco research map at full size"><Image unoptimized src="/images/rich-places-san-francisco.webp" alt="A research map showing a concentrated cluster of psychologically rich places in San Francisco." width={1800} height={1117} loading="lazy" /></a><figcaption><strong>San Francisco</strong><span>More clustered</span></figcaption></figure><figure><a href="/images/rich-places-los-angeles.webp" target="_blank" rel="noopener noreferrer" aria-label="Open the Los Angeles research map at full size"><Image unoptimized src="/images/rich-places-los-angeles.webp" alt="A research map showing psychologically rich places dispersed across Los Angeles." width={1800} height={1117} loading="lazy" /></a><figcaption><strong>Los Angeles</strong><span>More dispersed</span></figcaption></figure></div>
      <p className="figure-note">Places need not only to exist, but to be close enough for one encounter to lead to another. These maps illustrate spatial patterns, not causal effects on residents. Map data © OpenStreetMap contributors; basemap © CARTO.</p>
      <p>Building on this research, I am developing the Good Life Atlas, an interactive map where people discover neighborhood places and record where they go, what they experience, and how they feel. These reports will let me study person–environment fit: which places support well-being for whom. Participation itself generates data, with the potential to support field experiments across cities.</p>
    </ResearchStory>
    <ResearchStory id="llm-steering">
      <p>In ongoing work, we found nearly orthogonal directions for happiness, meaning, and psychological richness within one large language model. In a collaborator-choice task, richness steering increased the model’s exploration, happiness steering reduced it, and meaning steering had no effect.</p>
      <p>In a preregistered human experiment, participants who conversed with a richness-steered model rated the conversation as more perspective-broadening and reported greater interest in a previously dismissed social issue than those who conversed with a baseline model. This approach provides a way to manipulate model representations of psychological concepts—and to test what conversations built around them can do.</p>
      <h3>Discussion and changing perspectives</h3>
      <p>With a grant from the University of Chicago’s Forum for Free Inquiry and Expression, I test whether discussion across opposing views leads people to value a life of learning and changing perspectives. I will combine the Atlas with steered conversation to test the separate and joint effects of changing opportunities to explore and prompting people to reconsider its value.</p>
      <div className="related-work" id="lever-related-work">
        <h3>Related work</h3>
        <ul><li><cite>Psychology’s New Lever: Steering the Good Life Inside Large Language Models</cite><p className="work-status">Presenter: Youngjae Cha · Talk submitted to SPSP 2027; decision pending.</p></li></ul>
      </div>
    </ResearchStory>
    </div>
    <ResearchDemos />
  </main>;
}
