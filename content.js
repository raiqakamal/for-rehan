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
        "I didn’t think I could be any happier watching you step into this new chapter of your life. Then I realized I get to be here with you for it, and somehow that makes it even better.",
        "I’ll always remember the passionate, driven boy I met when we first started talking. You still show me he’s there, especially now that you’ve taken your nerdy passions and turned them into a real goal you pour your days and nights into. I’m so proud of you, and I know freshman year Rehan would be too.",
        "When we met, I had no idea of the extent of your growing up I’d get to see, or that I’d get to be there for every step of it. I watched you go from building your whole life around swimming to choosing what actually makes you happy. I watched you figure out who you are and what kind of person you want to be. And I’ve seen you face obstacle after obstacle and come out of each one stronger than before.",
        "This year has been different from the ones before it. You moved to Dubai, your days look completely different, we hit a bump in the middle, and we made it through another year together. That’s a lot of change, but I’m happy to say all of it was for the better. None of it made you lose hope or turn bitter. It made you wiser, more patient, more thoughtful, and more sure of yourself. I’ve always seen those things in you, and they only grow as time goes on. I admire the way that you take care of the people you love, and how you will never give up.",
        "Eighteen is going to look so good on you. I’m so grateful I get to stay by your side on this journey, and I can’t wait to watch you become everything you hope to be. I love you so so much stinkabutt."
      ]
    },
    tagline: "On becoming.",
    opening: "Happy birthday, Rehan.",
    paragraphs: [
      "Happy birthday to my best friend ever. You’re finally grown and 18! Every birthday I watch you become better from the last. I couldn’t be more grateful to watch you grow older, kinder, smarter, and wiser. ",
      "I am so proud of who you are and I couldn’t be more grateful to watch you turn into the person you are today from the 14 year old I met in 2023. ",
    ],
    // "Develop the photo" activity. Use an older photo of him (or of you two at the start).
    develop: { photo: "photos/develop.jpg", before: "Hold and rub to develop", after: "Look how far you've come." },
    // Two photos with optional director's commentary (a voice note from you).
    photos: [
      { photo: "photos/ch1-a.jpg", caption: "caption here", voice: "voice/ch1-a.m4a" },
      { photo: "photos/ch1-b.jpg", caption: "Da first burday of many we got to spend together", voice: "" }
    ],
    closing: "I grow more and more proud of you every day, I'm so happy to see you becoming the man you want to be."
  },

  // ---------- Chapter Two: Life ----------
  ch2: {
    // One full page of writing for this chapter. Add or remove paragraphs freely.
    page: {
      title: "What we built.",
      paragraphs: [
        "Whenever I think about our story, I come back to one idea that if something is meant to be, it always finds its way back to you. From the moment we both thought “there’s something special about this person,” to the two and a half years we couldn’t let go of each other, to finally finding our way back and learning to handle the distance, it all led here. I truly believe we’ll always be each other’s person, and that we’re exactly where we’re supposed to be.",
        "Since we met, we’ve grown side by side, both as individuals and together. We’ve landed career opportunities, made it through years of school, and even graduated. More than that, we’ve learned how to communicate better, make up faster, and be the key to the reason others have a better day. This all happened because we keep choosing each other, over and over.",
        "You make that the easiest choice I’ve ever made. While the distance hasn’t been easy, it’s become one of the biggest blessings in our relationship. It’s given me room to understand you better, to know you more, and to connect with you in ways we never did in our first two years together. Strangely, I feel closer to you now than ever.",
        "The things I hold closest to my heart quickly became dozing off on late night calls, hearing the way your mind works while we watch AOT, and getting my ego bruised every time we play games online. Most of all, it’s learning how to really talk to you, whether we’re working through something hard or just talking for hours about nothing.",
        "You’ve gone beyond everything I ever hoped for in a person, ten times over. You’re one of the strongest people I know, someone I deeply admire, and perfect to me in every way. You’re the best part of my day, every day.",
        "I’ve now celebrated four of your birthdays with you, and each one has meant more than the last, because every year I know you a little better.",
        "What we’ve grown into feels like a breath of fresh air every single day, in a way I never knew we’d get to have. Thank you for growing with me, love. I wouldn’t have it any other way."
      ]
    },
    tagline: "On us.",
    paragraphs: [
      "We were babies when this all started. We've gone through so many stages, like 5 at this point, and somewhere between our secret hangouts, the calls we have now, and the fights we laughed about later, we grew up together.",
      "We learned how to be patient with each other. How to show up, even from the other side of the world. I love what we've built."
    ],
    birthdaysTitle: "Three birthdays together.",
    birthdaysText: "I'm so grateful I got to spend them with you, and I'll never be tired of celebrating you.",
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
      { q: "Who said \"I love you\" first?", options: ["Rehan", "Raiqa"], answer: 1, right: "Correct.", wrong: "Nope. Nice try." },
      { q: "Who always falls asleep first on FaceTime?", options: ["Rehan", "Raiqa", "Both of us, at the same time"], answer: 1, right: "Every time heh.", wrong: "We both know that's not true." },
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
        "Right now, so many things are standing in between us, a literal ocean, the time difference, and our schoolwork. Your mornings are my nights, and some days you’re working when I’m free, and the other way around. The distance can feel loud sometimes, but it has never once felt stronger than us.",
        "No matter how annoying it gets, I have no doubt that we’ll get through it together and come out better on the other side. We know how to talk things through, our conversations have so much substance to them, and when we’re finally together in person, we’ll appreciate it more than ever, no matter what life throws at us.",
        "I’m so excited for our future together. For the day the distance finally stops separating us. For the hikes we’ll finally go on, the trips we’ll take, and the ordinary days we’ll get to spend together in the same place. With the hustle we’re both on, I can see all of it happening soon and lasting forever, iA.",
        "I’m excited to watch you start this new chapter as an adult, in a new country, and as an AI entrepreneur thing. I’m so happy to be here with you through all of it: the wins, the hard days, the late nights, and everything in between.",
        "You’re capable of such big things, and I believe in you every step of the way. Not a lot, just forever. I love youuu."
      ]
    },
    tagline: "On what's next.",
    paragraphs: [
      "Right now there are 7,251 miles and nine hours between us.",
      "The distance isn't scary because I'm excited for everything that comes with it and after it. For every time the miles shrink to 0, for all the birthdays still coming, and for the life we're going to build."
    ],
    // "Coming soon" trailers for your future
    comingSoon: [
      { title: "Zero Miles", line: "The day the distance finally runs out." },
      { title: "Nineteen", line: "Your next birthday. Different room this time." },
      { title: "The Trip", line: "The ones we keep talking about." },
      { title: "Everything After", line: "All of it. With you." }
    ],
    closing: "Not a lot. Just forever. Intertwined sewn together."
  },

  // ---------- The final scene: your letter ----------
  // A blank line starts a new paragraph. REWRITE THIS IN YOUR OWN WORDS.
  letter: `Rehan,

Happy 18th birthday. I wish I could say this to you in person and surprise you with all your gifts, but I hope this little project is okay for now.

Thank you for growing with me, for being patient with me, and for choosing me every day from across the world.

I'm so proud of who you are, and I can't wait to see who you become.

I hope and pray you have such a good year moving forward, you deserve all of it.

I love you so much. Not a lot. Just forever.`,

  // ---------- End credits ----------
  credits: [
    ["Starring", "Rehan da goatt"],
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
    video: "voice/ch3-a.m4a",          // e.g. "voice/message.mp4" for a video from you. "" hides it.

  },

  // Your WhatsApp number for his review, with country code and no + or spaces (e.g. "15715551234").
  // Leave "" and it opens a normal text message instead.
  herWhatsApp: "17034620709",

};
