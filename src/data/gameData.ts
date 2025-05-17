
export interface Question {
  true: string;
  false: string;
  fact: string;
}

export interface Theme {
  name: string;
  colors: [string, string]; // start and end gradient colors
  emoji: string;
}

export interface GameData {
  date: string;
  theme: Theme;
  questions: Question[];
}

// Theme data based on date
export const themes: Record<string, Theme> = {
  "2025-05-17": {
    name: "Space Day",
    colors: ["#0b0c1a", "#3e47a1"],
    emoji: "🚀"
  },
  "2025-05-18": {
    name: "Ocean Day",
    colors: ["#00476b", "#0095c5"],
    emoji: "🌊"
  },
  "2025-05-19": {
    name: "Food Day",
    colors: ["#8f4e00", "#d98c00"],
    emoji: "🍕"
  },
  "2025-05-20": {
    name: "Animal Day",
    colors: ["#2e5902", "#73a942"],
    emoji: "🦁"
  },
  "2025-05-21": {
    name: "History Day",
    colors: ["#69140e", "#a44200"],
    emoji: "📜"
  },
  "2025-05-22": {
    name: "Art Day",
    colors: ["#41506b", "#ba704f"],
    emoji: "🎨"
  },
  "2025-05-23": {
    name: "Tech Day",
    colors: ["#2b2d42", "#5c80bc"],
    emoji: "💻"
  },
};

