export const dynamic = 'force-static';
import type { Metadata } from 'next';
import { ExternalLink, FileText } from 'lucide-react';
import ResearchDemos from '@/components/research-demos';
export const metadata: Metadata = { title: 'Research', description: 'Three connected lines of research on learning new things, social conditions, and opportunities for exploration.' };
export default function Research() {
  return <main id="main-content">
    <header className="page-heading"><p className="eyebrow">Research</p><h1>Curiosity, exploration,<br />and the good life.</h1><p>Culture, environment, and history shape opportunities for exploration, which in turn affect well-being. I examine how the division of labor shapes the boundaries of curiosity, inequality the range of careers young people consider, and cities the opportunities for new experiences.</p></header>
    <section className="research-section" id="good-life"><span className="number">01</span><div className="prose">
      <h2>Learning new things and the good life</h2>
      <p className="question">What does an exploratory life offer that happiness and meaning may not?</p>
      <p>Measures of satisfaction, mastery, and stable relationships mostly assess how well people are doing within their existing activities and relationships. They can miss the value of learning new things, trying an unfamiliar collaborator, or seeking new experiences. In my research, these forms of exploration were more closely associated with psychological richness—seeing one’s life as varied, interesting, and perspective-changing—than with happiness or meaning.</p>
      <p>When 11,446 people across 29 countries described a good life in their own words, family and stability appeared alongside freedom, travel, learning, nature, hobbies, and making things. This work asks how measures of well-being can better capture the exploratory experiences that people value.</p>
      <h3>Related published work</h3>
      <p>My work on cognitive complexity examines differences among happy, meaningful, and psychologically rich lives. A cross-cultural meta-analysis of gratitude interventions provides another foundation for asking how well-being varies across contexts.</p>
      <div className="research-links"><a className="action-link paper-link" href="https://doi.org/10.1016/j.jrp.2024.104475" target="_blank" rel="noopener noreferrer"><FileText aria-hidden="true" />Cognitive complexity · JRP<ExternalLink aria-hidden="true" /></a><a className="action-link paper-link" href="https://doi.org/10.1073/pnas.2425193122" target="_blank" rel="noopener noreferrer"><FileText aria-hidden="true" />Gratitude interventions · PNAS<ExternalLink aria-hidden="true" /></a></div>
    </div></section>
    <section className="research-section" id="social-conditions"><span className="number">02</span><div className="prose">
      <h2>Social conditions that shape exploration</h2>
      <p className="question">Why do people narrow what they want to learn, experience, or become?</p>
      <h3 id="division-of-labor">Division of labor and curiosity</h3>
      <p>Specialization separates what people are responsible for from what falls outside their role. Across five large surveys covering more than 475,000 workers, more finely divided work was associated with less learning, curiosity, and novelty seeking. In four preregistered randomized experiments, experiencing or imagining specialized work reduced indicators of exploration, while happiness and meaning showed no comparable decline.</p>
      <p>I also examine whether these boundaries extend beyond work. Experiments on concern for climate change and exploratory analyses of workers’ language on Reddit test how specialization relates to engagement with social problems and other people. A Thaler-Tversky grant supports further tests in real work groups.</p>
      <h3>Economic inequality and occupational herding</h3>
      <p>Among 1.66 million adolescents across 90 countries and economies, 43.1% named one of the ten most common jobs as their preferred occupation. I call this occupational herding. It was greater in more unequal societies, even after accounting for labor-market diversity and students’ socioeconomic backgrounds.</p>
      <p>In a preregistered experiment, adults who imagined a more unequal future became more willing to guide a child toward where other children were going rather than toward that child’s own interests. This project asks how inequality narrows the range of futures young people consider.</p>
      <p>Both projects ask whether social conditions shape more than people’s opportunities: they may also shape which possibilities people consider worth pursuing.</p>
      <div className="research-links"><a className="action-link paper-link" href="https://doi.org/10.1017/S0140525X25103403" target="_blank" rel="noopener noreferrer"><FileText aria-hidden="true" />Two ecological approaches · BBS commentary<ExternalLink aria-hidden="true" /></a><a className="action-link paper-link" href="https://doi.org/10.1093/pnasnexus/pgac224" target="_blank" rel="noopener noreferrer"><FileText aria-hidden="true" />Income inequality and happiness · PNAS Nexus<ExternalLink aria-hidden="true" /></a></div>
    </div></section>
    <section className="research-section" id="opening-exploration"><span className="number">03</span><div className="prose">
      <h2>Opening opportunities for exploration</h2>
      <p className="question">Can places and conversations make people more willing to explore?</p>
      <h3>Places and the Good Life Atlas</h3>
      <p>Using natural-language analysis of Google reviews across U.S. cities, I identified places described as offering new knowledge and encouraging curiosity. Their spatial clustering—not simply their number—was associated with patents, civic knowledge, and lower implicit bias. This work asks how urban environments create opportunities for unplanned encounters and new experiences.</p>
      <p>Building on this research, I am developing the Good Life Atlas, an interactive map where people discover neighborhood places and record where they go, what they experience, and how they feel. These reports will let me study person–environment fit: which places support well-being for whom. Participation itself generates data, with the potential to support field experiments across cities.</p>
      <h3 id="llm-steering">Steering the good life in language models</h3>
      <p>In ongoing work, we found nearly orthogonal directions for happiness, meaning, and psychological richness within one large language model. In a collaborator-choice task, richness steering increased the model’s exploration, happiness steering reduced it, and meaning steering had no effect.</p>
      <p>In a preregistered human experiment, participants who conversed with a richness-steered model rated the conversation as more perspective-broadening and reported greater interest in a previously dismissed social issue than those who conversed with a baseline model. This approach provides a way to manipulate model representations of psychological concepts—and to test what conversations built around them can do.</p>
      <h3>Discussion and changing perspectives</h3>
      <p>With a grant from the University of Chicago’s Forum for Free Inquiry and Expression, I test whether discussion across opposing views leads people to value a life of learning and changing perspectives. I will combine the Atlas with steered conversation to test the separate and joint effects of changing opportunities to explore and prompting people to reconsider its value.</p>
    </div></section>
    <ResearchDemos />
  </main>;
}
