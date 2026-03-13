export interface MBTIType {
  code: string;
  name: string;
  group: "Analysts" | "Diplomats" | "Sentinels" | "Explorers";
  groupEmoji: string;
  tagline: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  careers: string[];
  famousPeople: string[];
  compatibility: string[];
  traits: { label: string; value: string }[];
}

export const mbtiTypes: MBTIType[] = [
  {
    code: "INTJ",
    name: "Architect",
    group: "Analysts",
    groupEmoji: "🧠",
    tagline: "Imaginative and strategic thinkers, with a plan for everything.",
    description:
      "INTJs are analytical problem-solvers, eager to improve systems and processes with their innovative ideas. They have a talent for seeing possibilities for improvement, whether at work, at home, or in themselves. INTJs are often perfectionists with extremely high standards of performance for themselves and others. They tend to have a keen interest in self-improvement and are lifelong learners, always seeking to add to their base of information and awareness.",
    strengths: ["Strategic thinking", "Independent", "Determined", "Innovative", "Honest and direct"],
    weaknesses: ["Arrogant", "Dismissive of emotions", "Overly critical", "Combative", "Socially clueless"],
    careers: ["Scientist", "Software Engineer", "Investment Banker", "Architect", "Project Manager"],
    famousPeople: ["Elon Musk", "Friedrich Nietzsche", "Michelle Obama", "Christopher Nolan"],
    compatibility: ["ENFP", "ENTP"],
    traits: [
      { label: "Energy", value: "Introverted" },
      { label: "Mind", value: "Intuitive" },
      { label: "Nature", value: "Thinking" },
      { label: "Tactics", value: "Judging" },
    ],
  },
  {
    code: "INTP",
    name: "Logician",
    group: "Analysts",
    groupEmoji: "🧠",
    tagline: "Innovative inventors with an unquenchable thirst for knowledge.",
    description:
      "INTPs are philosophical innovators, fascinated by logical analysis, systems, and design. They are preoccupied with theory and search for the universal law behind everything they see. They want to understand the unifying themes of life, in all their complexity. INTPs are detached, analytical observers who can seem oblivious to the world around them because they are so deeply absorbed in thought.",
    strengths: ["Analytical", "Original", "Open-minded", "Curious", "Objective"],
    weaknesses: ["Disconnected", "Insensitive", "Absent-minded", "Condescending", "Impatient"],
    careers: ["Mathematician", "Philosopher", "Software Developer", "Data Analyst", "Forensic Scientist"],
    famousPeople: ["Albert Einstein", "Bill Gates", "Marie Curie", "Charles Darwin"],
    compatibility: ["ENTJ", "ENFJ"],
    traits: [
      { label: "Energy", value: "Introverted" },
      { label: "Mind", value: "Intuitive" },
      { label: "Nature", value: "Thinking" },
      { label: "Tactics", value: "Perceiving" },
    ],
  },
  {
    code: "ENTJ",
    name: "Commander",
    group: "Analysts",
    groupEmoji: "🧠",
    tagline: "Bold, imaginative and strong-willed leaders, always finding a way.",
    description:
      "ENTJs are strategic leaders, motivated to organize change. They are quick to see inefficiency and conceptualize new solutions, and enjoy developing long-range plans to accomplish their vision. They excel at logical reasoning and are usually articulate and quick-witted. ENTJs are forceful personalities who enjoy leading and making decisions.",
    strengths: ["Efficient", "Energetic", "Self-confident", "Strong-willed", "Strategic thinker"],
    weaknesses: ["Stubborn", "Intolerant", "Impatient", "Arrogant", "Poor handling of emotions"],
    careers: ["CEO", "Lawyer", "Management Consultant", "University Professor", "Entrepreneur"],
    famousPeople: ["Steve Jobs", "Margaret Thatcher", "Napoleon Bonaparte", "Gordon Ramsay"],
    compatibility: ["INTP", "INFP"],
    traits: [
      { label: "Energy", value: "Extraverted" },
      { label: "Mind", value: "Intuitive" },
      { label: "Nature", value: "Thinking" },
      { label: "Tactics", value: "Judging" },
    ],
  },
  {
    code: "ENTP",
    name: "Debater",
    group: "Analysts",
    groupEmoji: "🧠",
    tagline: "Smart and curious thinkers who cannot resist an intellectual challenge.",
    description:
      "ENTPs are inspired innovators, motivated to find new solutions to intellectually challenging problems. They are curious and clever, and seek to comprehend the people, systems, and principles that surround them. Open-minded and unconventional, ENTPs want to analyze, understand, and influence other people. ENTPs enjoy playing with ideas and are often accomplished at reading people.",
    strengths: ["Knowledgeable", "Quick thinker", "Original", "Excellent brainstormer", "Charismatic"],
    weaknesses: ["Argumentative", "Insensitive", "Intolerant", "Unfocused", "Difficulty with practical matters"],
    careers: ["Entrepreneur", "Lawyer", "Creative Director", "Financial Analyst", "Consultant"],
    famousPeople: ["Thomas Edison", "Mark Twain", "Tom Hanks", "Celine Dion"],
    compatibility: ["INTJ", "INFJ"],
    traits: [
      { label: "Energy", value: "Extraverted" },
      { label: "Mind", value: "Intuitive" },
      { label: "Nature", value: "Thinking" },
      { label: "Tactics", value: "Perceiving" },
    ],
  },
  {
    code: "INFJ",
    name: "Advocate",
    group: "Diplomats",
    groupEmoji: "💚",
    tagline: "Quiet and mystical, yet very inspiring and tireless idealists.",
    description:
      "INFJs are creative nurturers with a strong sense of personal integrity and a drive to help others realize their potential. Creative and dedicated, they have a talent for helping others with original solutions to their personal challenges. INFJs are the rarest personality type, making up less than 2% of the population. They are idealistic and principled, not content to coast through life.",
    strengths: ["Creative", "Insightful", "Principled", "Passionate", "Altruistic"],
    weaknesses: ["Sensitive to criticism", "Reluctant to open up", "Perfectionistic", "Avoiding confrontation", "Prone to burnout"],
    careers: ["Counselor", "Psychologist", "Writer", "Human Resources", "Social Worker"],
    famousPeople: ["Martin Luther King Jr.", "Nelson Mandela", "Mother Teresa", "Lady Gaga"],
    compatibility: ["ENTP", "ENFP"],
    traits: [
      { label: "Energy", value: "Introverted" },
      { label: "Mind", value: "Intuitive" },
      { label: "Nature", value: "Feeling" },
      { label: "Tactics", value: "Judging" },
    ],
  },
  {
    code: "INFP",
    name: "Mediator",
    group: "Diplomats",
    groupEmoji: "💚",
    tagline: "Poetic, kind and altruistic people, always eager to help a good cause.",
    description:
      "INFPs are imaginative idealists, guided by their own core values and beliefs. To an INFP, possibilities are paramount; the reality of the moment is only of passing concern. They see potential for a better future, and pursue truth and meaning with their own flair. INFPs are sensitive, caring, and compassionate, and are deeply concerned with personal growth for themselves and others.",
    strengths: ["Empathetic", "Generous", "Open-minded", "Creative", "Passionate"],
    weaknesses: ["Unrealistic", "Self-isolating", "Unfocused", "Emotionally vulnerable", "Desperate to please"],
    careers: ["Writer", "Musician", "Graphic Designer", "Therapist", "Librarian"],
    famousPeople: ["William Shakespeare", "J.R.R. Tolkien", "Princess Diana", "Johnny Depp"],
    compatibility: ["ENTJ", "ENFJ"],
    traits: [
      { label: "Energy", value: "Introverted" },
      { label: "Mind", value: "Intuitive" },
      { label: "Nature", value: "Feeling" },
      { label: "Tactics", value: "Perceiving" },
    ],
  },
  {
    code: "ENFJ",
    name: "Protagonist",
    group: "Diplomats",
    groupEmoji: "💚",
    tagline: "Charismatic and inspiring leaders, able to mesmerize their listeners.",
    description:
      "ENFJs are idealist organizers, driven to implement their vision of what is best for humanity. They often act as catalysts for human growth because of their ability to see potential in other people and their charisma in persuading others to their ideas. ENFJs are focused on values and vision, and are passionate about the possibilities for people.",
    strengths: ["Tolerant", "Reliable", "Charismatic", "Altruistic", "Natural leader"],
    weaknesses: ["Overly idealistic", "Too selfless", "Too sensitive", "Fluctuating self-esteem", "Indecisive"],
    careers: ["Teacher", "HR Manager", "Sales Manager", "Public Relations", "Life Coach"],
    famousPeople: ["Barack Obama", "Oprah Winfrey", "Martin Luther King Jr.", "Jennifer Lawrence"],
    compatibility: ["INTP", "INFP"],
    traits: [
      { label: "Energy", value: "Extraverted" },
      { label: "Mind", value: "Intuitive" },
      { label: "Nature", value: "Feeling" },
      { label: "Tactics", value: "Judging" },
    ],
  },
  {
    code: "ENFP",
    name: "Campaigner",
    group: "Diplomats",
    groupEmoji: "💚",
    tagline: "Enthusiastic, creative and sociable free spirits who can always find a reason to smile.",
    description:
      "ENFPs are people-centered creators with a focus on possibilities and a contagious enthusiasm for new ideas, people and activities. Energetic, warm, and passionate, ENFPs love to help other people explore their creative potential. ENFPs are typically agile and expressive communicators, using their wit, humor, and mastery of language to create engaging stories.",
    strengths: ["Curious", "Observant", "Energetic", "Enthusiastic", "Excellent communicator"],
    weaknesses: ["Poor practical skills", "Difficulty focusing", "Overthinking", "Easily stressed", "Overly accommodating"],
    careers: ["Journalist", "Actor", "Consultant", "Psychologist", "Entrepreneur"],
    famousPeople: ["Robin Williams", "Robert Downey Jr.", "Quentin Tarantino", "Walt Disney"],
    compatibility: ["INTJ", "INFJ"],
    traits: [
      { label: "Energy", value: "Extraverted" },
      { label: "Mind", value: "Intuitive" },
      { label: "Nature", value: "Feeling" },
      { label: "Tactics", value: "Perceiving" },
    ],
  },
  {
    code: "ISTJ",
    name: "Logistician",
    group: "Sentinels",
    groupEmoji: "🛡️",
    tagline: "Practical and fact-minded individuals, whose reliability cannot be doubted.",
    description:
      "ISTJs are responsible organizers, driven to create and enforce order within systems and institutions. They are neat and orderly, inside and out, and tend to have a procedure for everything they do. Reliable and dutiful, ISTJs want to uphold tradition and follow regulations. ISTJs are steady and productive contributors who take responsibility seriously.",
    strengths: ["Honest and direct", "Strong-willed", "Responsible", "Calm and practical", "Jack of all trades"],
    weaknesses: ["Stubborn", "Insensitive", "Always by the book", "Judgmental", "Often unreasonably blame themselves"],
    careers: ["Accountant", "Auditor", "Military Officer", "Financial Analyst", "Supply Chain Manager"],
    famousPeople: ["George Washington", "Angela Merkel", "Warren Buffett", "Natalie Portman"],
    compatibility: ["ESFP", "ESTP"],
    traits: [
      { label: "Energy", value: "Introverted" },
      { label: "Mind", value: "Observant" },
      { label: "Nature", value: "Thinking" },
      { label: "Tactics", value: "Judging" },
    ],
  },
  {
    code: "ISFJ",
    name: "Defender",
    group: "Sentinels",
    groupEmoji: "🛡️",
    tagline: "Very dedicated and warm protectors, always ready to defend their loved ones.",
    description:
      "ISFJs are industrious caretakers, loyal to traditions and organizations. They are practical, compassionate, and caring, and are motivated to provide for others and protect them from the perils of life. ISFJs are conventional and grounded, and enjoy contributing to established structures of society. They are steady and committed workers with a deep sense of responsibility.",
    strengths: ["Supportive", "Reliable", "Patient", "Observant", "Enthusiastic"],
    weaknesses: ["Humble and shy", "Take things personally", "Repress feelings", "Overload themselves", "Reluctant to change"],
    careers: ["Nurse", "Elementary Teacher", "Social Worker", "Office Manager", "Bookkeeper"],
    famousPeople: ["Queen Elizabeth II", "Beyoncé", "Kate Middleton", "Vin Diesel"],
    compatibility: ["ESFP", "ESTP"],
    traits: [
      { label: "Energy", value: "Introverted" },
      { label: "Mind", value: "Observant" },
      { label: "Nature", value: "Feeling" },
      { label: "Tactics", value: "Judging" },
    ],
  },
  {
    code: "ESTJ",
    name: "Executive",
    group: "Sentinels",
    groupEmoji: "🛡️",
    tagline: "Excellent administrators, unsurpassed at managing things or people.",
    description:
      "ESTJs are hardworking traditionalists, eager to take charge in organizing projects and people. Orderly, rule-abiding, and conscientious, ESTJs like to get things done, and tend to go about projects in a systematic, methodical way. They are the backbone of many communities, providing stability and structure wherever they go.",
    strengths: ["Dedicated", "Strong-willed", "Direct and honest", "Loyal", "Patient and reliable"],
    weaknesses: ["Inflexible", "Uncomfortable with unconventional situations", "Judgmental", "Too focused on social status", "Difficulty relaxing"],
    careers: ["Judge", "Financial Officer", "School Administrator", "Business Manager", "Police Officer"],
    famousPeople: ["Sonia Sotomayor", "Frank Sinatra", "John D. Rockefeller", "Judge Judy"],
    compatibility: ["ISFP", "ISTP"],
    traits: [
      { label: "Energy", value: "Extraverted" },
      { label: "Mind", value: "Observant" },
      { label: "Nature", value: "Thinking" },
      { label: "Tactics", value: "Judging" },
    ],
  },
  {
    code: "ESFJ",
    name: "Consul",
    group: "Sentinels",
    groupEmoji: "🛡️",
    tagline: "Extraordinarily caring, social and popular people, always eager to help.",
    description:
      "ESFJs are conscientious helpers, sensitive to the needs of others and energetically dedicated to their responsibilities. They are highly attuned to their emotional environment and attentive to both the feelings of others and the perception others have of them. ESFJs like a sense of harmony and cooperation around them, and are eager to please and provide.",
    strengths: ["Strong practical skills", "Strong sense of duty", "Very loyal", "Sensitive and warm", "Good at connecting"],
    weaknesses: ["Worried about social status", "Inflexible", "Reluctant to innovate", "Vulnerable to criticism", "Too needy"],
    careers: ["Healthcare Administrator", "Counselor", "Event Planner", "Real Estate Agent", "Teacher"],
    famousPeople: ["Taylor Swift", "Bill Clinton", "Jennifer Garner", "Ed Sheeran"],
    compatibility: ["ISFP", "ISTP"],
    traits: [
      { label: "Energy", value: "Extraverted" },
      { label: "Mind", value: "Observant" },
      { label: "Nature", value: "Feeling" },
      { label: "Tactics", value: "Judging" },
    ],
  },
  {
    code: "ISTP",
    name: "Virtuoso",
    group: "Explorers",
    groupEmoji: "🔧",
    tagline: "Bold and practical experimenters, masters of all kinds of tools.",
    description:
      "ISTPs are observant artisans with an understanding of mechanics and an interest in troubleshooting. They approach their environments with a flexible logic, looking for practical solutions to the problems at hand. Independent and adaptable, ISTPs will often interact with the world in a self-directed, spontaneous manner. ISTPs are attentive to details and responsive to the demands of the world around them.",
    strengths: ["Optimistic and energetic", "Creative and practical", "Spontaneous and rational", "Know how to prioritize", "Great in a crisis"],
    weaknesses: ["Stubborn", "Insensitive", "Private and reserved", "Easily bored", "Dislike commitment"],
    careers: ["Mechanic", "Engineer", "Pilot", "Forensic Scientist", "Software Developer"],
    famousPeople: ["Clint Eastwood", "Bear Grylls", "Michael Jordan", "Tom Cruise"],
    compatibility: ["ESTJ", "ESFJ"],
    traits: [
      { label: "Energy", value: "Introverted" },
      { label: "Mind", value: "Observant" },
      { label: "Nature", value: "Thinking" },
      { label: "Tactics", value: "Perceiving" },
    ],
  },
  {
    code: "ISFP",
    name: "Adventurer",
    group: "Explorers",
    groupEmoji: "🔧",
    tagline: "Flexible and charming artists, always ready to explore and experience something new.",
    description:
      "ISFPs are gentle caretakers who live in the present moment and enjoy their surroundings with cheerful, low-key enthusiasm. They are flexible and spontaneous, and like to go with the flow to enjoy what life has to offer. ISFPs are quiet and unassuming, and may be hard to get to know. However, to those who know them well, they are warm and friendly, eager to share in life's experiences.",
    strengths: ["Charming", "Sensitive to others", "Imaginative", "Passionate", "Curious"],
    weaknesses: ["Fiercely independent", "Unpredictable", "Easily stressed", "Overly competitive", "Fluctuating self-esteem"],
    careers: ["Fashion Designer", "Chef", "Veterinarian", "Graphic Designer", "Massage Therapist"],
    famousPeople: ["Bob Dylan", "Frida Kahlo", "Lana Del Rey", "David Beckham"],
    compatibility: ["ESTJ", "ESFJ"],
    traits: [
      { label: "Energy", value: "Introverted" },
      { label: "Mind", value: "Observant" },
      { label: "Nature", value: "Feeling" },
      { label: "Tactics", value: "Perceiving" },
    ],
  },
  {
    code: "ESTP",
    name: "Entrepreneur",
    group: "Explorers",
    groupEmoji: "🔧",
    tagline: "Smart, energetic and very perceptive people who truly enjoy living on the edge.",
    description:
      "ESTPs are energetic thrillseekers who are at their best when putting out fires, whether literal or metaphorical. They bring a sense of dynamic energy to their interactions with others and the world around them. They assess situations quickly and move adeptly to respond to immediate problems with practical solutions. ESTPs are active people who want to solve problems by doing, not theorizing.",
    strengths: ["Bold", "Rational and practical", "Original", "Perceptive", "Direct"],
    weaknesses: ["Insensitive", "Impatient", "Risk-prone", "Unstructured", "May miss the bigger picture"],
    careers: ["Sales Agent", "Paramedic", "Detective", "Entrepreneur", "Athletic Trainer"],
    famousPeople: ["Ernest Hemingway", "Madonna", "Donald Trump", "Eddie Murphy"],
    compatibility: ["ISTJ", "ISFJ"],
    traits: [
      { label: "Energy", value: "Extraverted" },
      { label: "Mind", value: "Observant" },
      { label: "Nature", value: "Thinking" },
      { label: "Tactics", value: "Perceiving" },
    ],
  },
  {
    code: "ESFP",
    name: "Entertainer",
    group: "Explorers",
    groupEmoji: "🔧",
    tagline: "Spontaneous, energetic and enthusiastic people — life is never boring around them.",
    description:
      "ESFPs are vivacious entertainers who charm and engage those around them. They are spontaneous, energetic, and fun-loving, and take pleasure in the things around them: food, clothes, nature, animals, and especially people. ESFPs are typically warm and talkative and have a contagious enthusiasm for life. They like to be in the center of attention and enjoy making others smile.",
    strengths: ["Bold", "Original", "Aesthetics and showmanship", "Practical", "Observant"],
    weaknesses: ["Sensitive", "Conflict-averse", "Easily bored", "Poor long-term planners", "Unfocused"],
    careers: ["Event Planner", "Tour Guide", "Actor", "Flight Attendant", "Fitness Trainer"],
    famousPeople: ["Marilyn Monroe", "Adele", "Jamie Oliver", "Adam Levine"],
    compatibility: ["ISTJ", "ISFJ"],
    traits: [
      { label: "Energy", value: "Extraverted" },
      { label: "Mind", value: "Observant" },
      { label: "Nature", value: "Feeling" },
      { label: "Tactics", value: "Perceiving" },
    ],
  },
];

export const groupColors: Record<string, { bg: string; text: string; badge: string }> = {
  Analysts: { bg: "bg-purple-50", text: "text-purple-700", badge: "badge-primary" },
  Diplomats: { bg: "bg-green-50", text: "text-green-700", badge: "badge-success" },
  Sentinels: { bg: "bg-blue-50", text: "text-blue-700", badge: "badge-info" },
  Explorers: { bg: "bg-amber-50", text: "text-amber-700", badge: "badge-warning" },
};
