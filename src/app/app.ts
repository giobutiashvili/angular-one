import { Component } from '@angular/core';
import { Hello } from "./hello/hello";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Hello]
})
export class App {
  protected title = 'test';
}
