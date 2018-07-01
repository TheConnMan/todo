import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'linkable' })
export class LinkablePipe implements PipeTransform {

  urlRegex = /(https?:\/\/?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b[-a-zA-Z0-9@:%_\+.~#?&//=]*))/;

  constructor(private _sanitizer: DomSanitizer) {

  }

  transform(text: string): string {
    const sanitized = this._sanitizer.sanitize(SecurityContext.HTML, text);
    return sanitized.replace(this.urlRegex, '<a href="$1" target="_blank">$2</a>');
  };
}