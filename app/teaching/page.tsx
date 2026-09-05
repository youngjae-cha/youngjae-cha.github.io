export const dynamic = 'force-static';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Teaching & Mentoring', description: 'Teaching social psychology and research methods, and mentoring students in research design, writing, and independent projects.' };
export default function Teaching() {
  return <main id="main-content">
    <header className="page-heading"><p className="eyebrow">Teaching &amp; Mentoring</p><h1>Connecting social conditions<br />to individual psychology.</h1><p>I want students to learn how to ask precise questions about the environments people live in—and how to test those questions.</p></header>
    <section className="section prose"><h2>Research mentoring</h2>
      <p>Much of my teaching happens through close work with students on research. I have mentored master’s and undergraduate researchers at the University of Chicago and undergraduate researchers at the University of Virginia. My role includes framing research questions, developing designs, working through analyses, and revising manuscripts and grant proposals.</p>
      <p>I help students distinguish a broad idea from a testable question, decide what evidence would support it, and consider how findings might hold across different measures and methods. Students I have mentored are co-authors on published and submitted papers and have developed proposals for independent research funding.</p>
      <p>At Chicago, I received the Ruth Sosis Memorial Fellowship following nominations from current and former undergraduate research assistants I had mentored.</p>
    </section>
    <section className="section prose"><h2>Teaching experience</h2>
      <p>My classroom experience includes teaching assistantships and guest lectures. At Chicago, I have served as a TA for Social Psychology, Cognitive Psychology, and the Psychology of Stereotyping and Prejudice. I led weekly discussion sections of approximately 20 students alongside large undergraduate lectures.</p>
      <p>In discussion, I use small-group conversations to give students time to develop an idea before sharing it with the class. I also work through research figures slowly, connecting the question to the design, the evidence, and the interpretation.</p>
      <p>I gave a guest lecture on socioecological psychology at Chicago and an invited lecture on psychological richness at the University of Mannheim.</p>
    </section>
    <section className="section prose"><h2>Courses I am prepared to teach</h2>
      <ul className="course-list">
        <li><strong>Social Psychology.</strong> Core theories, classic findings, and contemporary evidence about how social contexts shape thought, feeling, and behavior.</li>
        <li><strong>Well-Being.</strong> Happiness, meaning, psychological richness, and the cultural and social conditions that shape a good life.</li>
        <li><strong>Socioecological Psychology.</strong> How objective, often distal conditions connect to individual psychology, drawing on cultural psychology, evolutionary approaches, sociology, and anthropology.</li>
        <li><strong>Advanced Research Methods.</strong> Hands-on work with secondary data, longitudinal and spatial analyses, and natural language processing, alongside experimental approaches to testing causal claims.</li>
        <li><strong>Experimental Design.</strong> Turning theoretical questions into experiments through manipulation, random assignment, measurement, and careful interpretation.</li>
      </ul>
      <p>Across these courses, methods serve a theoretical question. Students should leave knowing not only how to run an analysis, but what the evidence can—and cannot—tell them.</p>
    </section>
  </main>;
}
