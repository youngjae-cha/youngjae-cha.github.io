export const dynamic = 'force-static';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Teaching & Mentoring', description: 'Research mentoring, teaching assistantships, and guest lectures, with teaching interests in social psychology, well-being, and research methods.' };
export default function Teaching() {
  return <main id="main-content">
    <header className="page-heading"><p className="eyebrow">Teaching &amp; Mentoring</p><h1>Connecting social conditions<br />to individual psychology.</h1><p>My teaching experience includes discussion sections and guest lectures, but much of my work with students takes place in research mentoring. I help students turn their interests into questions they can investigate.</p></header>
    <section className="section prose"><h2>Research mentoring</h2>
      <p>At Chicago, I have mentored five master’s students, as well as undergraduate researchers. I have also mentored undergraduates at Virginia and in Korea. We work closely on framing research questions, choosing study designs and measures, analyzing data, and developing manuscripts and independent funding proposals.</p>
      <p>Several students are co-authors on published or submitted papers. This mentoring was recognized by the Ruth Sosis Memorial Fellowship, following nominations from undergraduate researchers I had mentored.</p>
    </section>
    <section className="section prose"><h2>Classroom experience</h2>
      <p>My classroom experience is as a teaching assistant and guest lecturer. At Chicago, I assisted with two Social Psychology courses of more than 200 students each, led weekly discussion sections, and gave a full-class guest lecture on socioecological psychology. I also taught R as a TA at Virginia.</p>
      <p>In discussion sections, I use small-group conversations and walk through research figures with students: what was the question, what was compared, and what can we conclude? Students’ feedback highlighted the welcoming atmosphere, opportunities to hear from classmates, and specific feedback on their writing.</p>
    </section>
    <section className="section prose"><h2>Teaching interests</h2>
      <p>I am prepared to teach social psychology, well-being, and research methods. I would also develop a seminar on how broader social conditions and individual psychology influence one another, combining theory with experimental design, <a href="/publications/#post-hoc-multiverse">secondary-data analysis</a>, natural-language processing, and spatial methods. The aim is to help students formulate questions about environments and minds—and choose methods that can test them. Some of the ideas behind this approach are on my <a href="/reading/">reading page</a>.</p>
    </section>
  </main>;
}
