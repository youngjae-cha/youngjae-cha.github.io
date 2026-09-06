export const dynamic = 'force-static';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Teaching & Mentoring', description: 'Course plans in social psychology, well-being, and research methods, alongside teaching and research mentoring experience.' };
export default function Teaching() {
  return <main id="main-content">
    <header className="page-heading"><p className="eyebrow">Teaching &amp; Mentoring</p><h1>Connecting social conditions<br />to individual psychology.</h1><p>Drawing on my research, teaching assistantships, guest lectures, and research mentoring, I am prepared to teach social psychology, well-being, and research methods. I would also develop advanced seminars that help students connect broader social conditions to individual psychology—and learn how to test those connections.</p></header>
    <section className="section prose"><p className="eyebrow">Course plans</p><h2>Socioecological Psychology</h2>
      <p>This seminar would connect cultural and evolutionary psychology with sociology, anthropology, and behavioral ecology. Students would ask how people respond to their environments, how those responses form collective patterns, and how those patterns change the environment in turn.</p>
      <div className="teaching-examples">
        <article><h3>Can the structure of work narrow curiosity?</h3><p>Use division of labor to connect an institutional arrangement to individual motivation. Define specialization and curiosity, then decide what observations and experiments would test the proposed link.</p></article>
        <article><h3>Can a different street change how people relate?</h3><p>Draw on my ongoing comparison of car-free and ordinary days in Chicago neighborhoods. Examine social interaction and belonging, while asking what comparisons across places and times can establish without random assignment.</p></article>
        <article><h3>How do cultural environments shape a good life?</h3><p>Study language in historical texts and social media to ask what people value. Distinguish cultural representations from individual experience, and changes in language from changes in psychology.</p></article>
      </div>
      <p>The same approach extends to residential mobility and general trust, and pathogen threat and place visits measured with GPS. Throughout, students would distinguish differences between places from changes within people.</p>
      <p>For a sense of the ideas behind these questions, see <a href="/reading/">some of my favorite readings</a>, from social ecology and evolutionary theory to judgment and methods.</p>
    </section>
    <section className="section prose"><p className="eyebrow">How to test them</p><h2>Advanced Methods in Social Psychology</h2>
      <p>This graduate seminar, adaptable for advanced undergraduates, would organize methods around five problems:</p>
      <ol className="course-list">
        <li><strong>Testing causal claims.</strong> Following Wilson, Aronson, and Carlsmith’s chapter in the <em>Handbook of Social Psychology</em>, students would examine how constructs become manipulations, how random assignment supports causal inference, and how construct validity and generalizability constrain conclusions. This unit would include laboratory, field, and natural experiments.</li>
        <li><strong>Studying change.</strong> Secondary and archival data, cross-national measurement, and panel and time-series designs.</li>
        <li><strong>Measuring environments.</strong> GPS and mobility data, spatial analysis, and individual- versus place-level inference.</li>
        <li><strong>Studying cultural representations.</strong> Dictionaries, embeddings, and LLM representations applied to social media and historical texts.</li>
        <li><strong>Connecting individuals to collective patterns.</strong> Agent-based models, drawing on my ongoing work, to examine how individual rules generate group-level outcomes.</li>
      </ol>
      <p>In R and Python, students would assemble data for a question of their own, produce a reproducible analysis, and test an alternative measurement or analytic choice. My methods paper, under revision at <em>Advances in Methods and Practices in Psychological Science</em>, would guide work with secondary data. A future seminar on AI and collective intelligence would extend the final unit.</p>
    </section>
    <section className="section prose"><h2>Core Social Psychology &amp; Well-Being</h2>
      <p>In Social Psychology and Research Methods, I would connect classic experiments with supervised field projects. For conformity, I would pair Asch’s experiments with a field experiment I conducted as an undergraduate, varying how many people stood on one side of a subway-station escalator to examine when later arrivals followed.</p>
      <p>The Psychology of Well-Being and the Good Life would cover happiness, meaning, psychological richness, and cultural variation. Our <a href="https://doi.org/10.1073/pnas.2425193122" target="_blank" rel="noopener noreferrer">cross-cultural meta-analysis of gratitude interventions in <em>PNAS</em></a> would help students learn to synthesize intervention evidence and distinguish differences across countries from evidence explaining those differences.</p>
    </section>
    <section className="section prose"><h2>Teaching &amp; mentoring experience</h2>
      <p>My most sustained teaching experience is in research mentoring. At Chicago, I have mentored five master’s students and undergraduate researchers; I have also mentored undergraduates at Virginia and in Korea. We work closely on research questions, study designs, manuscripts, and independent funding proposals. Several students are co-authors on published or submitted papers. Their nominations led to my receiving the Ruth Sosis Memorial Fellowship.</p>
      <p>My classroom experience is as a teaching assistant and guest lecturer. At Chicago, I assisted with two Social Psychology courses of more than 200 students each, led weekly discussion sections, and gave a full-class guest lecture on socioecological psychology. I also taught R as a TA at Virginia.</p>
      <p>In sections, I move from small-group discussion to examining a research figure together: what was the question, what was compared, and what can we conclude? Students valued the opportunity to hear from classmates. Their requests for clearer participation criteria also inform my plan to provide a rubric at the start of my own courses.</p>
    </section>
  </main>;
}
