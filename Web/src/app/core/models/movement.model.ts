/**
 * Movement model
 */
export interface Movement {
    id: number;
    name: string;
    type: string;
    category: any;
    amount: number;
    date: any;
}

/**
 * Movements list model
 */
export interface Movements {
    items: {
        data: Movement[];
    };
}

/**
 * Movements filter model
 */
export interface MovementsFilter {
    type: string;
    month: string;
}
