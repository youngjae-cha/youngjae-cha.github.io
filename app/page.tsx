export const dynamic = 'force-static';
export default function Home() {
  return (
    <main id="main-content">
      <section className="intro">
        <p className="eyebrow">Psychology · University of Chicago</p>
        <h1>Youngjae Cha</h1>
        <p className="lead">I study an overlooked part of well-being: the value of curiosity and exploration.</p>
        <p className="intro-detail">I am a Ph.D. student in psychology at the University of Chicago, working with Shigehiro Oishi. My research examines how culture and social conditions shape the value people place on exploration and their opportunities to pursue it—from the boundaries of work and the careers young people consider to the places they encounter in a city.</p>
        <div className="text-links"><a href="mailto:yjcha@uchicago.edu">Email</a><a href="https://github.com/youngjae-cha">GitHub</a><a href="https://orcid.org/0000-0002-2194-1788">ORCID</a></div>
      </section>
      <section className="section" aria-labelledby="questions-title">
        <div className="section-top"><h2 id="questions-title">Guiding questions</h2><a href="/research/">Research <span aria-hidden="true">↗</span></a></div>
        <ol className="questions">
          <li><span className="number">01</span><a href="/research/#good-life">What role does learning new things play in a good life?</a></li>
          <li><span className="number">02</span><a href="/research/#social-conditions">How do culture and social conditions shape what people are willing to explore?</a></li>
          <li><span className="number">03</span><a href="/research/#opening-exploration">What kinds of environments and conversations encourage exploration?</a></li>
        </ol>
      </section>
      <section className="section" aria-labelledby="selected-title">
        <div className="section-top"><h2 id="selected-title">Selected research</h2><a href="/publications/">Publications <span aria-hidden="true">↗</span></a></div>
        <div className="selected-grid">
          <article><p className="meta">PNAS · 2025</p><h3><a href="https://doi.org/10.1073/pnas.2425193122">Gratitude and well-being across cultures</a></h3><p>A meta-analysis of the effectiveness of gratitude interventions on well-being across cultures.</p></article>
          <article><p className="meta">Ongoing research</p><h3><a href="/research/#division-of-labor">Division of labor and curiosity</a></h3><p>How specialization shapes the value people place on learning new things.</p></article>
          <article><p className="meta">Ongoing research</p><h3><a href="/research/#llm-steering">Steering the good life in language models</a></h3><p>Separating model representations of happiness, meaning, and psychological richness to study exploration.</p></article>
        </div>
      </section>
    </main>
  );
}
