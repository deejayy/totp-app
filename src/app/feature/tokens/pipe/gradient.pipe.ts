import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'gradient' })
export class GradientPipe implements PipeTransform {
  transform(value: string): unknown {
    const crc = Array.from({ length: value.length }, (_, i) => value.charCodeAt(i)).reduce((acc, curr) => acc + curr, 0) * value.length % 360;
    return `linear-gradient(165deg, hsl(${crc}, 100%, 70%), hsl(${crc + 45}, 100%, 70%))`;
  }
}
