/**
 * Category model
 */
export interface Category {
    id: number;
    name: string;
    type: string;
}

/**
 * Categories list model
 */
export interface Categories {
    items: {
        data: Category[];
    };
}
