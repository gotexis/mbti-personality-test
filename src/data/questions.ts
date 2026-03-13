export interface Question {
  id: number;
  text: string;
  dimension: "EI" | "SN" | "TF" | "JP";
  direction: 1 | -1; // 1 = toward E/N/T/J; -1 = toward I/S/F/P
}

export const questions: Question[] = [
  // E/I dimension (15 questions)
  { id: 1, text: "You regularly make new friends.", dimension: "EI", direction: 1 },
  { id: 2, text: "You prefer to stay home with a good book rather than go to a party.", dimension: "EI", direction: -1 },
  { id: 3, text: "At social events, you rarely try to introduce yourself to new people and mostly talk to ones you already know.", dimension: "EI", direction: -1 },
  { id: 4, text: "You feel energized after spending time in a large group of people.", dimension: "EI", direction: 1 },
  { id: 5, text: "You need regular alone time to recharge.", dimension: "EI", direction: -1 },
  { id: 6, text: "You are the first to speak up in a group discussion.", dimension: "EI", direction: 1 },
  { id: 7, text: "You often prefer to let others take the lead in conversations.", dimension: "EI", direction: -1 },
  { id: 8, text: "You enjoy being the center of attention.", dimension: "EI", direction: 1 },
  { id: 9, text: "You find it draining to meet a lot of new people.", dimension: "EI", direction: -1 },
  { id: 10, text: "You are comfortable striking up conversations with strangers.", dimension: "EI", direction: 1 },
  { id: 11, text: "You prefer working in a team over working alone.", dimension: "EI", direction: 1 },
  { id: 12, text: "You tend to think before you speak.", dimension: "EI", direction: -1 },
  { id: 13, text: "You feel comfortable in unfamiliar social situations.", dimension: "EI", direction: 1 },
  { id: 14, text: "You prefer deep one-on-one conversations over group activities.", dimension: "EI", direction: -1 },
  { id: 15, text: "People would describe you as outgoing.", dimension: "EI", direction: 1 },

  // S/N dimension (15 questions)
  { id: 16, text: "You spend a lot of time exploring various random topics that pique your interest.", dimension: "SN", direction: 1 },
  { id: 17, text: "You prefer dealing with facts and concrete information rather than ideas and theories.", dimension: "SN", direction: -1 },
  { id: 18, text: "You often think about what could be rather than what is.", dimension: "SN", direction: 1 },
  { id: 19, text: "You pay close attention to details and rarely miss small things.", dimension: "SN", direction: -1 },
  { id: 20, text: "You enjoy abstract and theoretical discussions.", dimension: "SN", direction: 1 },
  { id: 21, text: "You trust your hands-on experience more than your imagination.", dimension: "SN", direction: -1 },
  { id: 22, text: "You often see patterns and connections that others miss.", dimension: "SN", direction: 1 },
  { id: 23, text: "You prefer step-by-step instructions over figuring things out yourself.", dimension: "SN", direction: -1 },
  { id: 24, text: "You are drawn to novel ideas and unconventional approaches.", dimension: "SN", direction: 1 },
  { id: 25, text: "You value practical solutions over innovative ones.", dimension: "SN", direction: -1 },
  { id: 26, text: "You frequently daydream or get lost in thought.", dimension: "SN", direction: 1 },
  { id: 27, text: "You focus more on the present moment than future possibilities.", dimension: "SN", direction: -1 },
  { id: 28, text: "You enjoy exploring the meaning behind things.", dimension: "SN", direction: 1 },
  { id: 29, text: "You prefer to rely on tried-and-true methods.", dimension: "SN", direction: -1 },
  { id: 30, text: "You are more interested in the big picture than the details.", dimension: "SN", direction: 1 },

  // T/F dimension (15 questions)
  { id: 31, text: "Seeing other people cry can easily make you feel like you want to cry too.", dimension: "TF", direction: -1 },
  { id: 32, text: "You prioritize logic over feelings when making decisions.", dimension: "TF", direction: 1 },
  { id: 33, text: "You find it important to consider how others feel before expressing your opinion.", dimension: "TF", direction: -1 },
  { id: 34, text: "You value truth over tactfulness.", dimension: "TF", direction: 1 },
  { id: 35, text: "You are easily moved by stories of hardship or struggle.", dimension: "TF", direction: -1 },
  { id: 36, text: "When someone shares a problem, your first instinct is to offer a solution rather than sympathy.", dimension: "TF", direction: 1 },
  { id: 37, text: "You often base your decisions on what feels right rather than what makes logical sense.", dimension: "TF", direction: -1 },
  { id: 38, text: "You think being objective is more important than being supportive.", dimension: "TF", direction: 1 },
  { id: 39, text: "You are deeply affected by the moods of people around you.", dimension: "TF", direction: -1 },
  { id: 40, text: "You believe the best decisions come from careful analysis, not gut feelings.", dimension: "TF", direction: 1 },
  { id: 41, text: "You go out of your way to make others feel included and valued.", dimension: "TF", direction: -1 },
  { id: 42, text: "You have no problem pointing out someone's mistake if it helps them improve.", dimension: "TF", direction: 1 },
  { id: 43, text: "You often put others' needs before your own.", dimension: "TF", direction: -1 },
  { id: 44, text: "You believe fairness is more about consistent rules than individual circumstances.", dimension: "TF", direction: 1 },
  { id: 45, text: "You find it hard to stay detached when someone shares their emotional struggles.", dimension: "TF", direction: -1 },

  // J/P dimension (15 questions)
  { id: 46, text: "You often make a backup plan for a backup plan.", dimension: "JP", direction: 1 },
  { id: 47, text: "You prefer to keep your options open rather than commit to a fixed plan.", dimension: "JP", direction: -1 },
  { id: 48, text: "You feel stressed when things are disorganized.", dimension: "JP", direction: 1 },
  { id: 49, text: "You enjoy spontaneity and dislike rigid schedules.", dimension: "JP", direction: -1 },
  { id: 50, text: "You like to have a clear plan before starting a project.", dimension: "JP", direction: 1 },
  { id: 51, text: "You often leave things to the last minute and still get them done.", dimension: "JP", direction: -1 },
  { id: 52, text: "You feel satisfied when you check items off your to-do list.", dimension: "JP", direction: 1 },
  { id: 53, text: "You find strict routines stifling rather than comforting.", dimension: "JP", direction: -1 },
  { id: 54, text: "You prefer to finish one task completely before moving to the next.", dimension: "JP", direction: 1 },
  { id: 55, text: "You frequently change your plans based on how you feel in the moment.", dimension: "JP", direction: -1 },
  { id: 56, text: "You believe deadlines should be taken seriously.", dimension: "JP", direction: 1 },
  { id: 57, text: "You like to explore multiple tasks at the same time.", dimension: "JP", direction: -1 },
  { id: 58, text: "You keep your living and working spaces neat and organized.", dimension: "JP", direction: 1 },
  { id: 59, text: "You see rules more as guidelines that can be bent.", dimension: "JP", direction: -1 },
  { id: 60, text: "You prefer to have things settled and decided rather than open-ended.", dimension: "JP", direction: 1 },
];
