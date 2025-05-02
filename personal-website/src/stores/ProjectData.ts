import { defineStore } from 'pinia';

export const useProjectData = defineStore('main', {
    state: () => {
        return {
            projects: [{name: "Godot Game", photo: "godot/1.png"},
                       {name: "GLASSES", photo: "uome/1.png"},
                       {name: "Platformer", photo: "platformer/1.png"},
                       {name: "Darwin Game", photo: "darwin/1.png"},
                       {name: "Clue Bot", photo: "clue/1.png"},
                       {name: "Grades App", photo: "grades/1.png"},
                       {name: "trvl", photo: "trvl/1.png"},
                       {name: "Personal Website", photo: "website/1.png"},
                       {name: "CheckMate", photo: "uome/1.png"},
                       {name: "Calculator", photo: "calculator/1.png"},
                       {name: "a", photo: "darwin/3.png"},
                       {name: "b", photo: "website/2.png"},
                       {name: "c", photo: ""},
            ]
        }
    }
});
