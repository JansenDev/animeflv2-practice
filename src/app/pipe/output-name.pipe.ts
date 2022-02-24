import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'outputName',
})
export class OutputNamePipe implements PipeTransform {
  dictionary: { [x: string]: string } = {
    ANIME: 'ANIME',
    ANIMETV: 'ANIME',
    MOVIE: 'MOVIE',
    SPECIAL: 'SPECIAL',
    OVA: 'OVA',
    ONA: 'OVA',
    MUSIC: 'MUSIC',
    DEFAULT: 'ANIME',
  };

  transform(value: string): string {
    return this.dictionary[value]
      ? this.dictionary[value]
      : this.dictionary['DEFAULT'];
  }
}
