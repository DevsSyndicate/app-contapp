import { Pipe, PipeTransform } from '@angular/core';

/**
 *
 */
@Pipe({
    name: 'currency',
    standalone: true,
})

/**
 * Returns an amount value with currency format
 */
export class CurrencyPipe implements PipeTransform {
    /**
     * Return euro currency concated to the string
     */
    public transform(value: number): string {
        return value.toFixed(2) + '€';
    }
}
