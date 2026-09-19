export type Preprint = {
  id: string;
  title: string;
  previousTitle?: string;
  authors: string;
  status: string;
  abstract?: string;
  preprint?: string;
};

export const preprints: Preprint[] = [
  {
    // Abstract verbatim from DOL_NHB_v3 (3).docx; bibliographic metadata from 01.cha_cv_umich.docx.
    id: 'division-of-labor',
    title: 'Division of Labor Reduces Curiosity',
    authors: 'Cha, Y., Albuquerque, M., & Oishi, S.',
    status: 'Under review · Nature Human Behaviour',
    abstract: "Whether division of labor exacts a psychological cost has never been systematically tested. Across nine studies—four experiments (N = 821), surveys spanning 30 countries, and a ten-year longitudinal study (total N ≈ 477,000)—we find that division of labor reduces people's orientation toward exploration: the drive to seek new information, try unfamiliar things, and learn beyond one's immediate task. The effect is specific—satisfaction and fulfillment are preserved while exploration contracts—and it extends beyond work into everyday life. The mere anticipation of divided work is sufficient, pointing to a belief-based mechanism rather than fatigue or boredom. The pattern replicates across five continents and within the same individuals over a decade. Specialization delivers productivity but narrows the exploratory life."
  },
  {
    // Title, authors, and verbatim abstract: user attachment 982d28de-e2aa-42f8-9eac-b659d1e46af7.
    id: 'richness-and-exploration',
    title: 'Living a psychologically rich life is associated with exploration more than living a happy or meaningful one',
    authors: 'Cha, Y., Westgate, E., Bai, X., Choi, H., & Oishi, S.',
    status: 'Under review · Nature Human Behaviour',
    abstract: 'The choice between exploring and staying put shapes human life, yet its link to well-being remains surprisingly inconsistent. We propose this is because conceptions of a good life weigh exploration differently: happiness and meaning prize stable, enduring satisfaction and purpose, whereas psychological richness cherishes shifting, perspective-changing experience. Across five studies, psychological richness was most consistently associated with exploration. In behavioral tasks, people who appraised their lives as richer switched to new collaborators after reward (N = 1,008) and waited for non-instrumental information (N = 296; preregistered). This richness–exploration link extended to everyday novelty over fourteen days (N = 202), fourteen cross-cultural samples (N = 5,337), and a twenty-nation replication (N = 5,141), holding even after controlling for trait openness (N = 441). Experimentally, making richness salient modestly increased such information seeking (N = 451; preregistered). Distinguishing psychological richness sharpens the elusive link between exploration and a good life.'
  },
  {
    // Title, authors, and verbatim abstract: user attachment d59ac989-fed4-42f5-bbf9-3e570fef6636.
    id: 'occupational-herding',
    title: 'Income inequality and the narrowing of adolescents’ career aspirations',
    authors: 'Cha, Y., Hu, L., Thamer-Nall, M., Yin, Y., & Oishi, S.',
    status: 'Under review · Nature',
    abstract: 'Adolescents should be free to imagine futures of their own, yet they crowd into the same few job aspirations—a pattern we term occupational herding. We found that income inequality contributes to herding through concern about relative standing. Across 90 countries (N = 1,659,581), adolescents in more unequal countries were more concerned and, in turn, aspired to the same few jobs. Beyond individuals, herding also accompanied aspiration–employment mismatch and youth disengagement. In 41 years of United States surveys (N = 87,657), larger five-year inequality rises preceded larger annual increases in herding among 12th-graders. In a preregistered experiment (N = 446), adults shown high projected inequality preferred popular careers over a future child’s interests. Inequality may thus narrow what young people imagine—and how societies use their talent.'
  },
{
    id: 'post-hoc-multiverse',
    title: 'Post-hoc Multiverse Analysis: A Method for Addressing Cherry-Picking Concerns in Large-Scale Secondary Dataset Research',
    authors: 'Cha, Y., Lu, P.-C., Oishi, S., & Buttrick, N.',
    status: 'Invited revision · Advances in Methods and Practices in Psychological Science',
    abstract: 'Large secondary datasets provide many opportunities to test theories, but selecting outcomes after inspecting their results can exaggerate the apparent support for a claim. The unreported measures retained in these datasets provide a way to examine that concern. We propose an Exploratory Graph Analysis (EGA)-guided outcome multiverse that holds the predictor and model fixed and uses EGA to locate empirical neighbors of the reported outcomes. Comparing their results shows whether statistically pronounced findings concentrate among the reported measures, whether similar or stronger unreported results remain, and what these alternatives add to the interpretation. A four-step General Social Survey tutorial illustrates the procedure and its reporting card. A constructed maximum-selection example and focused simulations evaluate a conditional rank-concentration test under known reporting rules, showing both sensitivity to selective reporting and concentration arising from measurement quality or heterogeneous associations. The approach gives authors and readers a structured basis for evaluating reported findings alongside the evidence left unreported.',
    preprint: 'https://zenodo.org/records/22845909?preview=1&token=eyJhbGciOiJIUzUxMiIsImlhdCI6MTc4OTgyNjA1NSwiZXhwIjoxNzk4Njc1MTk5fQ.eyJpZCI6IjhmOGJkMzhlLTg4NGQtNGUyYi04NjQxLTZmYTFhN2EyMzFiZiIsImRhdGEiOnt9LCJyYW5kb20iOiIzZGQ2MTM2OWUwMTdjZTY1ZWYyMDc4NzhjNTcxZDMyOCJ9.PLzg7ibVGLyF3HAKJvwPoNDd0va5J6C6QLaNPRTp9Y0C9-i3Y-xnDYoVcgEAza6v46EHNwne0nYRVIF16yzxHQ'
  },
  {
    id: 'missing-half',
    title: 'Exploration and the Good Life',
    previousTitle: 'The Missing Half of Well-Being',
    authors: 'Cha, Y., Yin, Y., Ge, B., & Oishi, S.',
    status: 'In preparation',
    preprint: 'https://zenodo.org/records/22846493?preview=1&token=eyJhbGciOiJIUzUxMiIsImlhdCI6MTc4OTgyODkzOSwiZXhwIjoxNzk4Njc1MTk5fQ.eyJpZCI6ImFhYmY0NGFmLTY4MjEtNDc1OC04NzBlLTdjODNlZDFmYmJlYiIsImRhdGEiOnt9LCJyYW5kb20iOiI0OTkyNzkxZWVlNTViMDcwZmViODQyYWI2ZDIyNjYyNSJ9.LbWHEcW_KaRX4SwHwWNLhCneBbOch1_iWBvYZol7XksnqWigF3yDFHwgqINJfIMI-hOVkBR2W09uCgBqZUZfeg',
    abstract: 'People’s ideas about a good life shape how they judge whether life is going well. Drawing on exploration–exploitation theory, we examine how well-being science represents exploratory experience. Analyses of 293 items from 15 instruments identified exploratory content in Personal Growth and psychological richness, but their definitions emphasized continued development and experiential qualities, respectively. We also examined 11,446 desired-life descriptions from 29 countries. Exploration-related expressions were more common in these descriptions than in academic summaries, and exploratory content was associated with respondents’ richness ratings and life preferences. Across 155 countries, life evaluation and learning experience yielded different rankings. These findings reveal differences in how exploratory experience is represented across scientific and everyday conceptions of a good life, supporting a broader account of living well that recognizes what experiences bring into a life alongside what they help people achieve.'
  },
  {
    id: 'city-feels-like-ours',
    title: 'When the City Feels Like Ours: Aesthetic Invitation, Felt Ownership and Civic Care',
    authors: 'Cha, Y., Jeong, O., Thamer-Nall, M., & Oishi, S.',
    status: 'Under review · Nature Cities',
    preprint: 'https://zenodo.org/records/22846578?preview=1&token=eyJhbGciOiJIUzUxMiIsImlhdCI6MTc4OTgyOTI1MiwiZXhwIjoxNzk4Njc1MTk5fQ.eyJpZCI6IjA0Njk2YTgxLTQwNTItNGVmYy04MDVmLWZhZjg3YWUyZGI4YyIsImRhdGEiOnt9LCJyYW5kb20iOiIzYmQ3NWMyNjc4MzIyYjM3ZGUzNGRlNGNkMDE5YjA0ZiJ9.oe9XQdh6gw58jvpBQo4bwbcsOUswWWjpIu59JDioQb0zMHylvYtedB_9gAgw7P2wgF9eJZE4xTwHh7WOjMJlgQ',
    abstract: 'Urban life depends on residents who notice problems in shared spaces and treat them as their own. What makes public spaces, and their problems, feel like ours? Across up to 1,384 U.S. ZIP codes, objective aesthetic cues predicted civic care: volunteering and civic organization. Among 3,031 adults in 104 cities, perceived aesthetics was more strongly associated with felt ownership and civic action than other perceived qualities, and its link to civic action ran partly through felt ownership. What would that process look like across repeated encounters? Inside a generative agent-based simulation built from real streetscapes, inviting places drew residents back, felt ownership grew with each return, and civic action was judged more likely at places they returned to; aesthetic scores reached civic action only through returning. We propose that aesthetic invitation—environments worth attending to and returning to—helps residents experience shared spaces as “ours” and care for them.'
  },
  {
    // Abstract supplied verbatim in the conversation; authors and status from 01.cha_cv_umich.docx.
    id: 'llm-steering',
    title: 'Psychology’s New Lever: Steering the Good Life Inside Large Language Models',
    authors: 'Cha, Y., Yin, Y., Procaccio, A., & Oishi, S.',
    status: 'In preparation',
    abstract: 'Can psychologists manipulate an LLM’s internal representations to test elusive theories? Although theoretically distinct, concepts of the good life are entangled in human measurement (happiness, meaning, and psychological richness; Oishi & Westgate, 2022). In Study 1, we found that these dimensions occupy nearly orthogonal directions within an LLM’s representational space. In Study 2, we steered these directions as causal levers. In a decision-making task (collaborator choice), richness-steered agents explored more, happiness-steered agents explored less, and meaning steering had no effect. In preregistered Study 3, we tested whether a richness-steered LLM could renew interest in social issues that participants had initially dismissed. Compared with a baseline LLM, a conversation with a richness-steered LLM led participants to perceive the conversation as broadening their perspective and to report greater interest in an issue they had not previously cared about. No comparable pattern emerged under happiness steering. We discuss how locating and steering LLM representations can turn latent psychological constructs into experimentally manipulable variables.'
  },
  {
    // Abstract supplied verbatim in the conversation; manuscript metadata from 01.cha_cv_umich.docx.
    id: 'historical-good-life',
    title: 'The historical rise of exploration in conceptions of the good life',
    authors: 'Cha, Y., Ingram, M., Chen, E., & Oishi, S.',
    status: 'In preparation',
    abstract: 'We explored historical changes in conceptions of the ideal life through analysis of English and Chinese poetry. Study 1 analyzed 247,600 English poems (1000–2000 CE) using large language models to infer ideals of a "good life" expressed in each poem (e.g., comfort, purpose, variety). We then assessed how inferred ideals were semantically related to three types of the good life—happiness, meaning, and psychological richness. Results showed historical divergence among the three conceptions: meaning-centered ideals (e.g., fulfillment, purpose) declined steadily and sharply after the 1700s, happiness-centered ideals (e.g., joy, comfort) first rose and then fell around the 1700s, while psychological richness-centered ideals continued to increase—reflecting a broader shift toward more exploratory and adventurous conceptions of a good life. In contrast, Study 2 analyzed 127,591 pre-modern Chinese poems (618-1644 CE) and found no significant historical changes in life ideals. A forthcoming analysis will examine how changes in knowledge and technology predict whether such shifts in life ideals occur.'
  },
  {
    // Bibliographic information only, from 01.cha_cv_umich.docx.
    id: 'psychologically-rich-city',
    title: 'The Psychologically Rich City: Everyday Places of Discovery and the Intellectual Life of US Cities',
    authors: 'Cha, Y., Jeong, O., Yin, Y., Chen, A., Cai, Y., Liu, Y., Zhang, J., Bai, X., & Oishi, S.',
    status: 'In preparation'
  },
  {
    id: 'pathogen-threat',
    title: 'Multi-Decade Pathogen Threat and Social Ties: Strengthening Bonds, Weakening Bridges',
    authors: 'Choi, S., Jeong, O., Cha, Y., & Buttrick, N.',
    status: 'Second-round invited revision · Journal of Personality and Social Psychology'
  },
  {
    id: 'different-paths',
    title: 'Different Paths to a Good Life: Well-Being Across Populations with Different Levels of Material Prosperity',
    authors: 'Oishi, S., Xygalatas, D., Onyishi, I. E., Onyishi, C. N., Demidov, A. A., Kharitonov, A. N., Westgate, E., Cha, Y., & Sznycer, D.',
    status: 'Under review · Proceedings of the National Academy of Sciences'
  },
  {
    id: 'collective-rest',
    title: 'The Architecture of Collective Rest Predicts Cultural Freedom and Democracy Across 152 Nations',
    authors: 'Cha, Y., Wang, J., Wyer, M., & Oishi, S.',
    status: 'In preparation'
  },
  {
    id: 'night-on-earth',
    title: 'Night on Earth: The Psychological Value of Evening Light Depends on Perceived Nighttime Safety',
    authors: 'Cha, Y., Jeong, O., Ghandour, I., & Oishi, S.',
    status: 'In preparation'
  }
];
