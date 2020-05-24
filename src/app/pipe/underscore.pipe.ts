import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'underscore',
})
export class UnderscorePipe implements PipeTransform {
    transform(value: string, before: string, after: string): string {
        console.log(value);

        return (before ? before : '') + value + (after ? after : '');
    }
}
