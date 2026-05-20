import { defineStore } from 'pinia';

type ProjectMap = Record<string, Project>

export const useProjectStore = defineStore('projects', {
    state: () => ({
        projects: {} as ProjectMap,
    }),

    getters: {
        getProjectById: (state) => {
            return (id: string): Project | undefined => {
                return state.projects[id];
            }
        }

        getProjectsByQuery: (state) => {
        }

        getProjects: (state) => {
            return [...projects.values()];
        }
    },

    actions: {
        import(list: Project[]) {
            projects = list.map((item) => {
                
            });
        },

        setCurr(i: number) {
            curr = i;
        }
    }
});
