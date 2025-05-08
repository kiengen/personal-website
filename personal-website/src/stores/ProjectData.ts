import { defineStore } from 'pinia';

export const useProjectData = defineStore('main', {
    state: () => {
        return {
            projects: [{name: "Godot Game",
                        photos: ["godot/1.png"],
                        description: "Throughout my senior year of highschool, I worked on making a 3D open-world video game which I ultimately presented at my local science fair. I worked on almost every aspect, including making assets in Blender, writing music with Chrome Music Lab, writing shaders with GLSL, and of course, writing scripts in GDScript (very similar to Python).\n\nI devoted an innumerable amount of time to working on my game, often working for the duration of an entire weekend or sitting down at our kitchen table from right after I got back from school until it was time to go to bed. While it's not perfect, and it has its fair share of bugs, I am quite proud of the end result.",
                        frameworks: ["Godot Engine", "GLSL", "Blender"],
                        dates: "August 2023 - June 2024",
                        keywords: ["game development"]},

                       {name: "GLASSES",
                        photos: ["uome/1.png"],
                        description: "I worked with a group to develop a pair of glasses that connected wirelessly to a mobile application. By using the phone's microphone to listen to the phone's surroundings, any nearby music is automatically detected. By using an OLED display on the glasses lenses and a Raspberry Pi, the lyrics to the song (once confirmed by the user) are displayed for the wearer to view.\n\nThe mobile application was developed with React Native and the Pi used PiOS. We used the API Shazam.py for music detection.",
                        frameworks: ["React Native", "JavaScript", "Raspberry Pi", "Python", "Expo", "HTML"],
                        dates: "October 2024 - December 2024",
                        keywords: ["app development", "mobile application", "hardware"]},

                       {name: "Platformer",
                        photos: ["platformer/1.png"],
                        description: "As the final project of my first formal programming class my freshman year of high school, we had to make our own short video games. I chose to make a 2D platformer featuring a red circle as the main character. I remember dedicating a lot of time to the project so that I could have an interesting final result -- in the end, it had over 1000 lines of code, and generated about 7 minutes of playtime.",
                        frameworks: ["Java"],
                        dates: "",
                        keywords: ["game development"]},

                       {name: "Game Theory Website",
                        photos: ["darwin/1.png"],
                        description: "When I was a sophomore in High School, we did a project inspired by LessWrong's 'Darwin Game'. I took a great interest to the project, and conducted lots of research and spent lots of time planning and programming my solution. Several years later, I made an online simulator (inspired by Nicky Case's 'The Evolution of Trust') to allow less technical audiences to make bots of their own to compete in a similar iterated Prisoner's Dilemma Game. That simulator was written purely in HTML, so I have subsequently begun working on an updated, more advanced version written using React, Vite, and JavaScript.",
                        frameworks: ["React", "JavaScript", "Vite", "HTML", "TailwindCSS"],
                        dates: "",
                        keywords: ["website", "web dev", "logic"]},

                       {name: "Clue Bot",
                        photos: ["clue/1.png"],
                        description: "My little sister LOVES Clue. Like, a lot. Whenever we play, each person uses up an entire game card in order to take detailed notes. Previously, I have made card templates in Google Sheets/Excel so that we don't run out of paper game templates. At some point, I decided I could write formulas to help take some of the work out of noting everything down. And not too long after, I realized that I could very easily do the same thing programmatically -- and, as a plus, it would be a great way to mess with my little sister. Thus, my Python clue solver was born. It relies on pure logic, unlike other clue solvers that estimate card ownership with probabilities. Although it's not the most sophisticated, and also not done, it can now solve clue games faster than I can!",
                        frameworks: ["Python"],
                        dates: "December 2023 - February 2024",
                        keywords: ["game theory", "logic"]},

                       {name: "Grades App",
                        photos: ["grades/1.png"],
                        description: "The mobile application my high school used to display grades while I was attending was quite poor. It was constantly crashing, and you oftentimes had to close and re-open the grades page multiple times until it will properly pull your grade data. As such, I decided to take matters into my own hands: using a web-scraping API, I made my own app that would display grade data, and more. It was also flush with unique customization options that would enable the user to make their experience their own -- and protect their grade information from any bad actors.",
                        frameworks: ["React Native", "JavaScript", "Naviance API", "HTML"],
                        dates: "",
                        keywords: ["app development", "mobile application"]},

                       {name: "trvl",
                        photos: ["trvl/1.png"],
                        description: "For our submission to BagelHacks, my team made a domain-specific AI search engine using a RAG LLM. For our specific use case of our search engine, we made a website that could generate custom-tailored travel itineraries for its users. Our website was built using React and Next.js.",
                        frameworks: ["JavaScript", "React", "Next.js", "TailwindCSS", "Flask", "PostgreSQL", "Gemini", "Cohere", "Vite", "HTML"],
                        dates: "",
                        keywords: ["web development", "ai", "ml", "machine learning", "artificial intelligence", "ai/ml", "webscraping", "webscrape", "website", "hackathon"]},

                       {name: "Personal Website",
                        photos: ["website/1.png"],
                        description: "You're looking at it! I began working on this in March of 2025, but I decided to start over from scratch and write is using Vue instead of React and TypeScript instead of JavaScript so that I could learn some new langauges and frameworks.",
                        frameworks: ["Vue", "Pinia", "TailwindCSS", "TypeScript", "JavaScript", "Vite", "HTML"],
                        dates: "",
                        keywords: ["web development"]},

                       {name: "CheckMate",
                        photos: ["uome/1.png"],
                        description: "For our submission to McHacks, my group made a mobile application that enables its users to track debts between friends. Say one friend pays for their friend group's lunch: all they need to do is whip out their phone, take a picture of the receipt, assign the items to different individuals, and it will automatically calculate how much their friends owe them. It will 'cancel out' any debts between people who pay for one another.",
                        frameworks: ["React Native", "JavaScript", "Flask", "Python", "SQLite", "SQLAlchemy", "Expo", "CSS", "HTML"],
                        dates: "",
                        keywords: ["app development", "mobile application", "hackathon"]},

                       {name: "Calculator",
                        photos: ["calculator/1.png"],
                        description: "My junior year of high school, I made a mobile application replicating Apple's calculator app.",
                        frameworks: ["React Native", "JavaScript", "Expo", "HTML"],
                        dates: "",
                        keywords: ["mobile application", "app development"]},
            ]
        }
    }
});
