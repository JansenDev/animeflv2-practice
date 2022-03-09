import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'urlSafe',
})
export class UrlSafePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(url: string): unknown {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
