import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact-view.html',
  styleUrls: ['./contact-view.scss']
})
export class ContactView {
  env = environment;

  constructor(private _sanitizer: DomSanitizer) { }

  sanitize(url: string) {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }
}
