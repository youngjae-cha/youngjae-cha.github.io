export const dynamic = 'force-static';
import type { Metadata } from 'next';
import { ExternalLink, FileText } from 'lucide-react';
import Image from 'next/image';
import ResearchDemos from '@/components/research-demos';
import ResearchStory from '@/components/research-story';
import ManuscriptLinks from '@/components/manuscript-links';
import OpenResearchHash from '@/components/open-research-hash';
export const metadata: Metadata = { title: 'Research', description: 'Three connected lines of research on learning new things, social conditions, and opportunities for exploration.' };
export default function Research() {
  return <main id="main-content">
    <OpenResearchHash />
    <header className="page-heading"><p className="eyebrow">Research</p><h1>A life worth exploring.</h1><p>I study what learning new things adds to a good life, why we sometimes stop wanting to explore, and what might draw us out again. These questions take me from workplaces and career choices to city streets and conversations with AI.</p><p className="research-reading-note">Open a question below for the studies, methods, and related papers.</p></header>
    <div className="research-stories">
    <ResearchStory id="good-life">
      <p>Learning new things can be valuable even when it does not make life more comfortable or advance an existing goal. My research asks how that experience fits into a good life.</p>
      <h3><a href="/publications/#richness-and-exploration">Psychological richness and exploration</a></h3>
      <p>Psychological richness describes a life experienced as varied, interesting, and perspective-changing; exploration means seeking unfamiliar possibilities. Across behavioral tasks, daily diaries, and cross-cultural surveys, richness was more consistently associated with exploration than happiness or meaning. For example, people who rated their lives as richer were more willing to switch collaborators after a rewarded choice in a task and wait for trivia answers that offered no task reward.</p>
      <h3><a href="/publications/#missing-half">What do well-being measures capture?</a></h3>
      <p>In <em>Exploration and the Good Life</em>, I examined 293 items from 15 well-being questionnaires. Exploration appears in existing measures, but with different meanings: personal growth emphasizes development, while psychological richness emphasizes variety, interest, and changes in perspective. The same experience can count as personal improvement or as something interesting and worthwhile in itself. In 11,446 desired-life descriptions from 29 countries, travel and learning appeared alongside family, relationships, and financial security.</p>
      <details className="figure-details"><summary>How ideals of a good life change over time</summary><p>In my <a href="/publications/#historical-good-life">poetry project</a>, I use language models to examine ideals of a good life expressed in British poetry (1600–2000) and pre-modern Chinese poetry. This extends the question beyond present-day surveys: how does the place of learning, adventure, and changing perspectives in an imagined good life vary across periods and cultures? The analysis concerns what poems express, not a direct measure of how people lived.</p><figure className="research-figure"><a href="/images/good-life-in-poetry.webp" target="_blank" rel="noopener noreferrer" aria-label="Open the historical poetry figure at full size"><Image unoptimized src="/images/good-life-in-poetry.webp" alt="A preliminary analysis of British poetry from 1600 to 2000, showing distinct historical patterns for facilitators of happiness, meaning, and psychological richness." width={2200} height={1027} loading="lazy" /></a><figcaption>Work in progress: facilitators of a good life in British poetry, 1600–2000. H., M., and PR denote happiness, meaning, and psychological richness.</figcaption></figure></details>
      <h3>Related published work</h3>
      <p>Our <a href="https://doi.org/10.1016/j.jrp.2024.104475" target="_blank" rel="noopener noreferrer">cognitive complexity study (<em>JRP</em>)</a> connects richness with how people understand others: those who saw their lives as richer reported considering multiple influences on other people’s behavior.</p>
      <p>In broader work on well-being, our <a href="https://doi.org/10.1073/pnas.2425193122" target="_blank" rel="noopener noreferrer">meta-analysis of gratitude interventions (<em>PNAS</em>)</a> found a small average improvement in well-being across studies from 28 countries, with effects that varied between countries.</p>
      <div className="related-work">
        <h3>Conference submissions</h3>
        <ul>
          <li><cite>Can Reddit Reveal the Emotional Signatures of Happy, Meaningful, and Psychologically Rich Lives?</cite><p className="work-status">Presenter: Youngjae Cha · Talk submitted to SPSP 2027; decision pending.</p></li>
          <li><cite>Contribution to the proposed symposium “Vacuums of Meaning”</cite><p className="work-status">Invited contributor: Youngjae Cha · SPSP 2027 symposium submitted; decision pending.</p></li>
        </ul>
      </div>
    </ResearchStory>
    <span id="social-conditions" />
    <ResearchStory id="division-of-labor">
      <p>Specialization separates what people are responsible for from what falls outside their role. My question is whether “not my job” can become “not worth knowing.” Across five survey datasets covering more than 475,000 workers, more finely divided work was associated with less learning, curiosity, and novelty seeking. Four preregistered randomized experiments tested this link: people who experienced or imagined specialized work were less curious, including about unrelated trivia. In the assembly experiments, enjoyment and fulfillment did not significantly decline.</p>
      <figure className="research-figure experiment-figure"><a href="/images/division-of-labor-experiments.webp" target="_blank" rel="noopener noreferrer" aria-label="Open the division-of-labor experimental figure at full size"><Image unoptimized src="/images/division-of-labor-experiments.webp" alt="Virtual motorbike assembly and trivia tasks. Participants assembled wheels or whole motorbikes; plots show lower curiosity in division-of-labor conditions." width={780} height={536} loading="lazy" /></a><figcaption>From specialized work to curiosity beyond the task. Participants assembled wheels or whole motorbikes in a virtual factory. A separate trivia task measured whether they would wait to learn an answer. Other experiments used imagined consulting roles.</figcaption></figure>
      <p>In related projects, I examine whether these boundaries extend beyond work. Experiments on concern for climate change and exploratory analyses of workers’ language on Reddit test how specialization relates to engagement with social problems and other people. A Thaler-Tversky grant supports further tests in real work groups.</p>
      <ManuscriptLinks ids={['division-of-labor']} />
    </ResearchStory>
    <ResearchStory id="occupational-herding">
      <p>Exploring also means considering who we might become. Why do young people’s dreams crowd into the same few occupations? Across 1.66 million adolescent responses from 90 countries and economies, 43.1% named one of the ten jobs most commonly expected in their country and survey year. Students were asked what job they expected to hold around age 30. I call this concentration occupational herding. It was greater in more unequal societies, even after accounting for labor-market diversity and students’ socioeconomic backgrounds.</p>
      <p>In a preregistered experiment, adults shown a projection of higher future inequality expressed stronger preferences for a future child to follow popular career paths over the child’s own interests. Together, these findings suggest that inequality may narrow the futures young people consider.</p>
      <p>Like my work on the division of labor, this project asks whether social conditions shape more than people’s opportunities: they may also shape which possibilities people consider worth pursuing.</p>
      <ManuscriptLinks ids={['occupational-herding']} />
      <h3>Related published work</h3>
      <div className="research-links"><a className="action-link paper-link" href="https://doi.org/10.1017/S0140525X25103403" target="_blank" rel="noopener noreferrer"><FileText aria-hidden="true" />Two ecological approaches · BBS commentary<ExternalLink aria-hidden="true" /></a><a className="action-link paper-link" href="https://doi.org/10.1093/pnasnexus/pgac224" target="_blank" rel="noopener noreferrer"><FileText aria-hidden="true" />Income inequality and happiness · PNAS Nexus<ExternalLink aria-hidden="true" /></a></div>
    </ResearchStory>
    <span id="opening-exploration" />
    <ResearchStory id="places">
      <figure className="places-photo-pair"><div><Image unoptimized src="/images/bookstore-browsing.webp" alt="People browsing stacks of books in a bookstore." width={1000} height={669} loading="lazy" /><Image unoptimized src="/images/museum-visit.webp" alt="Visitors looking at artworks in a quiet museum gallery." width={900} height={1200} loading="lazy" /></div><figcaption>Bookstores, museums, and other third places offer encounters beyond home and work. Which of these encounters make a life feel full of learning?</figcaption></figure>
      <p>Using natural-language analysis of Google reviews across U.S. cities, I identified places described as offering new knowledge and encouraging curiosity. Across cities, greater clustering of these places—not simply their number—was associated with more patents, greater civic knowledge, and lower implicit bias. This work asks how urban environments create opportunities for unplanned encounters and new experiences.</p>
      <div className="map-comparison" aria-label="Examples of different spatial patterns of psychologically rich places"><figure><a href="/images/rich-places-san-francisco.webp" target="_blank" rel="noopener noreferrer" aria-label="Open the San Francisco research map at full size"><Image unoptimized src="/images/rich-places-san-francisco.webp" alt="A research map showing a concentrated cluster of psychologically rich places in San Francisco." width={1800} height={1117} loading="lazy" /></a><figcaption><strong>San Francisco</strong><span>More clustered</span></figcaption></figure><figure><a href="/images/rich-places-los-angeles.webp" target="_blank" rel="noopener noreferrer" aria-label="Open the Los Angeles research map at full size"><Image unoptimized src="/images/rich-places-los-angeles.webp" alt="A research map showing psychologically rich places dispersed across Los Angeles." width={1800} height={1117} loading="lazy" /></a><figcaption><strong>Los Angeles</strong><span>More dispersed</span></figcaption></figure></div>
      <p className="figure-note">I ask whether clustering makes it easier for one encounter to lead to another. These maps illustrate spatial patterns, not causal effects on residents. Map data © OpenStreetMap contributors; basemap © CARTO.</p>
      <p>Building on this research, I am developing the Good Life Atlas, an interactive map where people discover neighborhood places and record where they go, what they experience, and how they feel. These reports will let me study person–environment fit: which places support well-being for whom. Participation itself generates data, with the potential to support field experiments across cities.</p>
      <p>In a separate project, <em>When the City Feels Like Ours</em>, I ask how inviting surroundings relate to felt ownership and care for shared spaces. Surveys examine these associations, and an agent-based simulation explores how repeated visits might connect them.</p>
      <ManuscriptLinks ids={['psychologically-rich-city', 'city-feels-like-ours']} />
    </ResearchStory>
    <ResearchStory id="llm-steering">
      <p>Within one large language model, we found that happiness, meaning, and psychological richness corresponded to nearly orthogonal directions—almost at right angles—in its internal representations. We then adjusted the model along each direction, a technique called steering. In a collaborator-choice task, richness steering increased the model’s exploration, happiness steering reduced it, and meaning steering had no effect.</p>
      <p>In a preregistered human experiment, participants who conversed with a richness-steered model rated the conversation as more perspective-broadening and reported greater interest in a previously dismissed social issue than those who conversed with a baseline model. This approach provides a way to manipulate model representations of psychological concepts—and to test what conversations built around them can do.</p>
      <h3>Discussion and changing perspectives</h3>
      <p>With a grant from the University of Chicago’s Forum for Free Inquiry and Expression, I test whether discussion across opposing views leads people to value a life of learning and changing perspectives. I will combine the Atlas with steered conversation to test the separate and joint effects of changing opportunities to explore and prompting people to reconsider its value.</p>
      <div className="related-work" id="lever-related-work">
        <h3>Related work</h3>
        <ul><li><cite><a href="/publications/#llm-steering">Psychology’s New Lever: Steering the Good Life Inside Large Language Models</a></cite><p className="work-status">Manuscript in preparation · Presenter: Youngjae Cha · Talk submitted to SPSP 2027; decision pending.</p></li></ul>
      </div>
    </ResearchStory>
    </div>
    <ResearchDemos />
  </main>;
}
