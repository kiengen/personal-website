import { defineStore } from 'pinia';
import type { Framework } from '../types/Framework.d.ts';

type FrameworkMap = Record<string, Framework>

export const useFrameworksStore = defineStore('frameworks', {
    state: () => ({
        frameworks: {} as FrameworkMap,
    }),

    getters: {
        getFrameworkById: (state) => {
            return (id: string): Framework | undefined => {
                return state.frameworks[id];
            }
        },

        getFrameworksById: (state) => {
            return (ids: string[]): Framework[] => {
                return ids.map(id => state.frameworks[id]).filter(Boolean) as Framework[];
            }
        },
    },

    actions: {
        setAll(list: Framework[]) {

        }
    }
});
