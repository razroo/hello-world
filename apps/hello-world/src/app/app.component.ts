import { Component } from '@angular/core';

@Component({
  selector: 'hello-world-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'hello-world';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