// Game data with questions for each day
export const gameData: Record<string, GameData> = {
  "2025-05-17": {
    date: "2025-05-17",
    theme: themes["2025-05-17"],
    questions: [
      {
        true: "Venus spins backwards compared to most planets.",
        false: "All planets in our solar system rotate in the same direction.",
        fact: "Venus rotates in the opposite direction (clockwise) compared to most other planets, which rotate counterclockwise!"
      },
      {
        true: "A day on Mercury is longer than its year.",
        false: "Mercury has the shortest day in our solar system.",
        fact: "Mercury rotates so slowly that it takes 176 Earth days to complete one rotation, but only 88 Earth days to orbit the Sun!"
      },
      {
        true: "Saturn's rings are mostly made of ice and rock.",
        false: "Saturn's rings are made primarily of gas and dust.",
        fact: "The rings are composed of billions of particles of ice, dust and rock, ranging from tiny grains to chunks as big as a house!"
      },
      {
        true: "The Sun makes up about 99.86% of the mass in our solar system.",
        false: "Jupiter contains most of the mass in our solar system.",
        fact: "The Sun is so massive that it contains approximately 99.86% of all the mass in our entire solar system!"
      },
      {
        true: "The Great Red Spot on Jupiter is a storm that has lasted over 300 years.",
        false: "The Great Red Spot on Jupiter formed in the 1950s.",
        fact: "Jupiter's Great Red Spot was first observed in the 1600s and is a massive storm system bigger than Earth!"
      }
    ]
  },
  "2025-05-18": {
    date: "2025-05-18",
    theme: themes["2025-05-18"],
    questions: [
      {
        true: "Octopuses have three hearts.",
        false: "Octopuses have two brains but one heart.",
        fact: "An octopus has two hearts to pump blood through its gills and a third heart for the rest of its body!"
      },
      {
        true: "The blue whale is the loudest animal on Earth.",
        false: "The howler monkey is the loudest animal on Earth.",
        fact: "Blue whale calls can reach 188 decibels and travel for hundreds of miles underwater!"
      },
      {
        true: "There are more than 3 million shipwrecks on the ocean floor.",
        false: "About 200,000 shipwrecks have been discovered on the ocean floor.",
        fact: "UNESCO estimates that over 3 million shipwrecks lie on seabeds around the world, many still undiscovered!"
      },
      {
        true: "The Pacific Ocean contains more than half of Earth's free water.",
        false: "All oceans contain roughly equal amounts of water.",
        fact: "The Pacific Ocean is the largest and deepest ocean, containing about 50.1% of all the Earth's ocean water!"
      },
      {
        true: "Most of Earth's oxygen comes from ocean plants.",
        false: "Most of Earth's oxygen comes from rainforests.",
        fact: "Phytoplankton in the oceans produce between 50-85% of the oxygen we breathe, far more than rainforests!"
      }
    ]
  },
  "2025-05-19": {
    date: "2025-05-19",
    theme: themes["2025-05-19"],
    questions: [
      {
        true: "Honey never spoils.",
        false: "Honey typically spoils after 5-10 years.",
        fact: "Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!"
      },
      {
        true: "Carrots were originally purple, not orange.",
        false: "Wild carrots have always been orange.",
        fact: "Orange carrots were developed in the 17th century by Dutch growers as a tribute to William of Orange who led the struggle for Dutch independence!"
      },
      {
        true: "Bananas are berries but strawberries are not.",
        false: "Strawberries are berries but bananas are not.",
        fact: "Botanically, bananas are berries while strawberries are 'aggregate accessory fruits' – the visible 'seeds' on strawberries are actually individual fruits!"
      },
      {
        true: "Ketchup was sold as medicine in the 1830s.",
        false: "Ketchup was invented in the United States in the 1900s.",
        fact: "In the 1830s, ketchup was sold as pills to treat diarrhea, indigestion, and other ailments!"
      },
      {
        true: "The most expensive pizza in the world costs over $12,000.",
        false: "The most expensive pizza in the world costs about $1,000.",
        fact: "Created by Renato Viola, the 'Louis XIII' pizza costs around $12,000 and is topped with three types of rare caviar, lobster from Norway, and seven types of cheese!"
      }
    ]
  },
  "2025-05-20": {
    date: "2025-05-20",
    theme: themes["2025-05-20"],
    questions: [
      {
        true: "A group of flamingos is called a 'flamboyance'.",
        false: "A group of flamingos is called a 'flock'.",
        fact: "Groups of animals often have unique names – flamingos form a 'flamboyance', while crows gather in a 'murder'!"
      },
      {
        true: "Koalas have fingerprints nearly identical to humans.",
        false: "No animals besides primates have fingerprints.",
        fact: "Koala fingerprints are so similar to humans that they have occasionally confused crime scene investigators!"
      },
      {
        true: "Sharks are older than trees.",
        false: "Trees evolved before sharks.",
        fact: "Sharks have been around for about 450 million years, while the first trees appeared about 350 million years ago!"
      },
      {
        true: "A snail can sleep for three years at a time.",
        false: "The longest a snail can hibernate is six months.",
        fact: "Some snails can enter a deep hibernation state called estivation and remain inactive for up to three years if environmental conditions are unfavorable!"
      },
      {
        true: "Cows have best friends and get stressed when separated.",
        false: "Cows don't form social bonds with specific individuals.",
        fact: "Studies show cows form close bonds with particular herd members, and their heart rates increase when separated from their bovine friends!"
      }
    ]
  },
  "2025-05-21": {
    date: "2025-05-21",
    theme: themes["2025-05-21"],
    questions: [
      {
        true: "Cleopatra lived closer in time to the invention of the iPhone than to the building of the Great Pyramid.",
        false: "The Great Pyramid was built during Cleopatra's reign.",
        fact: "Cleopatra lived around 30 BCE, while the Great Pyramid was built around 2560 BCE – that's about 2,500 years apart. The iPhone was invented only about 2,000 years after Cleopatra!"
      },
      {
        true: "Oxford University is older than the Aztec Empire.",
        false: "The Aztec Empire existed for centuries before Oxford was founded.",
        fact: "Oxford University was founded around 1096, while the Aztec civilization began its rise to power in the 14th century!"
      },
      {
        true: "Nintendo was founded in 1889.",
        false: "Nintendo was founded in the 1950s.",
        fact: "Nintendo started as a playing card company in 1889, more than 60 years before Sony and almost 100 years before the first Nintendo video game system!"
      },
      {
        true: "The fax machine was invented before the American Civil War.",
        false: "The fax machine was invented in the 1920s.",
        fact: "The first fax machine was patented in 1843 by Alexander Bain, almost two decades before the American Civil War began in 1861!"
      },
      {
        true: "Ancient Romans used urine as mouthwash.",
        false: "Ancient Romans invented mint-flavored toothpaste.",
        fact: "Romans collected urine for its ammonia content and used it not only as mouthwash but also to whiten togas and even tan leather!"
      }
    ]
  }
};

// Function to get today's date in YYYY-MM-DD format
export function getTodayDateString(): string {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

// Function to get game data for today or a specific date
export function getGameDataForDate(dateStr?: string): GameData {
  const date = dateStr || getTodayDateString();
  
  // If we don't have data for today's date, use the most recent date (for demo purposes)
  if (!gameData[date]) {
    // For demo, use 2025-05-17 as fallback
    return gameData["2025-05-17"];
  }
  
  return gameData[date];
}

// Function to determine rank title based on score
export function getRankTitle(score: number, total: number): string {
  const percentage = (score / total) * 100;
  
  if (percentage === 100) return "Fact Master 🧠";
  if (percentage >= 80) return "Knowledge Guru ✨";
  if (percentage >= 60) return "Getting There! 👍";
  if (percentage >= 40) return "Not Bad! 🙂";
  if (percentage >= 20) return "Nice Try! 🌱";
  return "Oops — Try again tomorrow! 😊";
}
