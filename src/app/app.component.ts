import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cigogne-front';
  show_easter_egg = false;

  openEasterEgg() : void {
    this.show_easter_egg = !this.show_easter_egg;
    console.warn("Bravo ! Vous avez débloqué le konami code !");
  }
}