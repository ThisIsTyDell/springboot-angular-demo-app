import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './css/semantic.css', './css/main.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
}
