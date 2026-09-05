export const dynamic = 'force-static';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'About & Contact', description: 'About Youngjae Cha, a psychology Ph.D. student at the University of Chicago working with Shigehiro Oishi.' };
export default function About() {
  return <main id="main-content">
    <header className="page-heading"><p className="eyebrow">About &amp; Contact</p><h1>Youngjae Cha</h1><p>Ph.D. student in psychology<br />University of Chicago</p></header>
    <div className="prose">
      <p>I work with Shigehiro Oishi on well-being, culture, and social ecology. My research focuses on the role of learning new things in a good life, and on the conditions that encourage or narrow curiosity and exploration.</p>
      <p>I combine experiments with large-scale surveys, longitudinal and spatial data, and analyses of language. Alongside my research, I work closely with students on their research questions, study designs, manuscripts, and independent proposals.</p>
      <div className="contact-block"><h2>Get in touch</h2><a href="mailto:yjcha@uchicago.edu">yjcha@uchicago.edu</a></div>
      <div className="text-links"><a href="https://psychology.uchicago.edu/directory/youngjae-cha">University profile</a><a href="https://voices.uchicago.edu/oishilab/">Oishi Lab</a><a href="https://github.com/youngjae-cha">GitHub</a><a href="https://orcid.org/0000-0002-2194-1788">ORCID</a></div>
    </div>
  </main>;
}
