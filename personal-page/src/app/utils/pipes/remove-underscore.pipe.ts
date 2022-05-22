import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'RemoveUnderscore'
})
export class RemoveUnderscorePipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        return value.replace(/-/g, ' ')
    }
}