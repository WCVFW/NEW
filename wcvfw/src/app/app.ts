import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './HTML/app.component.html',
  styleUrls: ['./CSS/app.component.css'],
})
export class App {
  protected title = 'We Can Voice for Women';
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
