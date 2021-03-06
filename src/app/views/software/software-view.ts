import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-software',
  templateUrl: './software-view.html',
  styleUrls: [
    './software-view.scss',
    './software-view-tablet.scss',
    './software-view-desktop.scss'
  ]
})
export class SoftwareView {
  env = environment;

  constructor(private _sanitizer: DomSanitizer) { }

  sanitize(url: string) {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }
}
