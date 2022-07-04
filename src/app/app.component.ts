import { Component } from '@angular/core';
import * as aos from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-portfolio';

  ngOnInit() {
    aos.init();
  }
}
