import type Project from '../src/types/Project.d.ts';

export const projects: Readonly<Project[]> = Object.freeze([
  Object.freeze({
    "id": "creditwise",
    "name": "CreditWise",
    "description": [
      "Credit card scraper and recommender",
      "For our submission to McHacks, my friend and I created CreditWise: a website capable of helping you find the best credit card to maximize your annual monetary return in rewards, based on your unique spending preferences. The website is up and running at creditwise.dev!"
    ],
    "frameworks": ["javascript", "gemini", "curl", "playwright", "beautifulsoup", "nextjs", "plaid", "python", "tailwind"],
    "dates": "March 2026 - May 2026"
  }),

  Object.freeze({
    "id": "godot",
    "name": "Godot Game",
    "description": [
      "3D Open-World Video Game",
      "I spent the duration of one year working on a 3D video game from scratch (with the Godot Engine). I designed and animated assets in Blender, made music, wrote GLSL shaders, and wrote lots of code in GDScript.\n\nI had the opportunity to present my project at a local conference!",
      "Throughout my senior year of highschool, I worked on making a 3D open-world video game which I ultimately presented at my local science fair. I worked on almost every aspect, including making assets in Blender, writing music with Chrome Music Lab, writing shaders with GLSL, and of course, writing scripts in GDScript (very similar to Python).\n\nI devoted an innumerable amount of time to working on my game, often working for the duration of an entire weekend or sitting down at our kitchen table from right after I got back from school until it was time to go to bed. While it's not perfect, and it has its fair share of bugs, I am quite proud of the end result."
    ],
    "frameworks": ["godot", "glsl", "blender"],
    "dates": "August 2023 - June 2024"
  }),

  Object.freeze({
    "id": "glasses",
    "name": "GLASSES",
    "description": [
      "Song detection and OLED lyric display",
      "I worked with a group to develop a pair of glasses that connected wirelessly to a mobile application. By using the phone's microphone to listen to the phone's surroundings, any nearby music is automatically detected. By using an OLED display on the glasses lenses and a Raspberry Pi, the lyrics to the song (once confirmed by the user) are displayed for the wearer to view.\n\nThe mobile application was developed with React Native and the Pi used PiOS. We used the API Shazam.py for music detection.",
    ],
    "frameworks": ["reactn", "javascript", "rpi", "python", "expo", "html"],
    "dates": "October 2024 - December 2024"
  }),

  Object.freeze({
    "id": "platformer",
    "name": "Platformer",
    "description": [
      "Java platformer game",
      "As the final project of my first formal programming class my freshman year of high school, we had to make our own short video games. I chose to make a 2D platformer featuring a red circle as the main character. I remember dedicating a lot of time to the project so that I could have an interesting final result -- in the end, it had over 1000 lines of code, and generated about 7 minutes of playtime.",
    ],
    "frameworks": ["java"],
    "dates": ""
  }),

  Object.freeze({
    "id": "game_theory",
    "name": "Game Theory Website",
    "description": [
      "Intro to game theory and build-a-bot interface",
      "When I was a sophomore in High School, we did a project inspired by LessWrong's 'Darwin Game'. I took a great interest to the project, and conducted lots of research and spent lots of time planning and programming my solution. Several years later, I made an online simulator (inspired by Nicky Case's 'The Evolution of Trust') to allow less technical audiences to make bots of their own to compete in a similar iterated Prisoner's Dilemma Game. That simulator was written purely in HTML, so I have subsequently begun working on an updated, more advanced version written using React, Vite, and JavaScript.",
    ],
    "frameworks": ["react", "javascript", "vite", "html", "tailwind"],
    "dates": ""
  }),

  Object.freeze({
    "id": "clue",
    "name": "Clue Bot",
    "description": [
      "Automated clue solver",
      "My little sister LOVES Clue. Like, a lot. Whenever we play, each person uses up an entire game card in order to take detailed notes. Previously, I have made card templates in Google Sheets/Excel so that we don't run out of paper game templates. At some point, I decided I could write formulas to help take some of the work out of noting everything down. And not too long after, I realized that I could very easily do the same thing programmatically -- and, as a plus, it would be a great way to mess with my little sister. Thus, my Python clue solver was born. It relies on pure logic, unlike other clue solvers that estimate card ownership with probabilities. Although it's not the most sophisticated, and also not done, it can now solve clue games faster than I can!",
    ],
    "frameworks": ["python"],
    "dates": "December 2023 - February 2024"
  }),

  Object.freeze({
    "id": "grades",
    "name": "Grades App",
    "description": [
      "Clean grades display",
      "The mobile application my high school used to display grades while I was attending was quite poor. It was constantly crashing, and you oftentimes had to close and re-open the grades page multiple times until it will properly pull your grade data. As such, I decided to take matters into my own hands: using a web-scraping API, I made my own app that would display grade data, and more. It was also flush with unique customization options that would enable the user to make their experience their own -- and protect their grade information from any bad actors.",
    ],
    "frameworks": ["reactn", "javascript", "studentvue", "html"],
    "dates": ""
  }),

  Object.freeze({
    "id": "trvl",
    "name": "trvl",
    "description": [
      "RAG-LLM powered travel itinerary generator",
      "For our submission to BagelHacks, my team made a domain-specific AI search engine using a RAG LLM. For our specific use case of our search engine, we made a website that could generate custom-tailored travel itineraries for its users. Our website was built using React and Next.js.",
    ],
    "frameworks": ["javascript", "react", "nextjs", "tailwind", "flask", "postgresql", "gemini", "cohere", "vite", "html"],
    "dates": ""
  }),

  Object.freeze({
    "id": "mywebsite",
    "name": "Personal Website",
    "description": [
      "This website!",
      "You're looking at it! I began working on this in March of 2025, but I decided to start over from scratch and write is using Vue instead of React and TypeScript instead of JavaScript so that I could learn some new langauges and frameworks.",
    ],
    "frameworks": ["vue", "pinia", "tailwind", "typescript", "javascript", "vite", "html"],
    "dates": ""
  }),

  Object.freeze({
    "id": "uome",
    "name": "UOME",
    "description": [
      "Debt tracker between friends",
      "For our submission to McHacks, my group made a mobile application that enables its users to track debts between friends. Say one friend pays for their friend group's lunch: all they need to do is whip out their phone, take a picture of the receipt, assign the items to different individuals, and it will automatically calculate how much their friends owe them. It will 'cancel out' any debts between people who pay for one another.",
    ],
    "frameworks": ["reactn", "javascript", "flask", "python", "sqlite", "sqlalchemy", "expo", "css", "html"],
    "dates": ""
  }),

  Object.freeze({
    "id": "calculator",
    "name": "Calculator",
    "description": [
      "iPhone calculator copycat",
      "My junior year of high school, I made a mobile application replicating Apple's calculator app.",
    ],
    "frameworks": ["reactn", "javascript", "expo", "html"],
    "dates": ""
  })
]);