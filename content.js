// =====================================================================
//  EVERYTHING YOU CAN EDIT IS IN THIS FILE.
//  Keep the quotes "" and commas , where they are.
//  Photos go in the "photos" folder, voice notes in the "voice" folder.
//  If a photo file is missing, the site shows a soft placeholder instead.
// =====================================================================

const FILM = {

  // ---------- The ticket (lock screen) ----------
  password: "0801",
  passwordHint: "the day it all started (MMDD)",

  // ---------- Basics ----------
  him: "Rehan",
  her: "Raiqa",
  age: 18,
  togetherSince: "2023-08-01T00:00:00",
  hisCity: "Dubai",
  hisCountry: "UAE",
  hisTimeZone: "Asia/Dubai",
  herCity: "Virginia",
  herCountry: "USA",
  herTimeZone: "America/New_York",
  milesApart: 7251,
  nextVisit: "",                       // e.g. "2026-12-20T12:00:00" to show a countdown. "" hides it.

  // ---------- Music ----------
  songs: {
    bb:      { file: "music/beautiful-boy.mp3",          title: "Beautiful Boy (Darling Boy)", artist: "John Lennon" },
    life:    { file: "music/life.mp3",                   title: "Life",                        artist: "Mac Miller" },
    forever: { file: "music/not-a-lot-just-forever.mp3", title: "Not a Lot, Just Forever",     artist: "Adrianne Lenker" }
  },

  // ---------- Chapter One: Beautiful Boy ----------
  ch1: {
    // One full page of writing for this chapter. Add or remove paragraphs freely.
    page: {
      title: "To the boy I met, and the man you're becoming.",
      paragraphs: [
        "Happy 18th birthday. I've been thinking about this day for a while, and every time I try to put into words how proud I am of you, it comes out too small. So I'm going to try anyway.",
        "When we met in 2023, we were so young. I didn't know then that I was getting to watch someone grow up in real time. I've watched you figure out who you are, what you care about, and what kind of person you want to be. I've seen you get knocked down and get back up, a little stronger every time.",
        "The thing I love most is that growing up hasn't made you harder. It's made you kinder. You're more patient now, more thoughtful, and more sure of yourself. You take care of the people you love, me included, even from the other side of the world.",
        "Eighteen looks good on you. I'm so grateful I got to be there for this part of the journey, and I can't wait to keep watching you become everything you're going to be."
      ]
    },
    tagline: "On becoming.",
    opening: "Happy birthday, Rehan.",
    paragraphs: [
      "Eighteen. I keep saying it out loud and it still doesn't feel real.",
      "I've been lucky enough to watch you grow up. Not just older, but kinder, steadier, and braver. The boy I met in 2023 has been turning into a man I'm so proud of, one day at a time.",
      "I'm so glad I got a front row seat to it."
    ],
    // "Develop the photo" activity. Use an older photo of him (or of you two at the start).
    develop: { photo: "photos/develop.jpg", before: "Hold and rub to develop", after: "Look how far you've come." },
    // Two photos with optional director's commentary (a voice note from you).
    photos: [
      { photo: "photos/ch1-a.jpg", caption: "caption here", voice: "voice/ch1-a.m4a" },
      { photo: "photos/ch1-b.jpg", caption: "caption here", voice: "" }
    ],
    closing: "The man you're becoming is my favorite person I've ever known."
  },

  // ---------- Chapter Two: Life ----------
  ch2: {
    // One full page of writing for this chapter. Add or remove paragraphs freely.
    page: {
      title: "What we built.",
      paragraphs: [
        "When I think about us three years ago, I almost laugh. We had no idea what we were doing. We just knew we liked talking to each other and never wanted the call to end.",
        "Since then we've grown up side by side. We've learned how to argue and make up faster. We've learned each other's moods, the little things that make a bad day better, and when to just listen. None of that happened by accident. We chose each other, over and over.",
        "I've gotten to celebrate three of your birthdays with you, and every one has meant more than the one before. Not because the plans got bigger, but because I knew you a little better each time.",
        "What we have now feels steady in a way I didn't know was possible. Thank you for growing with me instead of away from me. I'm so proud of us."
      ]
    },
    tagline: "On us.",
    paragraphs: [
      "We were kids when this started. Somewhere between the late night calls, the fights we laughed about later, and every \"okay, you hang up first,\" we grew up together.",
      "We learned how to be patient with each other. How to show up, even from the other side of the world. What we have didn't happen by accident. We built it."
    ],
    birthdaysTitle: "Three birthdays together.",
    birthdaysText: "I'm so grateful I got to spend them with you, and I'm still not tired of celebrating you.",
    birthdays: [
      { year: "2023", photo: "photos/bday-1.jpg", caption: "caption here" },
      { year: "2024", photo: "photos/bday-2.jpg", caption: "caption here" },
      { year: "2025", photo: "photos/bday-3.jpg", caption: "caption here" }
    ],
    // The sideways-scrolling highlight reel
    reel: [
      { photo: "photos/reel-1.jpg", caption: "caption", voice: "" },
      { photo: "photos/reel-2.jpg", caption: "caption", voice: "" },
      { photo: "photos/reel-3.jpg", caption: "caption", voice: "" },
      { photo: "photos/reel-4.jpg", caption: "caption", voice: "" },
      { photo: "photos/reel-5.jpg", caption: "caption", voice: "" },
      { photo: "photos/reel-6.jpg", caption: "caption", voice: "" },
      { photo: "photos/reel-7.jpg", caption: "caption", voice: "" },
      { photo: "photos/reel-8.jpg", caption: "caption", voice: "" }
    ],
    // Memory quiz. "answer" is the number of the right option, starting from 0.
    // For a typed answer use type: "text" and match: any answer containing this word counts as right.
    quiz: [
      { q: "Who said \"I love you\" first?", options: ["Rehan", "Raiqa"], answer: 0, right: "Correct. And I said it back immediately.", wrong: "Nope. Nice try." },
      { q: "Who always falls asleep first on FaceTime?", options: ["Rehan", "Raiqa", "Both of us, at the same time"], answer: 0, right: "Every single time.", wrong: "We both know that's not true." },
      { q: "What was our OG spot?", type: "text", match: "chinn", right: "You remembered.", wrong: "How could you forget?!" },
      { q: "What's the song playing right now?", options: ["Life by Mac Miller", "Beautiful Boy", "Not a Lot, Just Forever"], answer: 0, right: "You're paying attention.", wrong: "Listen closer." }
    ]
  },

  // ---------- Chapter Three: Not a Lot, Just Forever ----------
  ch3: {
    // One full page of writing for this chapter. Add or remove paragraphs freely.
    page: {
      title: "Everything after.",
      paragraphs: [
        "Right now there's an ocean between us. Your mornings are my nights, and some days the distance feels loud. But I have never once felt like it was stronger than us.",
        "I'm so excited for our future. For the day the miles finally run out. For the trips we keep planning, and for the boring, ordinary days we'll get to spend in the same place.",
        "I'm excited to watch you start this new chapter as an adult, and to stand next to you for all of it: the big wins, the hard days, and everything in between.",
        "I don't need a lot from the years ahead. Just you, and forever. Happy birthday, my love."
      ]
    },
    tagline: "On what's next.",
    paragraphs: [
      "Right now there are 7,251 miles and nine hours between us. Your morning is my night.",
      "But I'm not scared of the distance. I'm excited. For every time it shrinks to zero, for all the birthdays still coming, and for the life we're going to build."
    ],
    // "Coming soon" trailers for your future
    comingSoon: [
      { title: "Zero Miles", line: "The day the distance finally runs out." },
      { title: "Nineteen", line: "Your next birthday. Same room this time." },
      { title: "The Trip", line: "The one we keep talking about." },
      { title: "Everything After", line: "All of it. With you." }
    ],
    closing: "Not a lot. Just forever."
  },

  // ---------- The final scene: your letter ----------
  // A blank line starts a new paragraph. REWRITE THIS IN YOUR OWN WORDS.
  letter: `Rehan,

Happy 18th birthday. I wish I could say this to you in person, so this little film will have to do for now.

Thank you for growing with me, for being patient with me, and for choosing me every day from across the world.

I'm so proud of who you are, and I can't wait to see who you become.

I love you. Not a lot. Just forever.`,

  // ---------- End credits ----------
  credits: [
    ["Starring", "Rehan, as himself"],
    ["Co-starring", "Raiqa"],
    ["Written and directed by", "Raiqa"],
    ["Filmed on location in", "Virginia · Dubai · FaceTime"],
    ["Original soundtrack", "Beautiful Boy · Life · Not a Lot, Just Forever"],
    ["Based on", "a true story"],
    ["Running time", "3 years and counting"]
  ],

  // ---------- Post-credits scene (only if he waits) ----------
  postCredits: {
    heading: "You stayed after the credits.",
    text: "Of course you did. One last thing before you go...",
    video: "",          // e.g. "voice/message.mp4" for a video from you. "" hides it.
    surprise: "Put your gift reveal or a final message here."
  },

  // Your WhatsApp number for his review, with country code and no + or spaces (e.g. "15715551234").
  // Leave "" and it opens a normal text message instead.
  herWhatsApp: "",

  // ---------- Deleted scenes (unlocked when he finds all 4 hidden 🎬) ----------
  deletedScenes: [
    { photo: "photos/deleted-1.jpg", caption: "blooper caption" },
    { photo: "photos/deleted-2.jpg", caption: "blooper caption" },
    { photo: "photos/deleted-3.jpg", caption: "blooper caption" },
    { photo: "photos/deleted-4.jpg", caption: "blooper caption" }
  ]
};
