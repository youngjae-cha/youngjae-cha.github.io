export const dynamic = 'force-static';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'About & Contact', description: 'About Youngjae Cha, a psychology Ph.D. student at the University of Chicago working with Shigehiro Oishi.' };
export default function About() {
  return <main id="main-content">
    <header className="page-heading"><p className="eyebrow">About &amp; Contact</p><h1>Youngjae Cha</h1><p>Ph.D. student in psychology<br />University of Chicago</p></header>
    <div className="prose about-story">
      <h2>A life of learning new things</h2>
      <p>I like following my curiosity and learning new things. But I remember three moments when that way of living ran up against other values.</p>
      <div className="story-scenes">
        <p>In middle school, my physics teacher asked me to close my eyes, then asked my classmates to raise their hands if they thought my questions were slowing the class down. I was sent out of the classroom.</p>
        <p>At university, my adviser told me that studying was not simply something to enjoy. It should be a sustained pursuit of a defined purpose, with meaning rooted in contributing to the community.</p>
        <p>In graduate school, a senior peer warned that continually studying new concepts would leave my CV without a clear focus. I should choose my research topics strategically.</p>
      </div>
      <p>Efficiency, meaning, and expertise all matter. But I could see a gap between those expectations and the life I wanted.</p>
      <p className="story-question">Why is learning new things so often asked to serve another purpose?</p>
      <p>Later, I encountered a related puzzle in research. Across societies, people who prefer a psychologically rich life over a happy or meaningful one are a minority. Yet in our university sample, that preference was more common among first-year than fourth-year students. Why? As people acquire a major and a specialty, might their interests shift from what they would like to learn toward what they need to know?</p>
      <h2>What constrains it, and what expands it?</h2>
      <p>I look for answers in the structure of modern society. The division of labor separates what we need to know from what we can leave to others. Inequality can intensify competition and anxiety, making exploration feel like a luxury. Structures that make a society more productive may not make its members’ lives more psychologically rich. I study how these conditions shape not only what people can explore, but what they come to want.</p>
      <p>I also look for ways to reopen exploration. Can a different way of interpreting the same situation awaken a new interest? This is the social-psychological question of <em>construal</em>. And what happens when the surroundings themselves change? Which neighborhoods and places free our curiosity and let us enjoy something that serves no immediate purpose? The <a href="/research/#atlas">Good Life Atlas</a> and <a href="/research/#llm-steering">steered language models</a> approach these questions through places and conversations.</p>
      <p>My interest also draws me to Mill, Dewey, Hesse’s <em>Goldmund</em>, and Romantic poetry. Shigehiro Oishi’s concept of psychological richness gave that interest a language within psychology. Working with him, I combine experiments with large-scale and historical data, natural-language processing, and spatial analysis to study how the wider social world constrains—and sometimes opens—a life of learning new things.</p>
      <p>I’ve also collected some of my favorite theories and papers on my <a href="/reading/">reading page</a>.</p>
      <div className="contact-block"><h2>Get in touch</h2><a href="mailto:yjcha@uchicago.edu">yjcha@uchicago.edu</a></div>
      <div className="text-links"><a href="https://psychology.uchicago.edu/directory/youngjae-cha">University profile</a><a href="https://voices.uchicago.edu/oishilab/">Oishi Lab</a><a href="https://github.com/youngjae-cha">GitHub</a><a href="https://orcid.org/0000-0002-2194-1788">ORCID</a></div>
    </div>
  </main>;
}
