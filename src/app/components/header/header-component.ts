import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header-component.html',
  styleUrls: [
    './header-component.scss',
    './header-component-tablet.scss',
    './header-component-desktop.scss'
  ]
})
export class HeaderComponent {
  env = environment;

  constructor(private _sanitizer: DomSanitizer) { }

  sanitize(url: string) {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }
}
