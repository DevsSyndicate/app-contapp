/**
 * Dates service interface
 */
export interface DatesUsesCasesInterface {

    /**
     * Get current date in string format
     */
    getCurrentDtae: () => string;

    /**
     * Get current month
     */
    getCurrentMonth: () => string;
}
