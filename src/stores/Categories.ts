import { defineStore } from 'pinia';

type ProjectMap = Record<string, Project>

export const useCategoryStore = defineStore('categories', {
    state: () => ({
        categories: Category[],
        chosen_categories: Category[],
    }),

    getters: {
        getProjectById: (state) => {
            return (id: string): Project | undefined => {
                return state.projects[id];
            }
        }

        getProjectsByQuery: (state) => {
            return (keywords: string[]): Project[] => {
                let projects = [];
                for (let i = 0; i < projects.length; ++i) {
                    for (let j = 0; j < project[i].keywords.length; ++j) {
                        if (project[i].keywords[j] in keywords) {
                            projects.append(project[i]);
                        }
                    }
                    for (let j = 0; j < project[i].frameworks.length; ++j) {
                        for (let k = 0; k < project[i].frameworks[j].categories.length)
                    }
                    if (keywords in projects.keywords)
                }
                return keywords.map(keyword => )
            }
        }

        getProjects: (state) => {
            return projects;
        },

        getProject: (state) => {
            return projects[curr];
        }
    },

    actions: {
        setAll(list: Project[]) {

        },

        setCurr(i: number) {
            curr = i;
        }
    }
});
