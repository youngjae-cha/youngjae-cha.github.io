export type Reading = {
  title: string;
  authors: string;
  publication: string;
  year: number;
  url: string;
  note: string;
};

export type ReadingGroup = {
  id: string;
  label: string;
  question: string;
  readings: Reading[];
};

// Years identify the original editions; Wiley digitized the 2005 chapters in 2015.
export const readingGroups: ReadingGroup[] = [
  {
    id: 'ecology',
    label: 'Social ecology',
    question: 'How does the environment get into the mind?',
    readings: [
      {
        title: 'Social Ecology: Lost and Found in Psychological Science',
        authors: 'Shigehiro Oishi & Jesse Graham',
        publication: 'Perspectives on Psychological Science',
        year: 2010,
        url: 'https://doi.org/10.1177/1745691610374588',
        note: 'How do institutions, geography, and everyday surroundings become part of psychological explanation?',
      },
      {
        title: 'The crowded life is a slow life: Population density and life history strategy',
        authors: 'Oliver Sng, Steven L. Neuberg, Michael E. W. Varnum & Douglas T. Kenrick',
        publication: 'Journal of Personality and Social Psychology',
        year: 2017,
        url: 'https://doi.org/10.1037/pspi0000086',
        note: 'Can living among more people change how far ahead we plan? Connecting population density to individual life strategies.',
      },
      {
        title: 'Residential mobility breeds familiarity-seeking',
        authors: 'Shigehiro Oishi, Felicity F. Miao, Minkyung Koo, Jason Kisling & Kate A. Ratliff',
        publication: 'Journal of Personality and Social Psychology',
        year: 2012,
        url: 'https://doi.org/10.1037/a0024949',
        note: 'Moving somewhere new can make familiar things more appealing—a connection between changes in our surroundings and what we seek.',
      },
      {
        title: 'Contest and scramble competition: patterns of female aggression and ranging behavior among primates',
        authors: 'Lynne A. Isbell',
        publication: 'Behavioral Ecology',
        year: 1991,
        url: 'https://doi.org/10.1093/beheco/2.2.143',
        note: 'How does the distribution of food shape competition? A view of social behavior through the environments primates inhabit.',
      },
    ],
  },
  {
    id: 'evolution',
    label: 'Evolution & adaptation',
    question: 'What is the mind built to do?',
    readings: [
      {
        title: 'Conceptual Foundations of Evolutionary Psychology',
        authors: 'John Tooby & Leda Cosmides',
        publication: 'The Handbook of Evolutionary Psychology · Chapter 1',
        year: 2005,
        url: 'https://doi.org/10.1002/9780470939376.ch1',
        note: 'What changes when we ask what a mental mechanism evolved to do, as well as how it works?',
      },
      {
        title: 'Life History Theory and Evolutionary Psychology',
        authors: 'Hillard S. Kaplan & Steven W. Gangestad',
        publication: 'The Handbook of Evolutionary Psychology · Chapter 2',
        year: 2005,
        url: 'https://doi.org/10.1002/9780470939376.ch2',
        note: 'Time and energy are finite. Life history theory asks how organisms allocate them across growth, reproduction, and parenting.',
      },
      {
        title: 'Domain Specificity and Intuitive Ontology',
        authors: 'Pascal Boyer & H. Clark Barrett',
        publication: 'The Handbook of Evolutionary Psychology · Chapter 3',
        year: 2005,
        url: 'https://doi.org/10.1002/9780470939376.ch3',
        note: 'Do we understand objects, living things, and people through the same mental machinery? A case for specialized cognitive systems.',
      },
      {
        title: 'Evolutionary Social Psychology',
        authors: 'Steven L. Neuberg, Douglas T. Kenrick & Mark Schaller',
        publication: 'Handbook of Social Psychology',
        year: 2010,
        url: 'https://doi.org/10.1002/9780470561119.socpsy002021',
        note: 'Connecting everyday social motives and responses to situations with evolutionary questions about their functions.',
      },
      {
        title: 'Renovating the Pyramid of Needs: Contemporary Extensions Built Upon Ancient Foundations',
        authors: 'Douglas T. Kenrick, Vladas Griskevicius, Steven L. Neuberg & Mark Schaller',
        publication: 'Perspectives on Psychological Science',
        year: 2010,
        url: 'https://doi.org/10.1177/1745691610369469',
        note: 'Revisiting Maslow’s familiar pyramid: how motives develop, overlap, and become more or less pressing as circumstances change.',
      },
    ],
  },
  {
    id: 'group-life',
    label: 'Groups & cultural learning',
    question: 'Why do we stay, follow, and learn from others?',
    readings: [
      {
        title: 'Social Identity as Social Glue: The Origins of Group Loyalty',
        authors: 'Mark Van Vugt & Claire M. Hart',
        publication: 'Journal of Personality and Social Psychology',
        year: 2004,
        url: 'https://doi.org/10.1037/0022-3514.86.4.585',
        note: 'Why stay with a group when leaving could pay more? Experiments on identification, loyalty, and the value of belonging.',
      },
      {
        title: 'The evolution of prestige: Freely conferred deference as a mechanism for enhancing the benefits of cultural transmission',
        authors: 'Joseph Henrich & Francisco J. Gil-White',
        publication: 'Evolution and Human Behavior',
        year: 2001,
        url: 'https://doi.org/10.1016/S1090-5138(00)00071-4',
        note: 'Why do we willingly defer to some people? A theory linking prestige to the benefits of learning from others.',
      },
    ],
  },
  {
    id: 'thinking',
    label: 'Thinking & valuing',
    question: 'How do we make sense of people—and a good life?',
    readings: [
      {
        title: 'Social Psychologists and Thinking about People',
        authors: 'Roy F. Baumeister',
        publication: 'Advanced Social Psychology: The State of the Science · Chapter 1',
        year: 2010,
        url: 'https://books.google.com/books/about/Advanced_Social_Psychology.html?id=gVTsgBuRtOEC',
        note: 'The different pictures of human nature behind social psychology, and how those pictures guide the questions researchers ask.',
      },
      {
        title: 'Thinking backward: Some curable and incurable consequences of cognitive busyness',
        authors: 'Daniel T. Gilbert & Randall E. Osborne',
        publication: 'Journal of Personality and Social Psychology',
        year: 1989,
        url: 'https://doi.org/10.1037/0022-3514.57.6.940',
        note: 'Can we undo an impression formed while distracted? Correcting the original judgment may not undo the inferences built on it.',
      },
      {
        title: 'Motivated inference: Self-serving generation and evaluation of causal theories',
        authors: 'Ziva Kunda',
        publication: 'Journal of Personality and Social Psychology',
        year: 1987,
        url: 'https://doi.org/10.1037/0022-3514.53.4.636',
        note: 'How what we want to believe shapes the causal explanations we generate and the evidence we accept.',
      },
      {
        title: 'Concepts of happiness across time and cultures',
        authors: 'Shigehiro Oishi, Jesse Graham, Selin Kesebir & Iolanda Costa Galinha',
        publication: 'Personality and Social Psychology Bulletin',
        year: 2013,
        url: 'https://doi.org/10.1177/0146167213480042',
        note: 'Happiness has not always meant feeling good. Its changing meanings invite us to examine what our measures take for granted.',
      },
    ],
  },
  {
    id: 'theory-and-methods',
    label: 'Theory & methods',
    question: 'How do we turn an idea into a research question?',
    readings: [
      {
        title: 'Handbook of Theories of Social Psychology: Volume 1',
        authors: 'Paul A. M. Van Lange, Arie W. Kruglanski & E. Tory Higgins (Eds.)',
        publication: 'SAGE',
        year: 2012,
        url: 'https://doi.org/10.4135/9781446249215',
        note: 'A collection of explanations for social behavior—a companion for asking what a theory predicts and how to test it.',
      },
      {
        title: 'Concept Mover’s Distance: measuring concept engagement via word embeddings in texts',
        authors: 'Dustin S. Stoltz & Marshall A. Taylor',
        publication: 'Journal of Computational Social Science',
        year: 2019,
        url: 'https://doi.org/10.1007/s42001-019-00048-6',
        note: 'How can a text engage with an idea without naming it? A way to connect theoretical concepts to word embeddings.',
      },
    ],
  },
];
