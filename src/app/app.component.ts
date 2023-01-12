import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header></header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class AppComponent {
  title = 'portifolio';
}
