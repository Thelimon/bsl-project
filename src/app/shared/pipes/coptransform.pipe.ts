import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'COPtransform',
})
export class COPtransformPipe implements PipeTransform {
  transform(item: any, replace: any, replacement: any): any {
    if (item === 0) return 0;
    item = item.replace(replace, replacement);
    return item;
  }
}
