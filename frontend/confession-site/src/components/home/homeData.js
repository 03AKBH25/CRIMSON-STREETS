// src/components/home/homeData.js

// ----------------------------
// 🔥 Utility Random Generator
// ----------------------------
const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// ----------------------------
// 🩸 Today's Dynamic Stats
// ----------------------------
export const generateTodayStats = () => {
  const emotions = [
    "Regret",
    "Longing",
    "Betrayal",
    "Desire",
    "Guilt",
    "Rage"
  ];

  const categories = [
    "Ex",
    "Family",
    "Crush",
    "Friend",
    "Wife",
    "Husband"
  ];

  return {
    confessionsToday: randomBetween(800, 2500),
    dominantEmotion:
      emotions[randomBetween(0, emotions.length - 1)],
    mostCategory:
      categories[randomBetween(0, categories.length - 1)],
    activeUsers: randomBetween(12, 67),
  };
};

// ----------------------------
// 🏰 Past Days Archive
// ----------------------------
export const pastDaysStats = [
  { day: "Yesterday", count: 1432 },
  { day: "2 Days Ago", count: 1218 },
  { day: "3 Days Ago", count: 1674 },
  { day: "4 Days Ago", count: 1093 },
];

// ----------------------------
// 🌒 Gothic Prompts
// ----------------------------
export const prompts = [
  "Whose name still aches in silence?",
  "What truth do you hide behind your smile?",
  "Which love did you destroy with your pride?",
  "What apology still burns in your throat?",
  "Who do you pretend not to miss?",
  "What night changed you forever?"
];

// ----------------------------
// 🌫 Whisper Wall Lines
// ----------------------------
export const whispers = [
  "I never told her how much it hurt...",
  "I stayed even when I was breaking...",
  "He deserved better than me...",
  "I smiled while falling apart...",
  "I still read our old messages at 2am...",
  "I lied when I said I moved on...",
  "I wish I could undo that night...",
  "No one knows how lonely I really am..."
];

// ----------------------------
// 🕯 Ritual Secrets
// ----------------------------
export const ritualSecrets = [
  "I loved her more than my pride would allow.",
  "I sabotaged the only person who truly cared.",
  "I still stalk my ex every week.",
  "I pretend to hate him but I still crave him.",
  "I envy my best friend’s happiness.",
  "I ruined something beautiful because I was afraid."
];

// ----------------------------
// 🧿 Mood Sigils
// ----------------------------
export const moods = [
  "Regret",
  "Longing",
  "Betrayal",
  "Desire",
  "Guilt",
  "Rage"
];