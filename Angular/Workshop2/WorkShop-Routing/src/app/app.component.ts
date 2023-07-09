import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Components-Workshop';

  constructor(
    private router: Router,
    private pageTitle: Title
  )
  {
    this.router.events.pipe(filter(e => e.instanceof NavigationEnd), map)
  }
}
