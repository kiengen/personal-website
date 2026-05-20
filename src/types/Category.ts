export {};
declare global {
    interface Category {
        name: string,
        subcategories: Category[]
    }
}
