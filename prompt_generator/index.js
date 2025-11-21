// 📦 prompt_generator/index.js
// Developer Sync: Based on Numerology5 Identity Tracker — Reflects evolving daily prompts per identity

function generateDailyPrompt({ date, numerology, keywords, identities }) {
  return {
    date,
    numerology,
    keywords,
    identities
  };
}

// 🕐 YESTERDAY – Numerology 4: Structure, Foundation
const yesterday = generateDailyPrompt({
  date: "05/08/2025",
  numerology: 4,
  keywords: ["Foundation", "Discipline", "Stability"],
  identities: {
    "brforeal@gmail.com": {
      codename: "Code Organizer",
      prompt: "What part of your codebase deserves stability today?"
    },
    "brforeal.dev@gmail.com": {
      codename: "System Refiner",
      prompt: "What system routine can you strengthen before it becomes chaotic?"
    },
    "bmichaelh13@gmail.com": {
      codename: "Code Librarian",
      prompt: "Which function or folder needs better architecture?"
    }
  }
});

// 📍 TODAY – Numerology 5: Movement, Disruption, Flow
const today = generateDailyPrompt({
  date: "05/09/2025",
  numerology: 5,
  keywords: ["Freedom", "Creativity", "Disruption", "Navigation"],
  identities: {
    "brforeal@gmail.com": {
      codename: "Code Innovator",
      prompt: "What self-imposed rule are you ready to break in order to innovate?"
    },
    "brforeal.dev@gmail.com": {
      codename: "Code Iterator",
      prompt: "What’s the fastest thing you can build today without editing yourself?"
    },
    "bmichaelh13@gmail.com": {
      codename: "Code Explorer",
      prompt: "What forbidden tool or technique might secretly unlock a better flow?"
    }
  }
});

// 🚀 TOMORROW – Numerology 6: Harmony, Restoration
const tomorrow = generateDailyPrompt({
  date: "05/10/2025",
  numerology: 6,
  keywords: ["Balance", "Care", "Restoration", "Reflection"],
  identities: {
    "brforeal@gmail.com": {
      codename: "Code Harmonizer",
      prompt: "What edge of the codebase needs your support to feel complete?"
    },
    "brforeal.dev@gmail.com": {
      codename: "System Steward",
      prompt: "Where can your attention bring the most peace to your workflow?"
    },
    "bmichaelh13@gmail.com": {
      codename: "Code Caretaker",
      prompt: "What system deserves calm reflection before you expand it further?"
    }
  }
});

module.exports = {
  generateDailyPrompt,
  yesterday,
  today,
  tomorrow
};

