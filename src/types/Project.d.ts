export {};
declare global {
    interface Project {
        id: string,
        name: string,
        description: string,
        frameworks: Framework[],
        dates: string,
        keywords: Category[],
    }
}
